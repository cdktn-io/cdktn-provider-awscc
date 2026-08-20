# `glueTableOptimizer` Submodule <a name="`glueTableOptimizer` Submodule" id="@cdktn/provider-awscc.glueTableOptimizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueTableOptimizer <a name="GlueTableOptimizer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer awscc_glue_table_optimizer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

new glueTableOptimizer.GlueTableOptimizer(scope: Construct, id: string, config: GlueTableOptimizerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig">GlueTableOptimizerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig">GlueTableOptimizerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.putTableOptimizerConfiguration">putTableOptimizerConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTableOptimizerConfiguration` <a name="putTableOptimizerConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.putTableOptimizerConfiguration"></a>

```typescript
public putTableOptimizerConfiguration(value: GlueTableOptimizerTableOptimizerConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.putTableOptimizerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueTableOptimizer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isConstruct"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

glueTableOptimizer.GlueTableOptimizer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isTerraformElement"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

glueTableOptimizer.GlueTableOptimizer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isTerraformResource"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

glueTableOptimizer.GlueTableOptimizer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.generateConfigForImport"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

glueTableOptimizer.GlueTableOptimizer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GlueTableOptimizer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueTableOptimizer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueTableOptimizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueTableOptimizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableOptimizerConfiguration">tableOptimizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableOptimizerConfigurationInput">tableOptimizerConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tableOptimizerConfiguration`<sup>Required</sup> <a name="tableOptimizerConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableOptimizerConfiguration"></a>

```typescript
public readonly tableOptimizerConfiguration: GlueTableOptimizerTableOptimizerConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `tableOptimizerConfigurationInput`<sup>Optional</sup> <a name="tableOptimizerConfigurationInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableOptimizerConfigurationInput"></a>

```typescript
public readonly tableOptimizerConfigurationInput: IResolvable | GlueTableOptimizerTableOptimizerConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueTableOptimizerConfig <a name="GlueTableOptimizerConfig" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.Initializer"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

const glueTableOptimizerConfig: glueTableOptimizer.GlueTableOptimizerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.catalogId">catalogId</a></code> | <code>string</code> | The catalog ID of the table. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database. For Hive compatibility, this is folded to lowercase when it is stored. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.tableName">tableName</a></code> | <code>string</code> | The table name. For Hive compatibility, this must be entirely lowercase. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.tableOptimizerConfiguration">tableOptimizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a></code> | Specifies configuration details of a table optimizer. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.type">type</a></code> | <code>string</code> | The type of table optimizer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

The catalog ID of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#catalog_id GlueTableOptimizer#catalog_id}

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the database. For Hive compatibility, this is folded to lowercase when it is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#database_name GlueTableOptimizer#database_name}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The table name. For Hive compatibility, this must be entirely lowercase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#table_name GlueTableOptimizer#table_name}

---

##### `tableOptimizerConfiguration`<sup>Required</sup> <a name="tableOptimizerConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.tableOptimizerConfiguration"></a>

```typescript
public readonly tableOptimizerConfiguration: GlueTableOptimizerTableOptimizerConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a>

Specifies configuration details of a table optimizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#table_optimizer_configuration GlueTableOptimizer#table_optimizer_configuration}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of table optimizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#type GlueTableOptimizer#type}

---

### GlueTableOptimizerTableOptimizerConfiguration <a name="GlueTableOptimizerTableOptimizerConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.Initializer"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

const glueTableOptimizerTableOptimizerConfiguration: glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the table optimization is enabled. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | A role passed by the caller which gives the service permission to update the resources associated with the optimizer on the caller's behalf. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.compactionConfiguration">compactionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a></code> | The configuration for a compaction optimizer. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.orphanFileDeletionConfiguration">orphanFileDeletionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a></code> | OrphanFileDeletionConfiguration is a property that can be included within the TableOptimizer resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.retentionConfiguration">retentionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a></code> | The configuration for a snapshot retention optimizer for Apache Iceberg tables. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a></code> | An object that describes the VPC configuration for a table optimizer. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the table optimization is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#enabled GlueTableOptimizer#enabled}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

A role passed by the caller which gives the service permission to update the resources associated with the optimizer on the caller's behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#role_arn GlueTableOptimizer#role_arn}

---

##### `compactionConfiguration`<sup>Optional</sup> <a name="compactionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.compactionConfiguration"></a>

```typescript
public readonly compactionConfiguration: GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a>

The configuration for a compaction optimizer.

This configuration defines how data files in your table will be compacted to improve query performance and reduce storage costs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#compaction_configuration GlueTableOptimizer#compaction_configuration}

---

##### `orphanFileDeletionConfiguration`<sup>Optional</sup> <a name="orphanFileDeletionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.orphanFileDeletionConfiguration"></a>

```typescript
public readonly orphanFileDeletionConfiguration: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>

OrphanFileDeletionConfiguration is a property that can be included within the TableOptimizer resource.

It controls the automatic deletion of orphaned files - files that are not tracked by the table metadata, and older than the configured age limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#orphan_file_deletion_configuration GlueTableOptimizer#orphan_file_deletion_configuration}

---

##### `retentionConfiguration`<sup>Optional</sup> <a name="retentionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.retentionConfiguration"></a>

```typescript
public readonly retentionConfiguration: GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a>

The configuration for a snapshot retention optimizer for Apache Iceberg tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#retention_configuration GlueTableOptimizer#retention_configuration}

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a>

An object that describes the VPC configuration for a table optimizer.

This configuration is necessary to perform optimization on tables that are in a customer VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#vpc_configuration GlueTableOptimizer#vpc_configuration}

---

### GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration <a name="GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration.Initializer"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

const glueTableOptimizerTableOptimizerConfigurationCompactionConfiguration: glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration.property.icebergConfiguration">icebergConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a></code> | The configuration for an Iceberg compaction optimizer. |

---

##### `icebergConfiguration`<sup>Optional</sup> <a name="icebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration.property.icebergConfiguration"></a>

```typescript
public readonly icebergConfiguration: GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a>

The configuration for an Iceberg compaction optimizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#iceberg_configuration GlueTableOptimizer#iceberg_configuration}

---

### GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration <a name="GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.Initializer"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

const glueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration: glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.property.deleteFileThreshold">deleteFileThreshold</a></code> | <code>number</code> | The minimum number of deletes in a data file to make it eligible for compaction. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.property.minInputFiles">minInputFiles</a></code> | <code>number</code> | The minimum number of input files before compaction is triggered. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.property.strategy">strategy</a></code> | <code>string</code> | The compaction strategy to use. Valid values are binpack, sort, and z-order. |

---

##### `deleteFileThreshold`<sup>Optional</sup> <a name="deleteFileThreshold" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.property.deleteFileThreshold"></a>

```typescript
public readonly deleteFileThreshold: number;
```

- *Type:* number

The minimum number of deletes in a data file to make it eligible for compaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#delete_file_threshold GlueTableOptimizer#delete_file_threshold}

---

##### `minInputFiles`<sup>Optional</sup> <a name="minInputFiles" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.property.minInputFiles"></a>

```typescript
public readonly minInputFiles: number;
```

- *Type:* number

The minimum number of input files before compaction is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#min_input_files GlueTableOptimizer#min_input_files}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

The compaction strategy to use. Valid values are binpack, sort, and z-order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#strategy GlueTableOptimizer#strategy}

---

### GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration <a name="GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration.Initializer"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

const glueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration: glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration.property.icebergConfiguration">icebergConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a></code> | The IcebergConfiguration property helps optimize your Iceberg tables in AWS Glue by allowing you to specify format-specific settings that control how data is stored, compressed, and managed. |

---

##### `icebergConfiguration`<sup>Optional</sup> <a name="icebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration.property.icebergConfiguration"></a>

```typescript
public readonly icebergConfiguration: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>

The IcebergConfiguration property helps optimize your Iceberg tables in AWS Glue by allowing you to specify format-specific settings that control how data is stored, compressed, and managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#iceberg_configuration GlueTableOptimizer#iceberg_configuration}

---

### GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration <a name="GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.Initializer"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

const glueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration: glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.property.location">location</a></code> | <code>string</code> | Specifies a directory in which to look for orphan files (defaults to the table's location). |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.property.orphanFileRetentionPeriodInDays">orphanFileRetentionPeriodInDays</a></code> | <code>number</code> | The specific number of days you want to keep the orphan files. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Specifies a directory in which to look for orphan files (defaults to the table's location).

You may choose a sub-directory rather than the top-level table location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#location GlueTableOptimizer#location}

---

##### `orphanFileRetentionPeriodInDays`<sup>Optional</sup> <a name="orphanFileRetentionPeriodInDays" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.property.orphanFileRetentionPeriodInDays"></a>

```typescript
public readonly orphanFileRetentionPeriodInDays: number;
```

- *Type:* number

The specific number of days you want to keep the orphan files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#orphan_file_retention_period_in_days GlueTableOptimizer#orphan_file_retention_period_in_days}

---

### GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration <a name="GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration.Initializer"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

const glueTableOptimizerTableOptimizerConfigurationRetentionConfiguration: glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration.property.icebergConfiguration">icebergConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a></code> | The configuration for an Iceberg snapshot retention optimizer. |

---

##### `icebergConfiguration`<sup>Optional</sup> <a name="icebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration.property.icebergConfiguration"></a>

```typescript
public readonly icebergConfiguration: GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>

The configuration for an Iceberg snapshot retention optimizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#iceberg_configuration GlueTableOptimizer#iceberg_configuration}

---

### GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration <a name="GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.Initializer"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

const glueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration: glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.cleanExpiredFiles">cleanExpiredFiles</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#clean_expired_files GlueTableOptimizer#clean_expired_files}. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.numberOfSnapshotsToRetain">numberOfSnapshotsToRetain</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#number_of_snapshots_to_retain GlueTableOptimizer#number_of_snapshots_to_retain}. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.snapshotRetentionPeriodInDays">snapshotRetentionPeriodInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#snapshot_retention_period_in_days GlueTableOptimizer#snapshot_retention_period_in_days}. |

---

##### `cleanExpiredFiles`<sup>Optional</sup> <a name="cleanExpiredFiles" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.cleanExpiredFiles"></a>

```typescript
public readonly cleanExpiredFiles: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#clean_expired_files GlueTableOptimizer#clean_expired_files}.

---

##### `numberOfSnapshotsToRetain`<sup>Optional</sup> <a name="numberOfSnapshotsToRetain" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.numberOfSnapshotsToRetain"></a>

```typescript
public readonly numberOfSnapshotsToRetain: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#number_of_snapshots_to_retain GlueTableOptimizer#number_of_snapshots_to_retain}.

---

##### `snapshotRetentionPeriodInDays`<sup>Optional</sup> <a name="snapshotRetentionPeriodInDays" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.snapshotRetentionPeriodInDays"></a>

```typescript
public readonly snapshotRetentionPeriodInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#snapshot_retention_period_in_days GlueTableOptimizer#snapshot_retention_period_in_days}.

---

### GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration <a name="GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration.Initializer"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

const glueTableOptimizerTableOptimizerConfigurationVpcConfiguration: glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration.property.glueConnectionName">glueConnectionName</a></code> | <code>string</code> | The name of the AWS Glue connection used for the VPC for the table optimizer. |

---

##### `glueConnectionName`<sup>Optional</sup> <a name="glueConnectionName" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration.property.glueConnectionName"></a>

```typescript
public readonly glueConnectionName: string;
```

- *Type:* string

The name of the AWS Glue connection used for the VPC for the table optimizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#glue_connection_name GlueTableOptimizer#glue_connection_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

new glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resetDeleteFileThreshold">resetDeleteFileThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resetMinInputFiles">resetMinInputFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resetStrategy">resetStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteFileThreshold` <a name="resetDeleteFileThreshold" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resetDeleteFileThreshold"></a>

```typescript
public resetDeleteFileThreshold(): void
```

##### `resetMinInputFiles` <a name="resetMinInputFiles" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resetMinInputFiles"></a>

```typescript
public resetMinInputFiles(): void
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resetStrategy"></a>

```typescript
public resetStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.deleteFileThresholdInput">deleteFileThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.minInputFilesInput">minInputFilesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.strategyInput">strategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.deleteFileThreshold">deleteFileThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.minInputFiles">minInputFiles</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteFileThresholdInput`<sup>Optional</sup> <a name="deleteFileThresholdInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.deleteFileThresholdInput"></a>

```typescript
public readonly deleteFileThresholdInput: number;
```

- *Type:* number

---

##### `minInputFilesInput`<sup>Optional</sup> <a name="minInputFilesInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.minInputFilesInput"></a>

```typescript
public readonly minInputFilesInput: number;
```

- *Type:* number

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.strategyInput"></a>

```typescript
public readonly strategyInput: string;
```

- *Type:* string

---

##### `deleteFileThreshold`<sup>Required</sup> <a name="deleteFileThreshold" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.deleteFileThreshold"></a>

```typescript
public readonly deleteFileThreshold: number;
```

- *Type:* number

---

##### `minInputFiles`<sup>Required</sup> <a name="minInputFiles" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.minInputFiles"></a>

```typescript
public readonly minInputFiles: number;
```

- *Type:* number

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a>

---


### GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

new glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.putIcebergConfiguration">putIcebergConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.resetIcebergConfiguration">resetIcebergConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcebergConfiguration` <a name="putIcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.putIcebergConfiguration"></a>

```typescript
public putIcebergConfiguration(value: GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.putIcebergConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a>

---

##### `resetIcebergConfiguration` <a name="resetIcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.resetIcebergConfiguration"></a>

```typescript
public resetIcebergConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.icebergConfiguration">icebergConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.icebergConfigurationInput">icebergConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icebergConfiguration`<sup>Required</sup> <a name="icebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.icebergConfiguration"></a>

```typescript
public readonly icebergConfiguration: GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference</a>

---

##### `icebergConfigurationInput`<sup>Optional</sup> <a name="icebergConfigurationInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.icebergConfigurationInput"></a>

```typescript
public readonly icebergConfigurationInput: IResolvable | GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a>

---


### GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

new glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resetOrphanFileRetentionPeriodInDays">resetOrphanFileRetentionPeriodInDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetOrphanFileRetentionPeriodInDays` <a name="resetOrphanFileRetentionPeriodInDays" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resetOrphanFileRetentionPeriodInDays"></a>

```typescript
public resetOrphanFileRetentionPeriodInDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.orphanFileRetentionPeriodInDaysInput">orphanFileRetentionPeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.orphanFileRetentionPeriodInDays">orphanFileRetentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `orphanFileRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="orphanFileRetentionPeriodInDaysInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.orphanFileRetentionPeriodInDaysInput"></a>

```typescript
public readonly orphanFileRetentionPeriodInDaysInput: number;
```

- *Type:* number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `orphanFileRetentionPeriodInDays`<sup>Required</sup> <a name="orphanFileRetentionPeriodInDays" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.orphanFileRetentionPeriodInDays"></a>

```typescript
public readonly orphanFileRetentionPeriodInDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>

---


### GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

new glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.putIcebergConfiguration">putIcebergConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resetIcebergConfiguration">resetIcebergConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcebergConfiguration` <a name="putIcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.putIcebergConfiguration"></a>

```typescript
public putIcebergConfiguration(value: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.putIcebergConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>

---

##### `resetIcebergConfiguration` <a name="resetIcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resetIcebergConfiguration"></a>

```typescript
public resetIcebergConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.icebergConfiguration">icebergConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.icebergConfigurationInput">icebergConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icebergConfiguration`<sup>Required</sup> <a name="icebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.icebergConfiguration"></a>

```typescript
public readonly icebergConfiguration: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference</a>

---

##### `icebergConfigurationInput`<sup>Optional</sup> <a name="icebergConfigurationInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.icebergConfigurationInput"></a>

```typescript
public readonly icebergConfigurationInput: IResolvable | GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>

---


### GlueTableOptimizerTableOptimizerConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

new glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putCompactionConfiguration">putCompactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putOrphanFileDeletionConfiguration">putOrphanFileDeletionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putRetentionConfiguration">putRetentionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putVpcConfiguration">putVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetCompactionConfiguration">resetCompactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetOrphanFileDeletionConfiguration">resetOrphanFileDeletionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetRetentionConfiguration">resetRetentionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetVpcConfiguration">resetVpcConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCompactionConfiguration` <a name="putCompactionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putCompactionConfiguration"></a>

```typescript
public putCompactionConfiguration(value: GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putCompactionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a>

---

##### `putOrphanFileDeletionConfiguration` <a name="putOrphanFileDeletionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putOrphanFileDeletionConfiguration"></a>

```typescript
public putOrphanFileDeletionConfiguration(value: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putOrphanFileDeletionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>

---

##### `putRetentionConfiguration` <a name="putRetentionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putRetentionConfiguration"></a>

```typescript
public putRetentionConfiguration(value: GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putRetentionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a>

---

##### `putVpcConfiguration` <a name="putVpcConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putVpcConfiguration"></a>

```typescript
public putVpcConfiguration(value: GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a>

---

##### `resetCompactionConfiguration` <a name="resetCompactionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetCompactionConfiguration"></a>

```typescript
public resetCompactionConfiguration(): void
```

##### `resetOrphanFileDeletionConfiguration` <a name="resetOrphanFileDeletionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetOrphanFileDeletionConfiguration"></a>

```typescript
public resetOrphanFileDeletionConfiguration(): void
```

##### `resetRetentionConfiguration` <a name="resetRetentionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetRetentionConfiguration"></a>

```typescript
public resetRetentionConfiguration(): void
```

##### `resetVpcConfiguration` <a name="resetVpcConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetVpcConfiguration"></a>

```typescript
public resetVpcConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.compactionConfiguration">compactionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.orphanFileDeletionConfiguration">orphanFileDeletionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.retentionConfiguration">retentionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.compactionConfigurationInput">compactionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.orphanFileDeletionConfigurationInput">orphanFileDeletionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.retentionConfigurationInput">retentionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.vpcConfigurationInput">vpcConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compactionConfiguration`<sup>Required</sup> <a name="compactionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.compactionConfiguration"></a>

```typescript
public readonly compactionConfiguration: GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference</a>

---

##### `orphanFileDeletionConfiguration`<sup>Required</sup> <a name="orphanFileDeletionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.orphanFileDeletionConfiguration"></a>

```typescript
public readonly orphanFileDeletionConfiguration: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference</a>

---

##### `retentionConfiguration`<sup>Required</sup> <a name="retentionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.retentionConfiguration"></a>

```typescript
public readonly retentionConfiguration: GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference</a>

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference</a>

---

##### `compactionConfigurationInput`<sup>Optional</sup> <a name="compactionConfigurationInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.compactionConfigurationInput"></a>

```typescript
public readonly compactionConfigurationInput: IResolvable | GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `orphanFileDeletionConfigurationInput`<sup>Optional</sup> <a name="orphanFileDeletionConfigurationInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.orphanFileDeletionConfigurationInput"></a>

```typescript
public readonly orphanFileDeletionConfigurationInput: IResolvable | GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>

---

##### `retentionConfigurationInput`<sup>Optional</sup> <a name="retentionConfigurationInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.retentionConfigurationInput"></a>

```typescript
public readonly retentionConfigurationInput: IResolvable | GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `vpcConfigurationInput`<sup>Optional</sup> <a name="vpcConfigurationInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.vpcConfigurationInput"></a>

```typescript
public readonly vpcConfigurationInput: IResolvable | GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueTableOptimizerTableOptimizerConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a>

---


### GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

new glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetCleanExpiredFiles">resetCleanExpiredFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetNumberOfSnapshotsToRetain">resetNumberOfSnapshotsToRetain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetSnapshotRetentionPeriodInDays">resetSnapshotRetentionPeriodInDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCleanExpiredFiles` <a name="resetCleanExpiredFiles" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetCleanExpiredFiles"></a>

```typescript
public resetCleanExpiredFiles(): void
```

##### `resetNumberOfSnapshotsToRetain` <a name="resetNumberOfSnapshotsToRetain" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetNumberOfSnapshotsToRetain"></a>

```typescript
public resetNumberOfSnapshotsToRetain(): void
```

##### `resetSnapshotRetentionPeriodInDays` <a name="resetSnapshotRetentionPeriodInDays" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetSnapshotRetentionPeriodInDays"></a>

```typescript
public resetSnapshotRetentionPeriodInDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.cleanExpiredFilesInput">cleanExpiredFilesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.numberOfSnapshotsToRetainInput">numberOfSnapshotsToRetainInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.snapshotRetentionPeriodInDaysInput">snapshotRetentionPeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.cleanExpiredFiles">cleanExpiredFiles</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.numberOfSnapshotsToRetain">numberOfSnapshotsToRetain</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.snapshotRetentionPeriodInDays">snapshotRetentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cleanExpiredFilesInput`<sup>Optional</sup> <a name="cleanExpiredFilesInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.cleanExpiredFilesInput"></a>

```typescript
public readonly cleanExpiredFilesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numberOfSnapshotsToRetainInput`<sup>Optional</sup> <a name="numberOfSnapshotsToRetainInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.numberOfSnapshotsToRetainInput"></a>

```typescript
public readonly numberOfSnapshotsToRetainInput: number;
```

- *Type:* number

---

##### `snapshotRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="snapshotRetentionPeriodInDaysInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.snapshotRetentionPeriodInDaysInput"></a>

```typescript
public readonly snapshotRetentionPeriodInDaysInput: number;
```

- *Type:* number

---

##### `cleanExpiredFiles`<sup>Required</sup> <a name="cleanExpiredFiles" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.cleanExpiredFiles"></a>

```typescript
public readonly cleanExpiredFiles: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numberOfSnapshotsToRetain`<sup>Required</sup> <a name="numberOfSnapshotsToRetain" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.numberOfSnapshotsToRetain"></a>

```typescript
public readonly numberOfSnapshotsToRetain: number;
```

- *Type:* number

---

##### `snapshotRetentionPeriodInDays`<sup>Required</sup> <a name="snapshotRetentionPeriodInDays" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.snapshotRetentionPeriodInDays"></a>

```typescript
public readonly snapshotRetentionPeriodInDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>

---


### GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

new glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.putIcebergConfiguration">putIcebergConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.resetIcebergConfiguration">resetIcebergConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcebergConfiguration` <a name="putIcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.putIcebergConfiguration"></a>

```typescript
public putIcebergConfiguration(value: GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.putIcebergConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>

---

##### `resetIcebergConfiguration` <a name="resetIcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.resetIcebergConfiguration"></a>

```typescript
public resetIcebergConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.icebergConfiguration">icebergConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.icebergConfigurationInput">icebergConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icebergConfiguration`<sup>Required</sup> <a name="icebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.icebergConfiguration"></a>

```typescript
public readonly icebergConfiguration: GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference</a>

---

##### `icebergConfigurationInput`<sup>Optional</sup> <a name="icebergConfigurationInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.icebergConfigurationInput"></a>

```typescript
public readonly icebergConfigurationInput: IResolvable | GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a>

---


### GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { glueTableOptimizer } from '@cdktn/provider-awscc'

new glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.resetGlueConnectionName">resetGlueConnectionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGlueConnectionName` <a name="resetGlueConnectionName" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.resetGlueConnectionName"></a>

```typescript
public resetGlueConnectionName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.glueConnectionNameInput">glueConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.glueConnectionName">glueConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `glueConnectionNameInput`<sup>Optional</sup> <a name="glueConnectionNameInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.glueConnectionNameInput"></a>

```typescript
public readonly glueConnectionNameInput: string;
```

- *Type:* string

---

##### `glueConnectionName`<sup>Required</sup> <a name="glueConnectionName" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.glueConnectionName"></a>

```typescript
public readonly glueConnectionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a>

---



