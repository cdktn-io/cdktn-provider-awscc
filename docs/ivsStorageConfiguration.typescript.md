# `ivsStorageConfiguration` Submodule <a name="`ivsStorageConfiguration` Submodule" id="@cdktn/provider-awscc.ivsStorageConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvsStorageConfiguration <a name="IvsStorageConfiguration" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_storage_configuration awscc_ivs_storage_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.Initializer"></a>

```typescript
import { ivsStorageConfiguration } from '@cdktn/provider-awscc'

new ivsStorageConfiguration.IvsStorageConfiguration(scope: Construct, id: string, config: IvsStorageConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig">IvsStorageConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig">IvsStorageConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.putS3"></a>

```typescript
public putS3(value: IvsStorageConfigurationS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3">IvsStorageConfigurationS3</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.putTags"></a>

```typescript
public putTags(value: IResolvable | IvsStorageConfigurationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTags">IvsStorageConfigurationTags</a>[]

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IvsStorageConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.isConstruct"></a>

```typescript
import { ivsStorageConfiguration } from '@cdktn/provider-awscc'

ivsStorageConfiguration.IvsStorageConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.isTerraformElement"></a>

```typescript
import { ivsStorageConfiguration } from '@cdktn/provider-awscc'

ivsStorageConfiguration.IvsStorageConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.isTerraformResource"></a>

```typescript
import { ivsStorageConfiguration } from '@cdktn/provider-awscc'

ivsStorageConfiguration.IvsStorageConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.generateConfigForImport"></a>

```typescript
import { ivsStorageConfiguration } from '@cdktn/provider-awscc'

ivsStorageConfiguration.IvsStorageConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IvsStorageConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IvsStorageConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IvsStorageConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_storage_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IvsStorageConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference">IvsStorageConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList">IvsStorageConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.s3Input">s3Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3">IvsStorageConfigurationS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTags">IvsStorageConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.s3"></a>

```typescript
public readonly s3: IvsStorageConfigurationS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference">IvsStorageConfigurationS3OutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.tags"></a>

```typescript
public readonly tags: IvsStorageConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList">IvsStorageConfigurationTagsList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.s3Input"></a>

```typescript
public readonly s3Input: IResolvable | IvsStorageConfigurationS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3">IvsStorageConfigurationS3</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IvsStorageConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTags">IvsStorageConfigurationTags</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IvsStorageConfigurationConfig <a name="IvsStorageConfigurationConfig" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig.Initializer"></a>

```typescript
import { ivsStorageConfiguration } from '@cdktn/provider-awscc'

const ivsStorageConfigurationConfig: ivsStorageConfiguration.IvsStorageConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3">IvsStorageConfigurationS3</a></code> | A complex type that describes an S3 location where recorded videos will be stored. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig.property.name">name</a></code> | <code>string</code> | Storage Configuration Name. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTags">IvsStorageConfigurationTags</a>[]</code> | A list of key-value pairs that contain metadata for the asset model. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig.property.s3"></a>

```typescript
public readonly s3: IvsStorageConfigurationS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3">IvsStorageConfigurationS3</a>

A complex type that describes an S3 location where recorded videos will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_storage_configuration#s3 IvsStorageConfiguration#s3}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Storage Configuration Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_storage_configuration#name IvsStorageConfiguration#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IvsStorageConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTags">IvsStorageConfigurationTags</a>[]

A list of key-value pairs that contain metadata for the asset model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_storage_configuration#tags IvsStorageConfiguration#tags}

---

### IvsStorageConfigurationS3 <a name="IvsStorageConfigurationS3" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3.Initializer"></a>

```typescript
import { ivsStorageConfiguration } from '@cdktn/provider-awscc'

const ivsStorageConfigurationS3: ivsStorageConfiguration.IvsStorageConfigurationS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3.property.bucketName">bucketName</a></code> | <code>string</code> | Location (S3 bucket name) where recorded videos will be stored. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Location (S3 bucket name) where recorded videos will be stored.

Note that the StorageConfiguration and S3 bucket must be in the same region as the Composition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_storage_configuration#bucket_name IvsStorageConfiguration#bucket_name}

---

### IvsStorageConfigurationTags <a name="IvsStorageConfigurationTags" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTags.Initializer"></a>

```typescript
import { ivsStorageConfiguration } from '@cdktn/provider-awscc'

const ivsStorageConfigurationTags: ivsStorageConfiguration.IvsStorageConfigurationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_storage_configuration#key IvsStorageConfiguration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_storage_configuration#value IvsStorageConfiguration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IvsStorageConfigurationS3OutputReference <a name="IvsStorageConfigurationS3OutputReference" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.Initializer"></a>

```typescript
import { ivsStorageConfiguration } from '@cdktn/provider-awscc'

new ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3">IvsStorageConfigurationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IvsStorageConfigurationS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationS3">IvsStorageConfigurationS3</a>

---


### IvsStorageConfigurationTagsList <a name="IvsStorageConfigurationTagsList" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.Initializer"></a>

```typescript
import { ivsStorageConfiguration } from '@cdktn/provider-awscc'

new ivsStorageConfiguration.IvsStorageConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.get"></a>

```typescript
public get(index: number): IvsStorageConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTags">IvsStorageConfigurationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IvsStorageConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTags">IvsStorageConfigurationTags</a>[]

---


### IvsStorageConfigurationTagsOutputReference <a name="IvsStorageConfigurationTagsOutputReference" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { ivsStorageConfiguration } from '@cdktn/provider-awscc'

new ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTags">IvsStorageConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IvsStorageConfigurationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStorageConfiguration.IvsStorageConfigurationTags">IvsStorageConfigurationTags</a>

---



