# `datazoneGroupProfile` Submodule <a name="`datazoneGroupProfile` Submodule" id="@cdktn/provider-awscc.datazoneGroupProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneGroupProfile <a name="DatazoneGroupProfile" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_group_profile awscc_datazone_group_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer"></a>

```typescript
import { datazoneGroupProfile } from '@cdktn/provider-awscc'

new datazoneGroupProfile.DatazoneGroupProfile(scope: Construct, id: string, config: DatazoneGroupProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig">DatazoneGroupProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig">DatazoneGroupProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.resetGroupIdentifier">resetGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.resetGroupType">resetGroupType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.resetRolePrincipalArn">resetRolePrincipalArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetGroupIdentifier` <a name="resetGroupIdentifier" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.resetGroupIdentifier"></a>

```typescript
public resetGroupIdentifier(): void
```

##### `resetGroupType` <a name="resetGroupType" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.resetGroupType"></a>

```typescript
public resetGroupType(): void
```

##### `resetRolePrincipalArn` <a name="resetRolePrincipalArn" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.resetRolePrincipalArn"></a>

```typescript
public resetRolePrincipalArn(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneGroupProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.isConstruct"></a>

```typescript
import { datazoneGroupProfile } from '@cdktn/provider-awscc'

datazoneGroupProfile.DatazoneGroupProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.isTerraformElement"></a>

```typescript
import { datazoneGroupProfile } from '@cdktn/provider-awscc'

datazoneGroupProfile.DatazoneGroupProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.isTerraformResource"></a>

```typescript
import { datazoneGroupProfile } from '@cdktn/provider-awscc'

datazoneGroupProfile.DatazoneGroupProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.generateConfigForImport"></a>

```typescript
import { datazoneGroupProfile } from '@cdktn/provider-awscc'

datazoneGroupProfile.DatazoneGroupProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatazoneGroupProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazoneGroupProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazoneGroupProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_group_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneGroupProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupProfileId">groupProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.rolePrincipalId">rolePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.domainIdentifierInput">domainIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupIdentifierInput">groupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupTypeInput">groupTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.rolePrincipalArnInput">rolePrincipalArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupIdentifier">groupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupType">groupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.rolePrincipalArn">rolePrincipalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `groupProfileId`<sup>Required</sup> <a name="groupProfileId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupProfileId"></a>

```typescript
public readonly groupProfileId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rolePrincipalId`<sup>Required</sup> <a name="rolePrincipalId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.rolePrincipalId"></a>

```typescript
public readonly rolePrincipalId: string;
```

- *Type:* string

---

##### `domainIdentifierInput`<sup>Optional</sup> <a name="domainIdentifierInput" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.domainIdentifierInput"></a>

```typescript
public readonly domainIdentifierInput: string;
```

- *Type:* string

---

##### `groupIdentifierInput`<sup>Optional</sup> <a name="groupIdentifierInput" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupIdentifierInput"></a>

```typescript
public readonly groupIdentifierInput: string;
```

- *Type:* string

---

##### `groupTypeInput`<sup>Optional</sup> <a name="groupTypeInput" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupTypeInput"></a>

```typescript
public readonly groupTypeInput: string;
```

- *Type:* string

---

##### `rolePrincipalArnInput`<sup>Optional</sup> <a name="rolePrincipalArnInput" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.rolePrincipalArnInput"></a>

```typescript
public readonly rolePrincipalArnInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

---

##### `groupIdentifier`<sup>Required</sup> <a name="groupIdentifier" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupIdentifier"></a>

```typescript
public readonly groupIdentifier: string;
```

- *Type:* string

---

##### `groupType`<sup>Required</sup> <a name="groupType" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupType"></a>

```typescript
public readonly groupType: string;
```

- *Type:* string

---

##### `rolePrincipalArn`<sup>Required</sup> <a name="rolePrincipalArn" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.rolePrincipalArn"></a>

```typescript
public readonly rolePrincipalArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneGroupProfileConfig <a name="DatazoneGroupProfileConfig" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.Initializer"></a>

```typescript
import { datazoneGroupProfile } from '@cdktn/provider-awscc'

const datazoneGroupProfileConfig: datazoneGroupProfile.DatazoneGroupProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | The identifier of the Amazon DataZone domain in which the group profile would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.groupIdentifier">groupIdentifier</a></code> | <code>string</code> | The ID of the group. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.groupType">groupType</a></code> | <code>string</code> | The type of the group. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.rolePrincipalArn">rolePrincipalArn</a></code> | <code>string</code> | The ARN of the role principal for the group profile. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.status">status</a></code> | <code>string</code> | The status of the group profile. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

The identifier of the Amazon DataZone domain in which the group profile would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_group_profile#domain_identifier DatazoneGroupProfile#domain_identifier}

---

##### `groupIdentifier`<sup>Optional</sup> <a name="groupIdentifier" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.groupIdentifier"></a>

```typescript
public readonly groupIdentifier: string;
```

- *Type:* string

The ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_group_profile#group_identifier DatazoneGroupProfile#group_identifier}

---

##### `groupType`<sup>Optional</sup> <a name="groupType" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.groupType"></a>

```typescript
public readonly groupType: string;
```

- *Type:* string

The type of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_group_profile#group_type DatazoneGroupProfile#group_type}

---

##### `rolePrincipalArn`<sup>Optional</sup> <a name="rolePrincipalArn" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.rolePrincipalArn"></a>

```typescript
public readonly rolePrincipalArn: string;
```

- *Type:* string

The ARN of the role principal for the group profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_group_profile#role_principal_arn DatazoneGroupProfile#role_principal_arn}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the group profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_group_profile#status DatazoneGroupProfile#status}

---



