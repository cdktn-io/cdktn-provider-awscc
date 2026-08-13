# `smsvoiceConfigurationSet` Submodule <a name="`smsvoiceConfigurationSet` Submodule" id="@cdktn/provider-awscc.smsvoiceConfigurationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceConfigurationSet <a name="SmsvoiceConfigurationSet" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set awscc_smsvoice_configuration_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer"></a>

```typescript
import { smsvoiceConfigurationSet } from '@cdktn/provider-awscc'

new smsvoiceConfigurationSet.SmsvoiceConfigurationSet(scope: Construct, id: string, config?: SmsvoiceConfigurationSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig">SmsvoiceConfigurationSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig">SmsvoiceConfigurationSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putEventDestinations">putEventDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetConfigurationSetName">resetConfigurationSetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetDefaultSenderId">resetDefaultSenderId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetEventDestinations">resetEventDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetMessageFeedbackEnabled">resetMessageFeedbackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetProtectConfigurationId">resetProtectConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEventDestinations` <a name="putEventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putEventDestinations"></a>

```typescript
public putEventDestinations(value: IResolvable | SmsvoiceConfigurationSetEventDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putEventDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putTags"></a>

```typescript
public putTags(value: IResolvable | SmsvoiceConfigurationSetTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>[]

---

##### `resetConfigurationSetName` <a name="resetConfigurationSetName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetConfigurationSetName"></a>

```typescript
public resetConfigurationSetName(): void
```

##### `resetDefaultSenderId` <a name="resetDefaultSenderId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetDefaultSenderId"></a>

```typescript
public resetDefaultSenderId(): void
```

##### `resetEventDestinations` <a name="resetEventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetEventDestinations"></a>

```typescript
public resetEventDestinations(): void
```

##### `resetMessageFeedbackEnabled` <a name="resetMessageFeedbackEnabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetMessageFeedbackEnabled"></a>

```typescript
public resetMessageFeedbackEnabled(): void
```

##### `resetProtectConfigurationId` <a name="resetProtectConfigurationId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetProtectConfigurationId"></a>

```typescript
public resetProtectConfigurationId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoiceConfigurationSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isConstruct"></a>

```typescript
import { smsvoiceConfigurationSet } from '@cdktn/provider-awscc'

smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformElement"></a>

```typescript
import { smsvoiceConfigurationSet } from '@cdktn/provider-awscc'

smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformResource"></a>

```typescript
import { smsvoiceConfigurationSet } from '@cdktn/provider-awscc'

smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport"></a>

```typescript
import { smsvoiceConfigurationSet } from '@cdktn/provider-awscc'

smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SmsvoiceConfigurationSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SmsvoiceConfigurationSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SmsvoiceConfigurationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceConfigurationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.eventDestinations">eventDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList">SmsvoiceConfigurationSetEventDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList">SmsvoiceConfigurationSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.configurationSetNameInput">configurationSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.defaultSenderIdInput">defaultSenderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.eventDestinationsInput">eventDestinationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.messageFeedbackEnabledInput">messageFeedbackEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.protectConfigurationIdInput">protectConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.defaultSenderId">defaultSenderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.messageFeedbackEnabled">messageFeedbackEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.protectConfigurationId">protectConfigurationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `eventDestinations`<sup>Required</sup> <a name="eventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.eventDestinations"></a>

```typescript
public readonly eventDestinations: SmsvoiceConfigurationSetEventDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList">SmsvoiceConfigurationSetEventDestinationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tags"></a>

```typescript
public readonly tags: SmsvoiceConfigurationSetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList">SmsvoiceConfigurationSetTagsList</a>

---

##### `configurationSetNameInput`<sup>Optional</sup> <a name="configurationSetNameInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.configurationSetNameInput"></a>

```typescript
public readonly configurationSetNameInput: string;
```

- *Type:* string

---

##### `defaultSenderIdInput`<sup>Optional</sup> <a name="defaultSenderIdInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.defaultSenderIdInput"></a>

```typescript
public readonly defaultSenderIdInput: string;
```

- *Type:* string

---

##### `eventDestinationsInput`<sup>Optional</sup> <a name="eventDestinationsInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.eventDestinationsInput"></a>

```typescript
public readonly eventDestinationsInput: IResolvable | SmsvoiceConfigurationSetEventDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>[]

---

##### `messageFeedbackEnabledInput`<sup>Optional</sup> <a name="messageFeedbackEnabledInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.messageFeedbackEnabledInput"></a>

```typescript
public readonly messageFeedbackEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `protectConfigurationIdInput`<sup>Optional</sup> <a name="protectConfigurationIdInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.protectConfigurationIdInput"></a>

```typescript
public readonly protectConfigurationIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SmsvoiceConfigurationSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>[]

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

---

##### `defaultSenderId`<sup>Required</sup> <a name="defaultSenderId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.defaultSenderId"></a>

```typescript
public readonly defaultSenderId: string;
```

- *Type:* string

---

##### `messageFeedbackEnabled`<sup>Required</sup> <a name="messageFeedbackEnabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.messageFeedbackEnabled"></a>

```typescript
public readonly messageFeedbackEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `protectConfigurationId`<sup>Required</sup> <a name="protectConfigurationId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.protectConfigurationId"></a>

```typescript
public readonly protectConfigurationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceConfigurationSetConfig <a name="SmsvoiceConfigurationSetConfig" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.Initializer"></a>

```typescript
import { smsvoiceConfigurationSet } from '@cdktn/provider-awscc'

const smsvoiceConfigurationSetConfig: smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | The name to use for the configuration set. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.defaultSenderId">defaultSenderId</a></code> | <code>string</code> | The default sender ID to set for the ConfigurationSet. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.eventDestinations">eventDestinations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>[]</code> | An event destination is a location where you send message events. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.messageFeedbackEnabled">messageFeedbackEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set to true to enable message feedback. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.protectConfigurationId">protectConfigurationId</a></code> | <code>string</code> | The unique identifier for the protect configuration to be associated to the configuration set. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configurationSetName`<sup>Optional</sup> <a name="configurationSetName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

The name to use for the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#configuration_set_name SmsvoiceConfigurationSet#configuration_set_name}

---

##### `defaultSenderId`<sup>Optional</sup> <a name="defaultSenderId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.defaultSenderId"></a>

```typescript
public readonly defaultSenderId: string;
```

- *Type:* string

The default sender ID to set for the ConfigurationSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#default_sender_id SmsvoiceConfigurationSet#default_sender_id}

---

##### `eventDestinations`<sup>Optional</sup> <a name="eventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.eventDestinations"></a>

```typescript
public readonly eventDestinations: IResolvable | SmsvoiceConfigurationSetEventDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>[]

An event destination is a location where you send message events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#event_destinations SmsvoiceConfigurationSet#event_destinations}

---

##### `messageFeedbackEnabled`<sup>Optional</sup> <a name="messageFeedbackEnabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.messageFeedbackEnabled"></a>

```typescript
public readonly messageFeedbackEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set to true to enable message feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#message_feedback_enabled SmsvoiceConfigurationSet#message_feedback_enabled}

---

##### `protectConfigurationId`<sup>Optional</sup> <a name="protectConfigurationId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.protectConfigurationId"></a>

```typescript
public readonly protectConfigurationId: string;
```

- *Type:* string

The unique identifier for the protect configuration to be associated to the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#protect_configuration_id SmsvoiceConfigurationSet#protect_configuration_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SmsvoiceConfigurationSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#tags SmsvoiceConfigurationSet#tags}

---

### SmsvoiceConfigurationSetEventDestinations <a name="SmsvoiceConfigurationSetEventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.Initializer"></a>

```typescript
import { smsvoiceConfigurationSet } from '@cdktn/provider-awscc'

const smsvoiceConfigurationSetEventDestinations: smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.cloudwatchLogsDestination">cloudwatchLogsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a></code> | An object that contains IamRoleArn and LogGroupArn associated with an Amazon CloudWatch event destination. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true events will be logged. By default this is set to true. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.eventDestinationName">eventDestinationName</a></code> | <code>string</code> | The name that identifies the event destination. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.kinesisFirehoseDestination">kinesisFirehoseDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a></code> | An object that contains IamRoleArn and DeliveryStreamArn associated with an Amazon Kinesis Firehose event destination. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.matchingEventTypes">matchingEventTypes</a></code> | <code>string[]</code> | An array of event types that determine which events to log. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.snsDestination">snsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a></code> | An object that contains SNS TopicArn event destination. |

---

##### `cloudwatchLogsDestination`<sup>Optional</sup> <a name="cloudwatchLogsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.cloudwatchLogsDestination"></a>

```typescript
public readonly cloudwatchLogsDestination: SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a>

An object that contains IamRoleArn and LogGroupArn associated with an Amazon CloudWatch event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#cloudwatch_logs_destination SmsvoiceConfigurationSet#cloudwatch_logs_destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true events will be logged. By default this is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#enabled SmsvoiceConfigurationSet#enabled}

---

##### `eventDestinationName`<sup>Optional</sup> <a name="eventDestinationName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.eventDestinationName"></a>

```typescript
public readonly eventDestinationName: string;
```

- *Type:* string

The name that identifies the event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#event_destination_name SmsvoiceConfigurationSet#event_destination_name}

---

##### `kinesisFirehoseDestination`<sup>Optional</sup> <a name="kinesisFirehoseDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.kinesisFirehoseDestination"></a>

```typescript
public readonly kinesisFirehoseDestination: SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a>

An object that contains IamRoleArn and DeliveryStreamArn associated with an Amazon Kinesis Firehose event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#kinesis_firehose_destination SmsvoiceConfigurationSet#kinesis_firehose_destination}

---

##### `matchingEventTypes`<sup>Optional</sup> <a name="matchingEventTypes" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.matchingEventTypes"></a>

```typescript
public readonly matchingEventTypes: string[];
```

- *Type:* string[]

An array of event types that determine which events to log.

If 'ALL' is used, then AWS End User Messaging SMS and Voice logs every event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#matching_event_types SmsvoiceConfigurationSet#matching_event_types}

---

##### `snsDestination`<sup>Optional</sup> <a name="snsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.snsDestination"></a>

```typescript
public readonly snsDestination: SmsvoiceConfigurationSetEventDestinationsSnsDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a>

An object that contains SNS TopicArn event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#sns_destination SmsvoiceConfigurationSet#sns_destination}

---

### SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination <a name="SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.Initializer"></a>

```typescript
import { smsvoiceConfigurationSet } from '@cdktn/provider-awscc'

const smsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination: smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | The name of the Amazon CloudWatch log group that you want to record events in. |

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#iam_role_arn SmsvoiceConfigurationSet#iam_role_arn}

---

##### `logGroupArn`<sup>Optional</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

The name of the Amazon CloudWatch log group that you want to record events in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#log_group_arn SmsvoiceConfigurationSet#log_group_arn}

---

### SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination <a name="SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.Initializer"></a>

```typescript
import { smsvoiceConfigurationSet } from '@cdktn/provider-awscc'

const smsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination: smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.property.deliveryStreamArn">deliveryStreamArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the delivery stream. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination. |

---

##### `deliveryStreamArn`<sup>Optional</sup> <a name="deliveryStreamArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.property.deliveryStreamArn"></a>

```typescript
public readonly deliveryStreamArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#delivery_stream_arn SmsvoiceConfigurationSet#delivery_stream_arn}

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#iam_role_arn SmsvoiceConfigurationSet#iam_role_arn}

---

### SmsvoiceConfigurationSetEventDestinationsSnsDestination <a name="SmsvoiceConfigurationSetEventDestinationsSnsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination.Initializer"></a>

```typescript
import { smsvoiceConfigurationSet } from '@cdktn/provider-awscc'

const smsvoiceConfigurationSetEventDestinationsSnsDestination: smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination.property.topicArn">topicArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to. |

---

##### `topicArn`<sup>Optional</sup> <a name="topicArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#topic_arn SmsvoiceConfigurationSet#topic_arn}

---

### SmsvoiceConfigurationSetTags <a name="SmsvoiceConfigurationSetTags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.Initializer"></a>

```typescript
import { smsvoiceConfigurationSet } from '@cdktn/provider-awscc'

const smsvoiceConfigurationSetTags: smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#key SmsvoiceConfigurationSet#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#value SmsvoiceConfigurationSet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference <a name="SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer"></a>

```typescript
import { smsvoiceConfigurationSet } from '@cdktn/provider-awscc'

new smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resetIamRoleArn">resetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resetLogGroupArn">resetLogGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIamRoleArn` <a name="resetIamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resetIamRoleArn"></a>

```typescript
public resetIamRoleArn(): void
```

##### `resetLogGroupArn` <a name="resetLogGroupArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resetLogGroupArn"></a>

```typescript
public resetLogGroupArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArnInput"></a>

```typescript
public readonly logGroupArnInput: string;
```

- *Type:* string

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a>

---


### SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference <a name="SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer"></a>

```typescript
import { smsvoiceConfigurationSet } from '@cdktn/provider-awscc'

new smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resetDeliveryStreamArn">resetDeliveryStreamArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resetIamRoleArn">resetIamRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryStreamArn` <a name="resetDeliveryStreamArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resetDeliveryStreamArn"></a>

```typescript
public resetDeliveryStreamArn(): void
```

##### `resetIamRoleArn` <a name="resetIamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resetIamRoleArn"></a>

```typescript
public resetIamRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput">deliveryStreamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn">deliveryStreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryStreamArnInput`<sup>Optional</sup> <a name="deliveryStreamArnInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput"></a>

```typescript
public readonly deliveryStreamArnInput: string;
```

- *Type:* string

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `deliveryStreamArn`<sup>Required</sup> <a name="deliveryStreamArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn"></a>

```typescript
public readonly deliveryStreamArn: string;
```

- *Type:* string

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a>

---


### SmsvoiceConfigurationSetEventDestinationsList <a name="SmsvoiceConfigurationSetEventDestinationsList" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer"></a>

```typescript
import { smsvoiceConfigurationSet } from '@cdktn/provider-awscc'

new smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.get"></a>

```typescript
public get(index: number): SmsvoiceConfigurationSetEventDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceConfigurationSetEventDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>[]

---


### SmsvoiceConfigurationSetEventDestinationsOutputReference <a name="SmsvoiceConfigurationSetEventDestinationsOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer"></a>

```typescript
import { smsvoiceConfigurationSet } from '@cdktn/provider-awscc'

new smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putCloudwatchLogsDestination">putCloudwatchLogsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putKinesisFirehoseDestination">putKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putSnsDestination">putSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetCloudwatchLogsDestination">resetCloudwatchLogsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetEventDestinationName">resetEventDestinationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetKinesisFirehoseDestination">resetKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetMatchingEventTypes">resetMatchingEventTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetSnsDestination">resetSnsDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogsDestination` <a name="putCloudwatchLogsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putCloudwatchLogsDestination"></a>

```typescript
public putCloudwatchLogsDestination(value: SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putCloudwatchLogsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a>

---

##### `putKinesisFirehoseDestination` <a name="putKinesisFirehoseDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putKinesisFirehoseDestination"></a>

```typescript
public putKinesisFirehoseDestination(value: SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putKinesisFirehoseDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a>

---

##### `putSnsDestination` <a name="putSnsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putSnsDestination"></a>

```typescript
public putSnsDestination(value: SmsvoiceConfigurationSetEventDestinationsSnsDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putSnsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a>

---

##### `resetCloudwatchLogsDestination` <a name="resetCloudwatchLogsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetCloudwatchLogsDestination"></a>

```typescript
public resetCloudwatchLogsDestination(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEventDestinationName` <a name="resetEventDestinationName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetEventDestinationName"></a>

```typescript
public resetEventDestinationName(): void
```

##### `resetKinesisFirehoseDestination` <a name="resetKinesisFirehoseDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetKinesisFirehoseDestination"></a>

```typescript
public resetKinesisFirehoseDestination(): void
```

##### `resetMatchingEventTypes` <a name="resetMatchingEventTypes" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetMatchingEventTypes"></a>

```typescript
public resetMatchingEventTypes(): void
```

##### `resetSnsDestination` <a name="resetSnsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetSnsDestination"></a>

```typescript
public resetSnsDestination(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestination">cloudwatchLogsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestination">kinesisFirehoseDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestination">snsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestinationInput">cloudwatchLogsDestinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationNameInput">eventDestinationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestinationInput">kinesisFirehoseDestinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypesInput">matchingEventTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestinationInput">snsDestinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationName">eventDestinationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypes">matchingEventTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogsDestination`<sup>Required</sup> <a name="cloudwatchLogsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestination"></a>

```typescript
public readonly cloudwatchLogsDestination: SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference</a>

---

##### `kinesisFirehoseDestination`<sup>Required</sup> <a name="kinesisFirehoseDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestination"></a>

```typescript
public readonly kinesisFirehoseDestination: SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference</a>

---

##### `snsDestination`<sup>Required</sup> <a name="snsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestination"></a>

```typescript
public readonly snsDestination: SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference</a>

---

##### `cloudwatchLogsDestinationInput`<sup>Optional</sup> <a name="cloudwatchLogsDestinationInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestinationInput"></a>

```typescript
public readonly cloudwatchLogsDestinationInput: IResolvable | SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventDestinationNameInput`<sup>Optional</sup> <a name="eventDestinationNameInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationNameInput"></a>

```typescript
public readonly eventDestinationNameInput: string;
```

- *Type:* string

---

##### `kinesisFirehoseDestinationInput`<sup>Optional</sup> <a name="kinesisFirehoseDestinationInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestinationInput"></a>

```typescript
public readonly kinesisFirehoseDestinationInput: IResolvable | SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a>

---

##### `matchingEventTypesInput`<sup>Optional</sup> <a name="matchingEventTypesInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypesInput"></a>

```typescript
public readonly matchingEventTypesInput: string[];
```

- *Type:* string[]

---

##### `snsDestinationInput`<sup>Optional</sup> <a name="snsDestinationInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestinationInput"></a>

```typescript
public readonly snsDestinationInput: IResolvable | SmsvoiceConfigurationSetEventDestinationsSnsDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventDestinationName`<sup>Required</sup> <a name="eventDestinationName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationName"></a>

```typescript
public readonly eventDestinationName: string;
```

- *Type:* string

---

##### `matchingEventTypes`<sup>Required</sup> <a name="matchingEventTypes" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypes"></a>

```typescript
public readonly matchingEventTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceConfigurationSetEventDestinations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>

---


### SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference <a name="SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer"></a>

```typescript
import { smsvoiceConfigurationSet } from '@cdktn/provider-awscc'

new smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resetTopicArn">resetTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTopicArn` <a name="resetTopicArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resetTopicArn"></a>

```typescript
public resetTopicArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArnInput"></a>

```typescript
public readonly topicArnInput: string;
```

- *Type:* string

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceConfigurationSetEventDestinationsSnsDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a>

---


### SmsvoiceConfigurationSetTagsList <a name="SmsvoiceConfigurationSetTagsList" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer"></a>

```typescript
import { smsvoiceConfigurationSet } from '@cdktn/provider-awscc'

new smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.get"></a>

```typescript
public get(index: number): SmsvoiceConfigurationSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceConfigurationSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>[]

---


### SmsvoiceConfigurationSetTagsOutputReference <a name="SmsvoiceConfigurationSetTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer"></a>

```typescript
import { smsvoiceConfigurationSet } from '@cdktn/provider-awscc'

new smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceConfigurationSetTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>

---



