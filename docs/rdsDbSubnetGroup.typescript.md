# `rdsDbSubnetGroup` Submodule <a name="`rdsDbSubnetGroup` Submodule" id="@cdktn/provider-awscc.rdsDbSubnetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbSubnetGroup <a name="RdsDbSubnetGroup" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_subnet_group awscc_rds_db_subnet_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.Initializer"></a>

```typescript
import { rdsDbSubnetGroup } from '@cdktn/provider-awscc'

new rdsDbSubnetGroup.RdsDbSubnetGroup(scope: Construct, id: string, config: RdsDbSubnetGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig">RdsDbSubnetGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig">RdsDbSubnetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.resetDbSubnetGroupName">resetDbSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | RdsDbSubnetGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTags">RdsDbSubnetGroupTags</a>[]

---

##### `resetDbSubnetGroupName` <a name="resetDbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.resetDbSubnetGroupName"></a>

```typescript
public resetDbSubnetGroupName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDbSubnetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.isConstruct"></a>

```typescript
import { rdsDbSubnetGroup } from '@cdktn/provider-awscc'

rdsDbSubnetGroup.RdsDbSubnetGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.isTerraformElement"></a>

```typescript
import { rdsDbSubnetGroup } from '@cdktn/provider-awscc'

rdsDbSubnetGroup.RdsDbSubnetGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.isTerraformResource"></a>

```typescript
import { rdsDbSubnetGroup } from '@cdktn/provider-awscc'

rdsDbSubnetGroup.RdsDbSubnetGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.generateConfigForImport"></a>

```typescript
import { rdsDbSubnetGroup } from '@cdktn/provider-awscc'

rdsDbSubnetGroup.RdsDbSubnetGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RdsDbSubnetGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsDbSubnetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsDbSubnetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_subnet_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbSubnetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.dbSubnetGroupArn">dbSubnetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList">RdsDbSubnetGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.dbSubnetGroupDescriptionInput">dbSubnetGroupDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.dbSubnetGroupNameInput">dbSubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTags">RdsDbSubnetGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.dbSubnetGroupDescription">dbSubnetGroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dbSubnetGroupArn`<sup>Required</sup> <a name="dbSubnetGroupArn" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.dbSubnetGroupArn"></a>

```typescript
public readonly dbSubnetGroupArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.tags"></a>

```typescript
public readonly tags: RdsDbSubnetGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList">RdsDbSubnetGroupTagsList</a>

---

##### `dbSubnetGroupDescriptionInput`<sup>Optional</sup> <a name="dbSubnetGroupDescriptionInput" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.dbSubnetGroupDescriptionInput"></a>

```typescript
public readonly dbSubnetGroupDescriptionInput: string;
```

- *Type:* string

---

##### `dbSubnetGroupNameInput`<sup>Optional</sup> <a name="dbSubnetGroupNameInput" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.dbSubnetGroupNameInput"></a>

```typescript
public readonly dbSubnetGroupNameInput: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | RdsDbSubnetGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTags">RdsDbSubnetGroupTags</a>[]

---

##### `dbSubnetGroupDescription`<sup>Required</sup> <a name="dbSubnetGroupDescription" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.dbSubnetGroupDescription"></a>

```typescript
public readonly dbSubnetGroupDescription: string;
```

- *Type:* string

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="dbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.dbSubnetGroupName"></a>

```typescript
public readonly dbSubnetGroupName: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbSubnetGroupConfig <a name="RdsDbSubnetGroupConfig" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.Initializer"></a>

```typescript
import { rdsDbSubnetGroup } from '@cdktn/provider-awscc'

const rdsDbSubnetGroupConfig: rdsDbSubnetGroup.RdsDbSubnetGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.dbSubnetGroupDescription">dbSubnetGroupDescription</a></code> | <code>string</code> | The description for the DB subnet group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | The EC2 Subnet IDs for the DB subnet group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>string</code> | The name for the DB subnet group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTags">RdsDbSubnetGroupTags</a>[]</code> | Tags to assign to the DB subnet group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dbSubnetGroupDescription`<sup>Required</sup> <a name="dbSubnetGroupDescription" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.dbSubnetGroupDescription"></a>

```typescript
public readonly dbSubnetGroupDescription: string;
```

- *Type:* string

The description for the DB subnet group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_subnet_group#db_subnet_group_description RdsDbSubnetGroup#db_subnet_group_description}

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

The EC2 Subnet IDs for the DB subnet group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_subnet_group#subnet_ids RdsDbSubnetGroup#subnet_ids}

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="dbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.dbSubnetGroupName"></a>

```typescript
public readonly dbSubnetGroupName: string;
```

- *Type:* string

The name for the DB subnet group.

This value is stored as a lowercase string.
 Constraints:
  +  Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens.
  +  Must not be default.
  +  First character must be a letter.
  
 Example: ``mydbsubnetgroup``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_subnet_group#db_subnet_group_name RdsDbSubnetGroup#db_subnet_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | RdsDbSubnetGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTags">RdsDbSubnetGroupTags</a>[]

Tags to assign to the DB subnet group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_subnet_group#tags RdsDbSubnetGroup#tags}

---

### RdsDbSubnetGroupTags <a name="RdsDbSubnetGroupTags" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTags.Initializer"></a>

```typescript
import { rdsDbSubnetGroup } from '@cdktn/provider-awscc'

const rdsDbSubnetGroupTags: rdsDbSubnetGroup.RdsDbSubnetGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTags.property.key">key</a></code> | <code>string</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTags.property.value">value</a></code> | <code>string</code> | A value is the optional value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A key is the required name of the tag.

The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_subnet_group#key RdsDbSubnetGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A value is the optional value of the tag.

The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_subnet_group#value RdsDbSubnetGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbSubnetGroupTagsList <a name="RdsDbSubnetGroupTagsList" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.Initializer"></a>

```typescript
import { rdsDbSubnetGroup } from '@cdktn/provider-awscc'

new rdsDbSubnetGroup.RdsDbSubnetGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.get"></a>

```typescript
public get(index: number): RdsDbSubnetGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTags">RdsDbSubnetGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsDbSubnetGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTags">RdsDbSubnetGroupTags</a>[]

---


### RdsDbSubnetGroupTagsOutputReference <a name="RdsDbSubnetGroupTagsOutputReference" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.Initializer"></a>

```typescript
import { rdsDbSubnetGroup } from '@cdktn/provider-awscc'

new rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTags">RdsDbSubnetGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsDbSubnetGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbSubnetGroup.RdsDbSubnetGroupTags">RdsDbSubnetGroupTags</a>

---



