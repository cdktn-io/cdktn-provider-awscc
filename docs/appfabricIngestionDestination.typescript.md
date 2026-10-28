# `appfabricIngestionDestination` Submodule <a name="`appfabricIngestionDestination` Submodule" id="@cdktn/provider-awscc.appfabricIngestionDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppfabricIngestionDestination <a name="AppfabricIngestionDestination" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination awscc_appfabric_ingestion_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

new appfabricIngestionDestination.AppfabricIngestionDestination(scope: Construct, id: string, config: AppfabricIngestionDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig">AppfabricIngestionDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig">AppfabricIngestionDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.putDestinationConfiguration">putDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.putProcessingConfiguration">putProcessingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationConfiguration` <a name="putDestinationConfiguration" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.putDestinationConfiguration"></a>

```typescript
public putDestinationConfiguration(value: AppfabricIngestionDestinationDestinationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.putDestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>

---

##### `putProcessingConfiguration` <a name="putProcessingConfiguration" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.putProcessingConfiguration"></a>

```typescript
public putProcessingConfiguration(value: AppfabricIngestionDestinationProcessingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.putProcessingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.putTags"></a>

```typescript
public putTags(value: IResolvable | AppfabricIngestionDestinationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags">AppfabricIngestionDestinationTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppfabricIngestionDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.isConstruct"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

appfabricIngestionDestination.AppfabricIngestionDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformElement"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformResource"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppfabricIngestionDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppfabricIngestionDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppfabricIngestionDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppfabricIngestionDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.destinationConfiguration">destinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference">AppfabricIngestionDestinationDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.processingConfiguration">processingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference">AppfabricIngestionDestinationProcessingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList">AppfabricIngestionDestinationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.appBundleArnInput">appBundleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.destinationConfigurationInput">destinationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.ingestionArnInput">ingestionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.processingConfigurationInput">processingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags">AppfabricIngestionDestinationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.appBundleArn">appBundleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.ingestionArn">ingestionArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `destinationConfiguration`<sup>Required</sup> <a name="destinationConfiguration" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.destinationConfiguration"></a>

```typescript
public readonly destinationConfiguration: AppfabricIngestionDestinationDestinationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference">AppfabricIngestionDestinationDestinationConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `processingConfiguration`<sup>Required</sup> <a name="processingConfiguration" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.processingConfiguration"></a>

```typescript
public readonly processingConfiguration: AppfabricIngestionDestinationProcessingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference">AppfabricIngestionDestinationProcessingConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.tags"></a>

```typescript
public readonly tags: AppfabricIngestionDestinationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList">AppfabricIngestionDestinationTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `appBundleArnInput`<sup>Optional</sup> <a name="appBundleArnInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.appBundleArnInput"></a>

```typescript
public readonly appBundleArnInput: string;
```

- *Type:* string

---

##### `destinationConfigurationInput`<sup>Optional</sup> <a name="destinationConfigurationInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.destinationConfigurationInput"></a>

```typescript
public readonly destinationConfigurationInput: IResolvable | AppfabricIngestionDestinationDestinationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>

---

##### `ingestionArnInput`<sup>Optional</sup> <a name="ingestionArnInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.ingestionArnInput"></a>

```typescript
public readonly ingestionArnInput: string;
```

- *Type:* string

---

##### `processingConfigurationInput`<sup>Optional</sup> <a name="processingConfigurationInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.processingConfigurationInput"></a>

```typescript
public readonly processingConfigurationInput: IResolvable | AppfabricIngestionDestinationProcessingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AppfabricIngestionDestinationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags">AppfabricIngestionDestinationTags</a>[]

---

##### `appBundleArn`<sup>Required</sup> <a name="appBundleArn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.appBundleArn"></a>

```typescript
public readonly appBundleArn: string;
```

- *Type:* string

---

##### `ingestionArn`<sup>Required</sup> <a name="ingestionArn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.ingestionArn"></a>

```typescript
public readonly ingestionArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppfabricIngestionDestinationConfig <a name="AppfabricIngestionDestinationConfig" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.Initializer"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

const appfabricIngestionDestinationConfig: appfabricIngestionDestination.AppfabricIngestionDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.appBundleArn">appBundleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the app bundle. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.destinationConfiguration">destinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a></code> | Contains information about the destination of ingested data. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.ingestionArn">ingestionArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the ingestion. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.processingConfiguration">processingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a></code> | Contains information about how ingested data is processed. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags">AppfabricIngestionDestinationTags</a>[]</code> | A map of the key-value pairs of the tag or tags to assign to the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appBundleArn`<sup>Required</sup> <a name="appBundleArn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.appBundleArn"></a>

```typescript
public readonly appBundleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the app bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#app_bundle_arn AppfabricIngestionDestination#app_bundle_arn}

---

##### `destinationConfiguration`<sup>Required</sup> <a name="destinationConfiguration" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.destinationConfiguration"></a>

```typescript
public readonly destinationConfiguration: AppfabricIngestionDestinationDestinationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>

Contains information about the destination of ingested data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#destination_configuration AppfabricIngestionDestination#destination_configuration}

---

##### `ingestionArn`<sup>Required</sup> <a name="ingestionArn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.ingestionArn"></a>

```typescript
public readonly ingestionArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#ingestion_arn AppfabricIngestionDestination#ingestion_arn}

---

##### `processingConfiguration`<sup>Required</sup> <a name="processingConfiguration" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.processingConfiguration"></a>

```typescript
public readonly processingConfiguration: AppfabricIngestionDestinationProcessingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>

Contains information about how ingested data is processed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#processing_configuration AppfabricIngestionDestination#processing_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AppfabricIngestionDestinationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags">AppfabricIngestionDestinationTags</a>[]

A map of the key-value pairs of the tag or tags to assign to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#tags AppfabricIngestionDestination#tags}

---

### AppfabricIngestionDestinationDestinationConfiguration <a name="AppfabricIngestionDestinationDestinationConfiguration" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration.Initializer"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

const appfabricIngestionDestinationDestinationConfiguration: appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration.property.auditLog">auditLog</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a></code> | Contains information about an audit log destination configuration. |

---

##### `auditLog`<sup>Required</sup> <a name="auditLog" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration.property.auditLog"></a>

```typescript
public readonly auditLog: AppfabricIngestionDestinationDestinationConfigurationAuditLog;
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>

Contains information about an audit log destination configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#audit_log AppfabricIngestionDestination#audit_log}

---

### AppfabricIngestionDestinationDestinationConfigurationAuditLog <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLog" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog.Initializer"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

const appfabricIngestionDestinationDestinationConfigurationAuditLog: appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a></code> | Contains information about an audit log destination. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog.property.destination"></a>

```typescript
public readonly destination: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>

Contains information about an audit log destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#destination AppfabricIngestionDestination#destination}

---

### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.Initializer"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

const appfabricIngestionDestinationDestinationConfigurationAuditLogDestination: appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.property.firehoseStream">firehoseStream</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a></code> | Contains information about an Amazon Kinesis Data Firehose delivery stream. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.property.s3Bucket">s3Bucket</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a></code> | Contains information about an Amazon S3 bucket. |

---

##### `firehoseStream`<sup>Optional</sup> <a name="firehoseStream" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.property.firehoseStream"></a>

```typescript
public readonly firehoseStream: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream;
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>

Contains information about an Amazon Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#firehose_stream AppfabricIngestionDestination#firehose_stream}

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket;
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>

Contains information about an Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#s3_bucket AppfabricIngestionDestination#s3_bucket}

---

### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream.Initializer"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

const appfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream: appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream.property.streamName">streamName</a></code> | <code>string</code> | The name of the Amazon Kinesis Data Firehose delivery stream. |

---

##### `streamName`<sup>Optional</sup> <a name="streamName" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

The name of the Amazon Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#stream_name AppfabricIngestionDestination#stream_name}

---

### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.Initializer"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

const appfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket: appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.property.prefix">prefix</a></code> | <code>string</code> | The object key to use. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#bucket_name AppfabricIngestionDestination#bucket_name}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

The object key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#prefix AppfabricIngestionDestination#prefix}

---

### AppfabricIngestionDestinationProcessingConfiguration <a name="AppfabricIngestionDestinationProcessingConfiguration" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration.Initializer"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

const appfabricIngestionDestinationProcessingConfiguration: appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration.property.auditLog">auditLog</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a></code> | Contains information about an audit log processing configuration. |

---

##### `auditLog`<sup>Required</sup> <a name="auditLog" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration.property.auditLog"></a>

```typescript
public readonly auditLog: AppfabricIngestionDestinationProcessingConfigurationAuditLog;
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>

Contains information about an audit log processing configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#audit_log AppfabricIngestionDestination#audit_log}

---

### AppfabricIngestionDestinationProcessingConfigurationAuditLog <a name="AppfabricIngestionDestinationProcessingConfigurationAuditLog" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.Initializer"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

const appfabricIngestionDestinationProcessingConfigurationAuditLog: appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.property.format">format</a></code> | <code>string</code> | The format in which the audit logs need to be formatted. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.property.schema">schema</a></code> | <code>string</code> | The event schema in which the audit logs need to be formatted. |

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

The format in which the audit logs need to be formatted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#format AppfabricIngestionDestination#format}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The event schema in which the audit logs need to be formatted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#schema AppfabricIngestionDestination#schema}

---

### AppfabricIngestionDestinationTags <a name="AppfabricIngestionDestinationTags" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags.Initializer"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

const appfabricIngestionDestinationTags: appfabricIngestionDestination.AppfabricIngestionDestinationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags.property.key">key</a></code> | <code>string</code> | Tag key. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags.property.value">value</a></code> | <code>string</code> | Tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#key AppfabricIngestionDestination#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#value AppfabricIngestionDestination#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

new appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.resetStreamName">resetStreamName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStreamName` <a name="resetStreamName" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.resetStreamName"></a>

```typescript
public resetStreamName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.streamNameInput"></a>

```typescript
public readonly streamNameInput: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

new appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putFirehoseStream">putFirehoseStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putS3Bucket">putS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resetFirehoseStream">resetFirehoseStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFirehoseStream` <a name="putFirehoseStream" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putFirehoseStream"></a>

```typescript
public putFirehoseStream(value: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putFirehoseStream.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>

---

##### `putS3Bucket` <a name="putS3Bucket" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putS3Bucket"></a>

```typescript
public putS3Bucket(value: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putS3Bucket.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>

---

##### `resetFirehoseStream` <a name="resetFirehoseStream" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resetFirehoseStream"></a>

```typescript
public resetFirehoseStream(): void
```

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resetS3Bucket"></a>

```typescript
public resetS3Bucket(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.firehoseStream">firehoseStream</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.s3Bucket">s3Bucket</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.firehoseStreamInput">firehoseStreamInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `firehoseStream`<sup>Required</sup> <a name="firehoseStream" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.firehoseStream"></a>

```typescript
public readonly firehoseStream: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference</a>

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference</a>

---

##### `firehoseStreamInput`<sup>Optional</sup> <a name="firehoseStreamInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.firehoseStreamInput"></a>

```typescript
public readonly firehoseStreamInput: IResolvable | AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: IResolvable | AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

new appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

new appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.putDestination">putDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.putDestination"></a>

```typescript
public putDestination(value: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.destinationInput">destinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.destination"></a>

```typescript
public readonly destination: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: IResolvable | AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppfabricIngestionDestinationDestinationConfigurationAuditLog;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>

---


### AppfabricIngestionDestinationDestinationConfigurationOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

new appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.putAuditLog">putAuditLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuditLog` <a name="putAuditLog" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.putAuditLog"></a>

```typescript
public putAuditLog(value: AppfabricIngestionDestinationDestinationConfigurationAuditLog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.putAuditLog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.auditLog">auditLog</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference">AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.auditLogInput">auditLogInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditLog`<sup>Required</sup> <a name="auditLog" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.auditLog"></a>

```typescript
public readonly auditLog: AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference">AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference</a>

---

##### `auditLogInput`<sup>Optional</sup> <a name="auditLogInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.auditLogInput"></a>

```typescript
public readonly auditLogInput: IResolvable | AppfabricIngestionDestinationDestinationConfigurationAuditLog;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppfabricIngestionDestinationDestinationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>

---


### AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference <a name="AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

new appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppfabricIngestionDestinationProcessingConfigurationAuditLog;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>

---


### AppfabricIngestionDestinationProcessingConfigurationOutputReference <a name="AppfabricIngestionDestinationProcessingConfigurationOutputReference" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

new appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.putAuditLog">putAuditLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuditLog` <a name="putAuditLog" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.putAuditLog"></a>

```typescript
public putAuditLog(value: AppfabricIngestionDestinationProcessingConfigurationAuditLog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.putAuditLog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.auditLog">auditLog</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference">AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.auditLogInput">auditLogInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditLog`<sup>Required</sup> <a name="auditLog" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.auditLog"></a>

```typescript
public readonly auditLog: AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference">AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference</a>

---

##### `auditLogInput`<sup>Optional</sup> <a name="auditLogInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.auditLogInput"></a>

```typescript
public readonly auditLogInput: IResolvable | AppfabricIngestionDestinationProcessingConfigurationAuditLog;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppfabricIngestionDestinationProcessingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>

---


### AppfabricIngestionDestinationTagsList <a name="AppfabricIngestionDestinationTagsList" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.Initializer"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

new appfabricIngestionDestination.AppfabricIngestionDestinationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.get"></a>

```typescript
public get(index: number): AppfabricIngestionDestinationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags">AppfabricIngestionDestinationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppfabricIngestionDestinationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags">AppfabricIngestionDestinationTags</a>[]

---


### AppfabricIngestionDestinationTagsOutputReference <a name="AppfabricIngestionDestinationTagsOutputReference" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.Initializer"></a>

```typescript
import { appfabricIngestionDestination } from '@cdktn/provider-awscc'

new appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags">AppfabricIngestionDestinationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppfabricIngestionDestinationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags">AppfabricIngestionDestinationTags</a>

---



