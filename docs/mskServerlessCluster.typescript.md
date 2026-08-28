# `mskServerlessCluster` Submodule <a name="`mskServerlessCluster` Submodule" id="@cdktn/provider-awscc.mskServerlessCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskServerlessCluster <a name="MskServerlessCluster" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_serverless_cluster awscc_msk_serverless_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.Initializer"></a>

```typescript
import { mskServerlessCluster } from '@cdktn/provider-awscc'

new mskServerlessCluster.MskServerlessCluster(scope: Construct, id: string, config: MskServerlessClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig">MskServerlessClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig">MskServerlessClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.putClientAuthentication">putClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.putVpcConfigs">putVpcConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClientAuthentication` <a name="putClientAuthentication" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.putClientAuthentication"></a>

```typescript
public putClientAuthentication(value: MskServerlessClusterClientAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.putClientAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthentication">MskServerlessClusterClientAuthentication</a>

---

##### `putVpcConfigs` <a name="putVpcConfigs" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.putVpcConfigs"></a>

```typescript
public putVpcConfigs(value: IResolvable | MskServerlessClusterVpcConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.putVpcConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigs">MskServerlessClusterVpcConfigs</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MskServerlessCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.isConstruct"></a>

```typescript
import { mskServerlessCluster } from '@cdktn/provider-awscc'

mskServerlessCluster.MskServerlessCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.isTerraformElement"></a>

```typescript
import { mskServerlessCluster } from '@cdktn/provider-awscc'

mskServerlessCluster.MskServerlessCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.isTerraformResource"></a>

```typescript
import { mskServerlessCluster } from '@cdktn/provider-awscc'

mskServerlessCluster.MskServerlessCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.generateConfigForImport"></a>

```typescript
import { mskServerlessCluster } from '@cdktn/provider-awscc'

mskServerlessCluster.MskServerlessCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MskServerlessCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MskServerlessCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MskServerlessCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_serverless_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MskServerlessCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.clientAuthentication">clientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference">MskServerlessClusterClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.vpcConfigs">vpcConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList">MskServerlessClusterVpcConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.clientAuthenticationInput">clientAuthenticationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthentication">MskServerlessClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.vpcConfigsInput">vpcConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigs">MskServerlessClusterVpcConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `clientAuthentication`<sup>Required</sup> <a name="clientAuthentication" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.clientAuthentication"></a>

```typescript
public readonly clientAuthentication: MskServerlessClusterClientAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference">MskServerlessClusterClientAuthenticationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `vpcConfigs`<sup>Required</sup> <a name="vpcConfigs" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.vpcConfigs"></a>

```typescript
public readonly vpcConfigs: MskServerlessClusterVpcConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList">MskServerlessClusterVpcConfigsList</a>

---

##### `clientAuthenticationInput`<sup>Optional</sup> <a name="clientAuthenticationInput" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.clientAuthenticationInput"></a>

```typescript
public readonly clientAuthenticationInput: IResolvable | MskServerlessClusterClientAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthentication">MskServerlessClusterClientAuthentication</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcConfigsInput`<sup>Optional</sup> <a name="vpcConfigsInput" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.vpcConfigsInput"></a>

```typescript
public readonly vpcConfigsInput: IResolvable | MskServerlessClusterVpcConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigs">MskServerlessClusterVpcConfigs</a>[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MskServerlessClusterClientAuthentication <a name="MskServerlessClusterClientAuthentication" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthentication.Initializer"></a>

```typescript
import { mskServerlessCluster } from '@cdktn/provider-awscc'

const mskServerlessClusterClientAuthentication: mskServerlessCluster.MskServerlessClusterClientAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthentication.property.sasl">sasl</a></code> | <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl">MskServerlessClusterClientAuthenticationSasl</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_serverless_cluster#sasl MskServerlessCluster#sasl}. |

---

##### `sasl`<sup>Required</sup> <a name="sasl" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthentication.property.sasl"></a>

```typescript
public readonly sasl: MskServerlessClusterClientAuthenticationSasl;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl">MskServerlessClusterClientAuthenticationSasl</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_serverless_cluster#sasl MskServerlessCluster#sasl}.

---

### MskServerlessClusterClientAuthenticationSasl <a name="MskServerlessClusterClientAuthenticationSasl" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl.Initializer"></a>

```typescript
import { mskServerlessCluster } from '@cdktn/provider-awscc'

const mskServerlessClusterClientAuthenticationSasl: mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl.property.iam">iam</a></code> | <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam">MskServerlessClusterClientAuthenticationSaslIam</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_serverless_cluster#iam MskServerlessCluster#iam}. |

---

##### `iam`<sup>Required</sup> <a name="iam" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl.property.iam"></a>

```typescript
public readonly iam: MskServerlessClusterClientAuthenticationSaslIam;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam">MskServerlessClusterClientAuthenticationSaslIam</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_serverless_cluster#iam MskServerlessCluster#iam}.

---

### MskServerlessClusterClientAuthenticationSaslIam <a name="MskServerlessClusterClientAuthenticationSaslIam" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam.Initializer"></a>

```typescript
import { mskServerlessCluster } from '@cdktn/provider-awscc'

const mskServerlessClusterClientAuthenticationSaslIam: mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_serverless_cluster#enabled MskServerlessCluster#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_serverless_cluster#enabled MskServerlessCluster#enabled}.

---

### MskServerlessClusterConfig <a name="MskServerlessClusterConfig" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.Initializer"></a>

```typescript
import { mskServerlessCluster } from '@cdktn/provider-awscc'

const mskServerlessClusterConfig: mskServerlessCluster.MskServerlessClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.clientAuthentication">clientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthentication">MskServerlessClusterClientAuthentication</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_serverless_cluster#client_authentication MskServerlessCluster#client_authentication}. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_serverless_cluster#cluster_name MskServerlessCluster#cluster_name}. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.vpcConfigs">vpcConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigs">MskServerlessClusterVpcConfigs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_serverless_cluster#vpc_configs MskServerlessCluster#vpc_configs}. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A key-value pair to associate with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clientAuthentication`<sup>Required</sup> <a name="clientAuthentication" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.clientAuthentication"></a>

```typescript
public readonly clientAuthentication: MskServerlessClusterClientAuthentication;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthentication">MskServerlessClusterClientAuthentication</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_serverless_cluster#client_authentication MskServerlessCluster#client_authentication}.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_serverless_cluster#cluster_name MskServerlessCluster#cluster_name}.

---

##### `vpcConfigs`<sup>Required</sup> <a name="vpcConfigs" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.vpcConfigs"></a>

```typescript
public readonly vpcConfigs: IResolvable | MskServerlessClusterVpcConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigs">MskServerlessClusterVpcConfigs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_serverless_cluster#vpc_configs MskServerlessCluster#vpc_configs}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_serverless_cluster#tags MskServerlessCluster#tags}

---

### MskServerlessClusterVpcConfigs <a name="MskServerlessClusterVpcConfigs" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigs.Initializer"></a>

```typescript
import { mskServerlessCluster } from '@cdktn/provider-awscc'

const mskServerlessClusterVpcConfigs: mskServerlessCluster.MskServerlessClusterVpcConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigs.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_serverless_cluster#subnet_ids MskServerlessCluster#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigs.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_serverless_cluster#security_groups MskServerlessCluster#security_groups}. |

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigs.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_serverless_cluster#subnet_ids MskServerlessCluster#subnet_ids}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigs.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_serverless_cluster#security_groups MskServerlessCluster#security_groups}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskServerlessClusterClientAuthenticationOutputReference <a name="MskServerlessClusterClientAuthenticationOutputReference" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.Initializer"></a>

```typescript
import { mskServerlessCluster } from '@cdktn/provider-awscc'

new mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.putSasl">putSasl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSasl` <a name="putSasl" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.putSasl"></a>

```typescript
public putSasl(value: MskServerlessClusterClientAuthenticationSasl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.putSasl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl">MskServerlessClusterClientAuthenticationSasl</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.property.sasl">sasl</a></code> | <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference">MskServerlessClusterClientAuthenticationSaslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.property.saslInput">saslInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl">MskServerlessClusterClientAuthenticationSasl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthentication">MskServerlessClusterClientAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sasl`<sup>Required</sup> <a name="sasl" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.property.sasl"></a>

```typescript
public readonly sasl: MskServerlessClusterClientAuthenticationSaslOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference">MskServerlessClusterClientAuthenticationSaslOutputReference</a>

---

##### `saslInput`<sup>Optional</sup> <a name="saslInput" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.property.saslInput"></a>

```typescript
public readonly saslInput: IResolvable | MskServerlessClusterClientAuthenticationSasl;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl">MskServerlessClusterClientAuthenticationSasl</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskServerlessClusterClientAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthentication">MskServerlessClusterClientAuthentication</a>

---


### MskServerlessClusterClientAuthenticationSaslIamOutputReference <a name="MskServerlessClusterClientAuthenticationSaslIamOutputReference" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.Initializer"></a>

```typescript
import { mskServerlessCluster } from '@cdktn/provider-awscc'

new mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam">MskServerlessClusterClientAuthenticationSaslIam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskServerlessClusterClientAuthenticationSaslIam;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam">MskServerlessClusterClientAuthenticationSaslIam</a>

---


### MskServerlessClusterClientAuthenticationSaslOutputReference <a name="MskServerlessClusterClientAuthenticationSaslOutputReference" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.Initializer"></a>

```typescript
import { mskServerlessCluster } from '@cdktn/provider-awscc'

new mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.putIam">putIam</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIam` <a name="putIam" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.putIam"></a>

```typescript
public putIam(value: MskServerlessClusterClientAuthenticationSaslIam): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.putIam.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam">MskServerlessClusterClientAuthenticationSaslIam</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.property.iam">iam</a></code> | <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference">MskServerlessClusterClientAuthenticationSaslIamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.property.iamInput">iamInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam">MskServerlessClusterClientAuthenticationSaslIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl">MskServerlessClusterClientAuthenticationSasl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iam`<sup>Required</sup> <a name="iam" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.property.iam"></a>

```typescript
public readonly iam: MskServerlessClusterClientAuthenticationSaslIamOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference">MskServerlessClusterClientAuthenticationSaslIamOutputReference</a>

---

##### `iamInput`<sup>Optional</sup> <a name="iamInput" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.property.iamInput"></a>

```typescript
public readonly iamInput: IResolvable | MskServerlessClusterClientAuthenticationSaslIam;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam">MskServerlessClusterClientAuthenticationSaslIam</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskServerlessClusterClientAuthenticationSasl;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl">MskServerlessClusterClientAuthenticationSasl</a>

---


### MskServerlessClusterVpcConfigsList <a name="MskServerlessClusterVpcConfigsList" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.Initializer"></a>

```typescript
import { mskServerlessCluster } from '@cdktn/provider-awscc'

new mskServerlessCluster.MskServerlessClusterVpcConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.get"></a>

```typescript
public get(index: number): MskServerlessClusterVpcConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigs">MskServerlessClusterVpcConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskServerlessClusterVpcConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigs">MskServerlessClusterVpcConfigs</a>[]

---


### MskServerlessClusterVpcConfigsOutputReference <a name="MskServerlessClusterVpcConfigsOutputReference" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.Initializer"></a>

```typescript
import { mskServerlessCluster } from '@cdktn/provider-awscc'

new mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigs">MskServerlessClusterVpcConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskServerlessClusterVpcConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskServerlessCluster.MskServerlessClusterVpcConfigs">MskServerlessClusterVpcConfigs</a>

---



