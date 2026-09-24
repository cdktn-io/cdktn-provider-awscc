# `smsvoiceVerifiedDestinationNumber` Submodule <a name="`smsvoiceVerifiedDestinationNumber` Submodule" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceVerifiedDestinationNumber <a name="SmsvoiceVerifiedDestinationNumber" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/smsvoice_verified_destination_number awscc_smsvoice_verified_destination_number}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.Initializer"></a>

```typescript
import { smsvoiceVerifiedDestinationNumber } from '@cdktn/provider-awscc'

new smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber(scope: Construct, id: string, config: SmsvoiceVerifiedDestinationNumberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig">SmsvoiceVerifiedDestinationNumberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig">SmsvoiceVerifiedDestinationNumberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.putTags"></a>

```typescript
public putTags(value: IResolvable | SmsvoiceVerifiedDestinationNumberTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags">SmsvoiceVerifiedDestinationNumberTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoiceVerifiedDestinationNumber resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.isConstruct"></a>

```typescript
import { smsvoiceVerifiedDestinationNumber } from '@cdktn/provider-awscc'

smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.isTerraformElement"></a>

```typescript
import { smsvoiceVerifiedDestinationNumber } from '@cdktn/provider-awscc'

smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.isTerraformResource"></a>

```typescript
import { smsvoiceVerifiedDestinationNumber } from '@cdktn/provider-awscc'

smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.generateConfigForImport"></a>

```typescript
import { smsvoiceVerifiedDestinationNumber } from '@cdktn/provider-awscc'

smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SmsvoiceVerifiedDestinationNumber resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SmsvoiceVerifiedDestinationNumber to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SmsvoiceVerifiedDestinationNumber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/smsvoice_verified_destination_number#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceVerifiedDestinationNumber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList">SmsvoiceVerifiedDestinationNumberTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.verifiedDestinationNumberArn">verifiedDestinationNumberArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.verifiedDestinationNumberId">verifiedDestinationNumberId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.destinationPhoneNumberInput">destinationPhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags">SmsvoiceVerifiedDestinationNumberTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.destinationPhoneNumber">destinationPhoneNumber</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.tags"></a>

```typescript
public readonly tags: SmsvoiceVerifiedDestinationNumberTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList">SmsvoiceVerifiedDestinationNumberTagsList</a>

---

##### `verifiedDestinationNumberArn`<sup>Required</sup> <a name="verifiedDestinationNumberArn" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.verifiedDestinationNumberArn"></a>

```typescript
public readonly verifiedDestinationNumberArn: string;
```

- *Type:* string

---

##### `verifiedDestinationNumberId`<sup>Required</sup> <a name="verifiedDestinationNumberId" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.verifiedDestinationNumberId"></a>

```typescript
public readonly verifiedDestinationNumberId: string;
```

- *Type:* string

---

##### `destinationPhoneNumberInput`<sup>Optional</sup> <a name="destinationPhoneNumberInput" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.destinationPhoneNumberInput"></a>

```typescript
public readonly destinationPhoneNumberInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SmsvoiceVerifiedDestinationNumberTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags">SmsvoiceVerifiedDestinationNumberTags</a>[]

---

##### `destinationPhoneNumber`<sup>Required</sup> <a name="destinationPhoneNumber" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.destinationPhoneNumber"></a>

```typescript
public readonly destinationPhoneNumber: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceVerifiedDestinationNumberConfig <a name="SmsvoiceVerifiedDestinationNumberConfig" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.Initializer"></a>

```typescript
import { smsvoiceVerifiedDestinationNumber } from '@cdktn/provider-awscc'

const smsvoiceVerifiedDestinationNumberConfig: smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.destinationPhoneNumber">destinationPhoneNumber</a></code> | <code>string</code> | The verified destination phone number, in E.164 format. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags">SmsvoiceVerifiedDestinationNumberTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `destinationPhoneNumber`<sup>Required</sup> <a name="destinationPhoneNumber" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.destinationPhoneNumber"></a>

```typescript
public readonly destinationPhoneNumber: string;
```

- *Type:* string

The verified destination phone number, in E.164 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/smsvoice_verified_destination_number#destination_phone_number SmsvoiceVerifiedDestinationNumber#destination_phone_number}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SmsvoiceVerifiedDestinationNumberTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags">SmsvoiceVerifiedDestinationNumberTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/smsvoice_verified_destination_number#tags SmsvoiceVerifiedDestinationNumber#tags}

---

### SmsvoiceVerifiedDestinationNumberTags <a name="SmsvoiceVerifiedDestinationNumberTags" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags.Initializer"></a>

```typescript
import { smsvoiceVerifiedDestinationNumber } from '@cdktn/provider-awscc'

const smsvoiceVerifiedDestinationNumberTags: smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/smsvoice_verified_destination_number#key SmsvoiceVerifiedDestinationNumber#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/smsvoice_verified_destination_number#value SmsvoiceVerifiedDestinationNumber#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceVerifiedDestinationNumberTagsList <a name="SmsvoiceVerifiedDestinationNumberTagsList" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.Initializer"></a>

```typescript
import { smsvoiceVerifiedDestinationNumber } from '@cdktn/provider-awscc'

new smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.get"></a>

```typescript
public get(index: number): SmsvoiceVerifiedDestinationNumberTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags">SmsvoiceVerifiedDestinationNumberTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceVerifiedDestinationNumberTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags">SmsvoiceVerifiedDestinationNumberTags</a>[]

---


### SmsvoiceVerifiedDestinationNumberTagsOutputReference <a name="SmsvoiceVerifiedDestinationNumberTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer"></a>

```typescript
import { smsvoiceVerifiedDestinationNumber } from '@cdktn/provider-awscc'

new smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags">SmsvoiceVerifiedDestinationNumberTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceVerifiedDestinationNumberTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags">SmsvoiceVerifiedDestinationNumberTags</a>

---



