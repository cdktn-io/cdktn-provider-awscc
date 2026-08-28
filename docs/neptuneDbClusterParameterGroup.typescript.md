# `neptuneDbClusterParameterGroup` Submodule <a name="`neptuneDbClusterParameterGroup` Submodule" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptuneDbClusterParameterGroup <a name="NeptuneDbClusterParameterGroup" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster_parameter_group awscc_neptune_db_cluster_parameter_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer"></a>

```typescript
import { neptuneDbClusterParameterGroup } from '@cdktn/provider-awscc'

new neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup(scope: Construct, id: string, config: NeptuneDbClusterParameterGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig">NeptuneDbClusterParameterGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig">NeptuneDbClusterParameterGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | NeptuneDbClusterParameterGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags">NeptuneDbClusterParameterGroupTags</a>[]

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NeptuneDbClusterParameterGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.isConstruct"></a>

```typescript
import { neptuneDbClusterParameterGroup } from '@cdktn/provider-awscc'

neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.isTerraformElement"></a>

```typescript
import { neptuneDbClusterParameterGroup } from '@cdktn/provider-awscc'

neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.isTerraformResource"></a>

```typescript
import { neptuneDbClusterParameterGroup } from '@cdktn/provider-awscc'

neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.generateConfigForImport"></a>

```typescript
import { neptuneDbClusterParameterGroup } from '@cdktn/provider-awscc'

neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NeptuneDbClusterParameterGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NeptuneDbClusterParameterGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NeptuneDbClusterParameterGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster_parameter_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NeptuneDbClusterParameterGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList">NeptuneDbClusterParameterGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.familyInput">familyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags">NeptuneDbClusterParameterGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.family">family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.tags"></a>

```typescript
public readonly tags: NeptuneDbClusterParameterGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList">NeptuneDbClusterParameterGroupTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.familyInput"></a>

```typescript
public readonly familyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NeptuneDbClusterParameterGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags">NeptuneDbClusterParameterGroupTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NeptuneDbClusterParameterGroupConfig <a name="NeptuneDbClusterParameterGroupConfig" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.Initializer"></a>

```typescript
import { neptuneDbClusterParameterGroup } from '@cdktn/provider-awscc'

const neptuneDbClusterParameterGroupConfig: neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.description">description</a></code> | <code>string</code> | Provides the customer-specified description for this DB cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.family">family</a></code> | <code>string</code> | Must be neptune1 for engine versions prior to 1.2.0.0, or neptune1.2 for engine version 1.2.0.0 and higher. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.parameters">parameters</a></code> | <code>string</code> | An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.name">name</a></code> | <code>string</code> | Provides the name of the DB cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags">NeptuneDbClusterParameterGroupTags</a>[]</code> | The list of tags for the cluster parameter group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Provides the customer-specified description for this DB cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster_parameter_group#description NeptuneDbClusterParameterGroup#description}

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

Must be neptune1 for engine versions prior to 1.2.0.0, or neptune1.2 for engine version 1.2.0.0 and higher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster_parameter_group#family NeptuneDbClusterParameterGroup#family}

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster_parameter_group#parameters NeptuneDbClusterParameterGroup#parameters}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Provides the name of the DB cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster_parameter_group#name NeptuneDbClusterParameterGroup#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | NeptuneDbClusterParameterGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags">NeptuneDbClusterParameterGroupTags</a>[]

The list of tags for the cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster_parameter_group#tags NeptuneDbClusterParameterGroup#tags}

---

### NeptuneDbClusterParameterGroupTags <a name="NeptuneDbClusterParameterGroupTags" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags.Initializer"></a>

```typescript
import { neptuneDbClusterParameterGroup } from '@cdktn/provider-awscc'

const neptuneDbClusterParameterGroupTags: neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster_parameter_group#key NeptuneDbClusterParameterGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster_parameter_group#value NeptuneDbClusterParameterGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NeptuneDbClusterParameterGroupTagsList <a name="NeptuneDbClusterParameterGroupTagsList" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.Initializer"></a>

```typescript
import { neptuneDbClusterParameterGroup } from '@cdktn/provider-awscc'

new neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.get"></a>

```typescript
public get(index: number): NeptuneDbClusterParameterGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags">NeptuneDbClusterParameterGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NeptuneDbClusterParameterGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags">NeptuneDbClusterParameterGroupTags</a>[]

---


### NeptuneDbClusterParameterGroupTagsOutputReference <a name="NeptuneDbClusterParameterGroupTagsOutputReference" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.Initializer"></a>

```typescript
import { neptuneDbClusterParameterGroup } from '@cdktn/provider-awscc'

new neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags">NeptuneDbClusterParameterGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NeptuneDbClusterParameterGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags">NeptuneDbClusterParameterGroupTags</a>

---



