# `simspaceweaverSimulation` Submodule <a name="`simspaceweaverSimulation` Submodule" id="@cdktn/provider-awscc.simspaceweaverSimulation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SimspaceweaverSimulation <a name="SimspaceweaverSimulation" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation awscc_simspaceweaver_simulation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer"></a>

```typescript
import { simspaceweaverSimulation } from '@cdktn/provider-awscc'

new simspaceweaverSimulation.SimspaceweaverSimulation(scope: Construct, id: string, config: SimspaceweaverSimulationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig">SimspaceweaverSimulationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig">SimspaceweaverSimulationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSchemaS3Location">putSchemaS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSnapshotS3Location">putSnapshotS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetMaximumDuration">resetMaximumDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetSchemaS3Location">resetSchemaS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetSnapshotS3Location">resetSnapshotS3Location</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchemaS3Location` <a name="putSchemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSchemaS3Location"></a>

```typescript
public putSchemaS3Location(value: SimspaceweaverSimulationSchemaS3Location): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSchemaS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a>

---

##### `putSnapshotS3Location` <a name="putSnapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSnapshotS3Location"></a>

```typescript
public putSnapshotS3Location(value: SimspaceweaverSimulationSnapshotS3Location): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSnapshotS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a>

---

##### `resetMaximumDuration` <a name="resetMaximumDuration" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetMaximumDuration"></a>

```typescript
public resetMaximumDuration(): void
```

##### `resetSchemaS3Location` <a name="resetSchemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetSchemaS3Location"></a>

```typescript
public resetSchemaS3Location(): void
```

##### `resetSnapshotS3Location` <a name="resetSnapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetSnapshotS3Location"></a>

```typescript
public resetSnapshotS3Location(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SimspaceweaverSimulation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isConstruct"></a>

```typescript
import { simspaceweaverSimulation } from '@cdktn/provider-awscc'

simspaceweaverSimulation.SimspaceweaverSimulation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformElement"></a>

```typescript
import { simspaceweaverSimulation } from '@cdktn/provider-awscc'

simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformResource"></a>

```typescript
import { simspaceweaverSimulation } from '@cdktn/provider-awscc'

simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport"></a>

```typescript
import { simspaceweaverSimulation } from '@cdktn/provider-awscc'

simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SimspaceweaverSimulation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SimspaceweaverSimulation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SimspaceweaverSimulation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SimspaceweaverSimulation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.describePayload">describePayload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.schemaS3Location">schemaS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference">SimspaceweaverSimulationSchemaS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.snapshotS3Location">snapshotS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference">SimspaceweaverSimulationSnapshotS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.maximumDurationInput">maximumDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.schemaS3LocationInput">schemaS3LocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.snapshotS3LocationInput">snapshotS3LocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.maximumDuration">maximumDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `describePayload`<sup>Required</sup> <a name="describePayload" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.describePayload"></a>

```typescript
public readonly describePayload: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `schemaS3Location`<sup>Required</sup> <a name="schemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.schemaS3Location"></a>

```typescript
public readonly schemaS3Location: SimspaceweaverSimulationSchemaS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference">SimspaceweaverSimulationSchemaS3LocationOutputReference</a>

---

##### `snapshotS3Location`<sup>Required</sup> <a name="snapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.snapshotS3Location"></a>

```typescript
public readonly snapshotS3Location: SimspaceweaverSimulationSnapshotS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference">SimspaceweaverSimulationSnapshotS3LocationOutputReference</a>

---

##### `maximumDurationInput`<sup>Optional</sup> <a name="maximumDurationInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.maximumDurationInput"></a>

```typescript
public readonly maximumDurationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `schemaS3LocationInput`<sup>Optional</sup> <a name="schemaS3LocationInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.schemaS3LocationInput"></a>

```typescript
public readonly schemaS3LocationInput: IResolvable | SimspaceweaverSimulationSchemaS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a>

---

##### `snapshotS3LocationInput`<sup>Optional</sup> <a name="snapshotS3LocationInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.snapshotS3LocationInput"></a>

```typescript
public readonly snapshotS3LocationInput: IResolvable | SimspaceweaverSimulationSnapshotS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a>

---

##### `maximumDuration`<sup>Required</sup> <a name="maximumDuration" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.maximumDuration"></a>

```typescript
public readonly maximumDuration: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SimspaceweaverSimulationConfig <a name="SimspaceweaverSimulationConfig" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.Initializer"></a>

