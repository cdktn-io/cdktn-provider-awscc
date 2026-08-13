# `elasticacheSubnetGroup` Submodule <a name="`elasticacheSubnetGroup` Submodule" id="@cdktn/provider-awscc.elasticacheSubnetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheSubnetGroup <a name="ElasticacheSubnetGroup" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_subnet_group awscc_elasticache_subnet_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.Initializer"></a>

```typescript
import { elasticacheSubnetGroup } from '@cdktn/provider-awscc'

new elasticacheSubnetGroup.ElasticacheSubnetGroup(scope: Construct, id: string, config: ElasticacheSubnetGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig">ElasticacheSubnetGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig">ElasticacheSubnetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.resetCacheSubnetGroupName">resetCacheSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | ElasticacheSubnetGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTags">ElasticacheSubnetGroupTags</a>[]

---

##### `resetCacheSubnetGroupName` <a name="resetCacheSubnetGroupName" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.resetCacheSubnetGroupName"></a>

```typescript
public resetCacheSubnetGroupName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticacheSubnetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.isConstruct"></a>

```typescript
import { elasticacheSubnetGroup } from '@cdktn/provider-awscc'

elasticacheSubnetGroup.ElasticacheSubnetGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.isTerraformElement"></a>

```typescript
import { elasticacheSubnetGroup } from '@cdktn/provider-awscc'

elasticacheSubnetGroup.ElasticacheSubnetGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.isTerraformResource"></a>

```typescript
import { elasticacheSubnetGroup } from '@cdktn/provider-awscc'

elasticacheSubnetGroup.ElasticacheSubnetGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.generateConfigForImport"></a>

```typescript
import { elasticacheSubnetGroup } from '@cdktn/provider-awscc'

elasticacheSubnetGroup.ElasticacheSubnetGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ElasticacheSubnetGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticacheSubnetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticacheSubnetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_subnet_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ElasticacheSubnetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList">ElasticacheSubnetGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.cacheSubnetGroupNameInput">cacheSubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTags">ElasticacheSubnetGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.cacheSubnetGroupName">cacheSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.tags"></a>

```typescript
public readonly tags: ElasticacheSubnetGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList">ElasticacheSubnetGroupTagsList</a>

---

##### `cacheSubnetGroupNameInput`<sup>Optional</sup> <a name="cacheSubnetGroupNameInput" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.cacheSubnetGroupNameInput"></a>

```typescript
public readonly cacheSubnetGroupNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ElasticacheSubnetGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTags">ElasticacheSubnetGroupTags</a>[]

---

##### `cacheSubnetGroupName`<sup>Required</sup> <a name="cacheSubnetGroupName" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.cacheSubnetGroupName"></a>

```typescript
public readonly cacheSubnetGroupName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheSubnetGroupConfig <a name="ElasticacheSubnetGroupConfig" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.Initializer"></a>

```typescript
import { elasticacheSubnetGroup } from '@cdktn/provider-awscc'

const elasticacheSubnetGroupConfig: elasticacheSubnetGroup.ElasticacheSubnetGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.description">description</a></code> | <code>string</code> | The description for the cache subnet group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | The EC2 subnet IDs for the cache subnet group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.cacheSubnetGroupName">cacheSubnetGroupName</a></code> | <code>string</code> | The name for the cache subnet group. This value is stored as a lowercase string. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTags">ElasticacheSubnetGroupTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_subnet_group#tags ElasticacheSubnetGroup#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description for the cache subnet group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_subnet_group#description ElasticacheSubnetGroup#description}

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

The EC2 subnet IDs for the cache subnet group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_subnet_group#subnet_ids ElasticacheSubnetGroup#subnet_ids}

---

##### `cacheSubnetGroupName`<sup>Optional</sup> <a name="cacheSubnetGroupName" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.cacheSubnetGroupName"></a>

```typescript
public readonly cacheSubnetGroupName: string;
```

- *Type:* string

The name for the cache subnet group. This value is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_subnet_group#cache_subnet_group_name ElasticacheSubnetGroup#cache_subnet_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ElasticacheSubnetGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTags">ElasticacheSubnetGroupTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_subnet_group#tags ElasticacheSubnetGroup#tags}.

---

### ElasticacheSubnetGroupTags <a name="ElasticacheSubnetGroupTags" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTags.Initializer"></a>

```typescript
import { elasticacheSubnetGroup } from '@cdktn/provider-awscc'

const elasticacheSubnetGroupTags: elasticacheSubnetGroup.ElasticacheSubnetGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_subnet_group#key ElasticacheSubnetGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_subnet_group#value ElasticacheSubnetGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_subnet_group#key ElasticacheSubnetGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_subnet_group#value ElasticacheSubnetGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheSubnetGroupTagsList <a name="ElasticacheSubnetGroupTagsList" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.Initializer"></a>

```typescript
import { elasticacheSubnetGroup } from '@cdktn/provider-awscc'

new elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.get"></a>

```typescript
public get(index: number): ElasticacheSubnetGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTags">ElasticacheSubnetGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheSubnetGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTags">ElasticacheSubnetGroupTags</a>[]

---


### ElasticacheSubnetGroupTagsOutputReference <a name="ElasticacheSubnetGroupTagsOutputReference" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.Initializer"></a>

```typescript
import { elasticacheSubnetGroup } from '@cdktn/provider-awscc'

new elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTags">ElasticacheSubnetGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheSubnetGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheSubnetGroup.ElasticacheSubnetGroupTags">ElasticacheSubnetGroupTags</a>

---



