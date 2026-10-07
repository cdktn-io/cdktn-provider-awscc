# `smsvoiceNotifyConfiguration` Submodule <a name="`smsvoiceNotifyConfiguration` Submodule" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceNotifyConfiguration <a name="SmsvoiceNotifyConfiguration" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration awscc_smsvoice_notify_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer"></a>

```typescript
import { smsvoiceNotifyConfiguration } from '@cdktn/provider-awscc'

new smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration(scope: Construct, id: string, config: SmsvoiceNotifyConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig">SmsvoiceNotifyConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig">SmsvoiceNotifyConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetDefaultTemplateId">resetDefaultTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetEnabledCountries">resetEnabledCountries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetPoolId">resetPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.putTags"></a>

```typescript
public putTags(value: IResolvable | SmsvoiceNotifyConfigurationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>[]

---

##### `resetDefaultTemplateId` <a name="resetDefaultTemplateId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetDefaultTemplateId"></a>

```typescript
public resetDefaultTemplateId(): void
```

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetDeletionProtectionEnabled"></a>

```typescript
public resetDeletionProtectionEnabled(): void
```

##### `resetEnabledCountries` <a name="resetEnabledCountries" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetEnabledCountries"></a>

```typescript
public resetEnabledCountries(): void
```

##### `resetPoolId` <a name="resetPoolId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetPoolId"></a>

```typescript
public resetPoolId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoiceNotifyConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isConstruct"></a>

```typescript
import { smsvoiceNotifyConfiguration } from '@cdktn/provider-awscc'

smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformElement"></a>

```typescript
import { smsvoiceNotifyConfiguration } from '@cdktn/provider-awscc'

smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformResource"></a>

```typescript
import { smsvoiceNotifyConfiguration } from '@cdktn/provider-awscc'

smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport"></a>

```typescript
import { smsvoiceNotifyConfiguration } from '@cdktn/provider-awscc'

smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SmsvoiceNotifyConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SmsvoiceNotifyConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SmsvoiceNotifyConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceNotifyConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.notifyConfigurationArn">notifyConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.notifyConfigurationId">notifyConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList">SmsvoiceNotifyConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tierUpgradeStatus">tierUpgradeStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.defaultTemplateIdInput">defaultTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledChannelsInput">enabledChannelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledCountriesInput">enabledCountriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.poolIdInput">poolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.useCaseInput">useCaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.defaultTemplateId">defaultTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledChannels">enabledChannels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledCountries">enabledCountries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.poolId">poolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.useCase">useCase</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `notifyConfigurationArn`<sup>Required</sup> <a name="notifyConfigurationArn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.notifyConfigurationArn"></a>

```typescript
public readonly notifyConfigurationArn: string;
```

- *Type:* string

---

##### `notifyConfigurationId`<sup>Required</sup> <a name="notifyConfigurationId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.notifyConfigurationId"></a>

```typescript
public readonly notifyConfigurationId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tags"></a>

```typescript
public readonly tags: SmsvoiceNotifyConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList">SmsvoiceNotifyConfigurationTagsList</a>

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `tierUpgradeStatus`<sup>Required</sup> <a name="tierUpgradeStatus" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tierUpgradeStatus"></a>

```typescript
public readonly tierUpgradeStatus: string;
```

- *Type:* string

---

##### `defaultTemplateIdInput`<sup>Optional</sup> <a name="defaultTemplateIdInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.defaultTemplateIdInput"></a>

```typescript
public readonly defaultTemplateIdInput: string;
```

- *Type:* string

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.deletionProtectionEnabledInput"></a>

```typescript
public readonly deletionProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enabledChannelsInput`<sup>Optional</sup> <a name="enabledChannelsInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledChannelsInput"></a>

```typescript
public readonly enabledChannelsInput: string[];
```

- *Type:* string[]

---

##### `enabledCountriesInput`<sup>Optional</sup> <a name="enabledCountriesInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledCountriesInput"></a>

```typescript
public readonly enabledCountriesInput: string[];
```

- *Type:* string[]

---

##### `poolIdInput`<sup>Optional</sup> <a name="poolIdInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.poolIdInput"></a>

```typescript
public readonly poolIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SmsvoiceNotifyConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>[]

---

##### `useCaseInput`<sup>Optional</sup> <a name="useCaseInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.useCaseInput"></a>

```typescript
public readonly useCaseInput: string;
```

- *Type:* string

---

##### `defaultTemplateId`<sup>Required</sup> <a name="defaultTemplateId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.defaultTemplateId"></a>

```typescript
public readonly defaultTemplateId: string;
```

- *Type:* string

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enabledChannels`<sup>Required</sup> <a name="enabledChannels" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledChannels"></a>

```typescript
public readonly enabledChannels: string[];
```

- *Type:* string[]

---

##### `enabledCountries`<sup>Required</sup> <a name="enabledCountries" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledCountries"></a>

```typescript
public readonly enabledCountries: string[];
```

- *Type:* string[]

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

---

##### `useCase`<sup>Required</sup> <a name="useCase" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.useCase"></a>

```typescript
public readonly useCase: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceNotifyConfigurationConfig <a name="SmsvoiceNotifyConfigurationConfig" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.Initializer"></a>

```typescript
import { smsvoiceNotifyConfiguration } from '@cdktn/provider-awscc'

const smsvoiceNotifyConfigurationConfig: smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name to associate with the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.enabledChannels">enabledChannels</a></code> | <code>string[]</code> | An array of channels to enable for the notify configuration. Supported values include SMS and VOICE. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.useCase">useCase</a></code> | <code>string</code> | The use case for the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.defaultTemplateId">defaultTemplateId</a></code> | <code>string</code> | The default template identifier to associate with the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | By default this is set to false. When set to true the notify configuration can't be deleted. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.enabledCountries">enabledCountries</a></code> | <code>string[]</code> | An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.poolId">poolId</a></code> | <code>string</code> | The identifier of the pool to associate with the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>[]</code> | An array of tags (key and value pairs) associated with the notify configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name to associate with the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#display_name SmsvoiceNotifyConfiguration#display_name}

---

##### `enabledChannels`<sup>Required</sup> <a name="enabledChannels" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.enabledChannels"></a>

```typescript
public readonly enabledChannels: string[];
```

- *Type:* string[]

An array of channels to enable for the notify configuration. Supported values include SMS and VOICE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#enabled_channels SmsvoiceNotifyConfiguration#enabled_channels}

---

##### `useCase`<sup>Required</sup> <a name="useCase" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.useCase"></a>

```typescript
public readonly useCase: string;
```

- *Type:* string

The use case for the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#use_case SmsvoiceNotifyConfiguration#use_case}

---

##### `defaultTemplateId`<sup>Optional</sup> <a name="defaultTemplateId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.defaultTemplateId"></a>

```typescript
public readonly defaultTemplateId: string;
```

- *Type:* string

The default template identifier to associate with the notify configuration.

If specified, this template is used when sending messages without an explicit template identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#default_template_id SmsvoiceNotifyConfiguration#default_template_id}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

By default this is set to false. When set to true the notify configuration can't be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#deletion_protection_enabled SmsvoiceNotifyConfiguration#deletion_protection_enabled}

---

##### `enabledCountries`<sup>Optional</sup> <a name="enabledCountries" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.enabledCountries"></a>

```typescript
public readonly enabledCountries: string[];
```

- *Type:* string[]

An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#enabled_countries SmsvoiceNotifyConfiguration#enabled_countries}

---

##### `poolId`<sup>Optional</sup> <a name="poolId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

The identifier of the pool to associate with the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#pool_id SmsvoiceNotifyConfiguration#pool_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SmsvoiceNotifyConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>[]

An array of tags (key and value pairs) associated with the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#tags SmsvoiceNotifyConfiguration#tags}

---

### SmsvoiceNotifyConfigurationTags <a name="SmsvoiceNotifyConfigurationTags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.Initializer"></a>

```typescript
import { smsvoiceNotifyConfiguration } from '@cdktn/provider-awscc'

const smsvoiceNotifyConfigurationTags: smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.property.key">key</a></code> | <code>string</code> | The key identifier, or name, of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.property.value">value</a></code> | <code>string</code> | The string value associated with the key of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key identifier, or name, of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#key SmsvoiceNotifyConfiguration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The string value associated with the key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#value SmsvoiceNotifyConfiguration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceNotifyConfigurationTagsList <a name="SmsvoiceNotifyConfigurationTagsList" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer"></a>

```typescript
import { smsvoiceNotifyConfiguration } from '@cdktn/provider-awscc'

new smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.get"></a>

```typescript
public get(index: number): SmsvoiceNotifyConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceNotifyConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>[]

---


### SmsvoiceNotifyConfigurationTagsOutputReference <a name="SmsvoiceNotifyConfigurationTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { smsvoiceNotifyConfiguration } from '@cdktn/provider-awscc'

new smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceNotifyConfigurationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>

---