```typescript
import { simspaceweaverSimulation } from '@cdktn/provider-awscc'

const simspaceweaverSimulationConfig: simspaceweaverSimulation.SimspaceweaverSimulationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.name">name</a></code> | <code>string</code> | The name of the simulation. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Role ARN. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.maximumDuration">maximumDuration</a></code> | <code>string</code> | The maximum running time of the simulation. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.schemaS3Location">schemaS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#schema_s3_location SimspaceweaverSimulation#schema_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.snapshotS3Location">snapshotS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#snapshot_s3_location SimspaceweaverSimulation#snapshot_s3_location}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#name SimspaceweaverSimulation#name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#role_arn SimspaceweaverSimulation#role_arn}

---

##### `maximumDuration`<sup>Optional</sup> <a name="maximumDuration" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.maximumDuration"></a>

```typescript
public readonly maximumDuration: string;
```

- *Type:* string

The maximum running time of the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#maximum_duration SimspaceweaverSimulation#maximum_duration}

---

##### `schemaS3Location`<sup>Optional</sup> <a name="schemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.schemaS3Location"></a>

```typescript
public readonly schemaS3Location: SimspaceweaverSimulationSchemaS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#schema_s3_location SimspaceweaverSimulation#schema_s3_location}.

---

##### `snapshotS3Location`<sup>Optional</sup> <a name="snapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.snapshotS3Location"></a>

```typescript
public readonly snapshotS3Location: SimspaceweaverSimulationSnapshotS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#snapshot_s3_location SimspaceweaverSimulation#snapshot_s3_location}.

---

### SimspaceweaverSimulationSchemaS3Location <a name="SimspaceweaverSimulationSchemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.Initializer"></a>

```typescript
import { simspaceweaverSimulation } from '@cdktn/provider-awscc'

const simspaceweaverSimulationSchemaS3Location: simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.property.bucketName">bucketName</a></code> | <code>string</code> | The Schema S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.property.objectKey">objectKey</a></code> | <code>string</code> | This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The Schema S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#bucket_name SimspaceweaverSimulation#bucket_name}

---

##### `objectKey`<sup>Optional</sup> <a name="objectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.property.objectKey"></a>

```typescript
public readonly objectKey: string;
```

- *Type:* string

This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#object_key SimspaceweaverSimulation#object_key}

---

### SimspaceweaverSimulationSnapshotS3Location <a name="SimspaceweaverSimulationSnapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.Initializer"></a>

```typescript
import { simspaceweaverSimulation } from '@cdktn/provider-awscc'

const simspaceweaverSimulationSnapshotS3Location: simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.property.bucketName">bucketName</a></code> | <code>string</code> | The Schema S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.property.objectKey">objectKey</a></code> | <code>string</code> | This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The Schema S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#bucket_name SimspaceweaverSimulation#bucket_name}

---

##### `objectKey`<sup>Optional</sup> <a name="objectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.property.objectKey"></a>

```typescript
public readonly objectKey: string;
```

- *Type:* string

This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#object_key SimspaceweaverSimulation#object_key}

---

## Classes <a name="Classes" id="Classes"></a>

### SimspaceweaverSimulationSchemaS3LocationOutputReference <a name="SimspaceweaverSimulationSchemaS3LocationOutputReference" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer"></a>

```typescript
import { simspaceweaverSimulation } from '@cdktn/provider-awscc'

new simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resetObjectKey">resetObjectKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetObjectKey` <a name="resetObjectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resetObjectKey"></a>

```typescript
public resetObjectKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKeyInput">objectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKey">objectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `objectKeyInput`<sup>Optional</sup> <a name="objectKeyInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKeyInput"></a>

```typescript
public readonly objectKeyInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `objectKey`<sup>Required</sup> <a name="objectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKey"></a>

```typescript
public readonly objectKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SimspaceweaverSimulationSchemaS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a>

---


### SimspaceweaverSimulationSnapshotS3LocationOutputReference <a name="SimspaceweaverSimulationSnapshotS3LocationOutputReference" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer"></a>

```typescript
import { simspaceweaverSimulation } from '@cdktn/provider-awscc'

new simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resetObjectKey">resetObjectKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetObjectKey` <a name="resetObjectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resetObjectKey"></a>

```typescript
public resetObjectKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKeyInput">objectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKey">objectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `objectKeyInput`<sup>Optional</sup> <a name="objectKeyInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKeyInput"></a>

```typescript
public readonly objectKeyInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `objectKey`<sup>Required</sup> <a name="objectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKey"></a>

```typescript
public readonly objectKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SimspaceweaverSimulationSnapshotS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a>

---



