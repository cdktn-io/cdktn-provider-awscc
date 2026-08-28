# `cleanroomsIntermediateTable` Submodule <a name="`cleanroomsIntermediateTable` Submodule" id="@cdktn/provider-awscc.cleanroomsIntermediateTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsIntermediateTable <a name="CleanroomsIntermediateTable" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table awscc_cleanrooms_intermediate_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

new cleanroomsIntermediateTable.CleanroomsIntermediateTable(scope: Construct, id: string, config: CleanroomsIntermediateTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig">CleanroomsIntermediateTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig">CleanroomsIntermediateTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putAnalysisRules">putAnalysisRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putPopulationAnalysisConfiguration">putPopulationAnalysisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetAnalysisRules">resetAnalysisRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnalysisRules` <a name="putAnalysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putAnalysisRules"></a>

```typescript
public putAnalysisRules(value: IResolvable | CleanroomsIntermediateTableAnalysisRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putAnalysisRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>[]

---

##### `putPopulationAnalysisConfiguration` <a name="putPopulationAnalysisConfiguration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putPopulationAnalysisConfiguration"></a>

```typescript
public putPopulationAnalysisConfiguration(value: CleanroomsIntermediateTablePopulationAnalysisConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putPopulationAnalysisConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putTags"></a>

```typescript
public putTags(value: IResolvable | CleanroomsIntermediateTableTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>[]

---

##### `resetAnalysisRules` <a name="resetAnalysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetAnalysisRules"></a>

```typescript
public resetAnalysisRules(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsIntermediateTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isConstruct"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

cleanroomsIntermediateTable.CleanroomsIntermediateTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformElement"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformResource"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CleanroomsIntermediateTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CleanroomsIntermediateTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CleanroomsIntermediateTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsIntermediateTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.analysisRules">analysisRules</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList">CleanroomsIntermediateTableAnalysisRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.collaborationArn">collaborationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.collaborationIdentifier">collaborationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.intermediateTableIdentifier">intermediateTableIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipArn">membershipArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.populationAnalysisConfiguration">populationAnalysisConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference">CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList">CleanroomsIntermediateTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.analysisRulesInput">analysisRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipIdentifierInput">membershipIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.populationAnalysisConfigurationInput">populationAnalysisConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipIdentifier">membershipIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `analysisRules`<sup>Required</sup> <a name="analysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.analysisRules"></a>

```typescript
public readonly analysisRules: CleanroomsIntermediateTableAnalysisRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList">CleanroomsIntermediateTableAnalysisRulesList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `collaborationArn`<sup>Required</sup> <a name="collaborationArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.collaborationArn"></a>

```typescript
public readonly collaborationArn: string;
```

- *Type:* string

---

##### `collaborationIdentifier`<sup>Required</sup> <a name="collaborationIdentifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.collaborationIdentifier"></a>

```typescript
public readonly collaborationIdentifier: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `intermediateTableIdentifier`<sup>Required</sup> <a name="intermediateTableIdentifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.intermediateTableIdentifier"></a>

```typescript
public readonly intermediateTableIdentifier: string;
```

- *Type:* string

---

##### `membershipArn`<sup>Required</sup> <a name="membershipArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipArn"></a>

```typescript
public readonly membershipArn: string;
```

- *Type:* string

---

##### `populationAnalysisConfiguration`<sup>Required</sup> <a name="populationAnalysisConfiguration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.populationAnalysisConfiguration"></a>

```typescript
public readonly populationAnalysisConfiguration: CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference">CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tags"></a>

```typescript
public readonly tags: CleanroomsIntermediateTableTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList">CleanroomsIntermediateTableTagsList</a>

---

##### `analysisRulesInput`<sup>Optional</sup> <a name="analysisRulesInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.analysisRulesInput"></a>

```typescript
public readonly analysisRulesInput: IResolvable | CleanroomsIntermediateTableAnalysisRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `membershipIdentifierInput`<sup>Optional</sup> <a name="membershipIdentifierInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipIdentifierInput"></a>

```typescript
public readonly membershipIdentifierInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `populationAnalysisConfigurationInput`<sup>Optional</sup> <a name="populationAnalysisConfigurationInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.populationAnalysisConfigurationInput"></a>

```typescript
public readonly populationAnalysisConfigurationInput: IResolvable | CleanroomsIntermediateTablePopulationAnalysisConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CleanroomsIntermediateTableTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `membershipIdentifier`<sup>Required</sup> <a name="membershipIdentifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipIdentifier"></a>

```typescript
public readonly membershipIdentifier: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsIntermediateTableAnalysisRules <a name="CleanroomsIntermediateTableAnalysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

const cleanroomsIntermediateTableAnalysisRules: cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#policy CleanroomsIntermediateTable#policy}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#type CleanroomsIntermediateTable#type}. |

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.property.policy"></a>

```typescript
public readonly policy: CleanroomsIntermediateTableAnalysisRulesPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#policy CleanroomsIntermediateTable#policy}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#type CleanroomsIntermediateTable#type}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicy <a name="CleanroomsIntermediateTableAnalysisRulesPolicy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

const cleanroomsIntermediateTableAnalysisRulesPolicy: cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy.property.v1">v1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#v1 CleanroomsIntermediateTable#v1}. |

---

##### `v1`<sup>Optional</sup> <a name="v1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy.property.v1"></a>

```typescript
public readonly v1: CleanroomsIntermediateTableAnalysisRulesPolicyV1;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#v1 CleanroomsIntermediateTable#v1}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicyV1 <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

const cleanroomsIntermediateTableAnalysisRulesPolicyV1: cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#custom CleanroomsIntermediateTable#custom}. |

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1.property.custom"></a>

```typescript
public readonly custom: CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#custom CleanroomsIntermediateTable#custom}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

const cleanroomsIntermediateTableAnalysisRulesPolicyV1Custom: cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.additionalAnalyses">additionalAnalyses</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#additional_analyses CleanroomsIntermediateTable#additional_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedAnalyses">allowedAnalyses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#allowed_analyses CleanroomsIntermediateTable#allowed_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedAnalysisProviders">allowedAnalysisProviders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#allowed_analysis_providers CleanroomsIntermediateTable#allowed_analysis_providers}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedResultReceivers">allowedResultReceivers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#allowed_result_receivers CleanroomsIntermediateTable#allowed_result_receivers}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.differentialPrivacy">differentialPrivacy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#differential_privacy CleanroomsIntermediateTable#differential_privacy}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.disallowedOutputColumns">disallowedOutputColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#disallowed_output_columns CleanroomsIntermediateTable#disallowed_output_columns}. |

---

##### `additionalAnalyses`<sup>Optional</sup> <a name="additionalAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.additionalAnalyses"></a>

```typescript
public readonly additionalAnalyses: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#additional_analyses CleanroomsIntermediateTable#additional_analyses}.

---

##### `allowedAnalyses`<sup>Optional</sup> <a name="allowedAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedAnalyses"></a>

```typescript
public readonly allowedAnalyses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#allowed_analyses CleanroomsIntermediateTable#allowed_analyses}.

---

##### `allowedAnalysisProviders`<sup>Optional</sup> <a name="allowedAnalysisProviders" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedAnalysisProviders"></a>

```typescript
public readonly allowedAnalysisProviders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#allowed_analysis_providers CleanroomsIntermediateTable#allowed_analysis_providers}.

---

##### `allowedResultReceivers`<sup>Optional</sup> <a name="allowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedResultReceivers"></a>

```typescript
public readonly allowedResultReceivers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#allowed_result_receivers CleanroomsIntermediateTable#allowed_result_receivers}.

---

##### `differentialPrivacy`<sup>Optional</sup> <a name="differentialPrivacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.differentialPrivacy"></a>

```typescript
public readonly differentialPrivacy: CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#differential_privacy CleanroomsIntermediateTable#differential_privacy}.

---

##### `disallowedOutputColumns`<sup>Optional</sup> <a name="disallowedOutputColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.disallowedOutputColumns"></a>

```typescript
public readonly disallowedOutputColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#disallowed_output_columns CleanroomsIntermediateTable#disallowed_output_columns}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

const cleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy: cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.property.columns">columns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#columns CleanroomsIntermediateTable#columns}. |

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.property.columns"></a>

```typescript
public readonly columns: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#columns CleanroomsIntermediateTable#columns}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

const cleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns: cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}.

---

### CleanroomsIntermediateTableConfig <a name="CleanroomsIntermediateTableConfig" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

const cleanroomsIntermediateTableConfig: cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.membershipIdentifier">membershipIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#membership_identifier CleanroomsIntermediateTable#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.populationAnalysisConfiguration">populationAnalysisConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#population_analysis_configuration CleanroomsIntermediateTable#population_analysis_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.analysisRules">analysisRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#analysis_rules CleanroomsIntermediateTable#analysis_rules}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#description CleanroomsIntermediateTable#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#kms_key_arn CleanroomsIntermediateTable#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#tags CleanroomsIntermediateTable#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `membershipIdentifier`<sup>Required</sup> <a name="membershipIdentifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.membershipIdentifier"></a>

```typescript
public readonly membershipIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#membership_identifier CleanroomsIntermediateTable#membership_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}.

---

##### `populationAnalysisConfiguration`<sup>Required</sup> <a name="populationAnalysisConfiguration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.populationAnalysisConfiguration"></a>

```typescript
public readonly populationAnalysisConfiguration: CleanroomsIntermediateTablePopulationAnalysisConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#population_analysis_configuration CleanroomsIntermediateTable#population_analysis_configuration}.

---

##### `analysisRules`<sup>Optional</sup> <a name="analysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.analysisRules"></a>

```typescript
public readonly analysisRules: IResolvable | CleanroomsIntermediateTableAnalysisRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#analysis_rules CleanroomsIntermediateTable#analysis_rules}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#description CleanroomsIntermediateTable#description}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#kms_key_arn CleanroomsIntermediateTable#kms_key_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CleanroomsIntermediateTableTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#tags CleanroomsIntermediateTable#tags}.

---

### CleanroomsIntermediateTablePopulationAnalysisConfiguration <a name="CleanroomsIntermediateTablePopulationAnalysisConfiguration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

const cleanroomsIntermediateTablePopulationAnalysisConfiguration: cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration.property.sqlParameters">sqlParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#sql_parameters CleanroomsIntermediateTable#sql_parameters}. |

---

##### `sqlParameters`<sup>Optional</sup> <a name="sqlParameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration.property.sqlParameters"></a>

```typescript
public readonly sqlParameters: CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#sql_parameters CleanroomsIntermediateTable#sql_parameters}.

---

### CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters <a name="CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

const cleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters: cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.property.analysisTemplateArn">analysisTemplateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#analysis_template_arn CleanroomsIntermediateTable#analysis_template_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.property.queryString">queryString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#query_string CleanroomsIntermediateTable#query_string}. |

---

##### `analysisTemplateArn`<sup>Optional</sup> <a name="analysisTemplateArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.property.analysisTemplateArn"></a>

```typescript
public readonly analysisTemplateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#analysis_template_arn CleanroomsIntermediateTable#analysis_template_arn}.

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#query_string CleanroomsIntermediateTable#query_string}.

---

### CleanroomsIntermediateTableTags <a name="CleanroomsIntermediateTableTags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

const cleanroomsIntermediateTableTags: cleanroomsIntermediateTable.CleanroomsIntermediateTableTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#key CleanroomsIntermediateTable#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#value CleanroomsIntermediateTable#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#key CleanroomsIntermediateTable#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#value CleanroomsIntermediateTable#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsIntermediateTableAnalysisRulesList <a name="CleanroomsIntermediateTableAnalysisRulesList" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

new cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.get"></a>

```typescript
public get(index: number): CleanroomsIntermediateTableAnalysisRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsIntermediateTableAnalysisRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>[]

---


### CleanroomsIntermediateTableAnalysisRulesOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

new cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.putPolicy">putPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPolicy` <a name="putPolicy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.putPolicy"></a>

```typescript
public putPolicy(value: CleanroomsIntermediateTableAnalysisRulesPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a>

---

##### `resetPolicy` <a name="resetPolicy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.policyInput">policyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.policy"></a>

```typescript
public readonly policy: CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference</a>

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.policyInput"></a>

```typescript
public readonly policyInput: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsIntermediateTableAnalysisRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>

---


### CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

new cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.putV1">putV1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resetV1">resetV1</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putV1` <a name="putV1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.putV1"></a>

```typescript
public putV1(value: CleanroomsIntermediateTableAnalysisRulesPolicyV1): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.putV1.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a>

---

##### `resetV1` <a name="resetV1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resetV1"></a>

```typescript
public resetV1(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1">v1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1Input">v1Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `v1`<sup>Required</sup> <a name="v1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1"></a>

```typescript
public readonly v1: CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference</a>

---

##### `v1Input`<sup>Optional</sup> <a name="v1Input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1Input"></a>

```typescript
public readonly v1Input: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicyV1;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a>

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

new cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get"></a>

```typescript
public get(index: number): CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>[]

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

new cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

new cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.putColumns">putColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resetColumns">resetColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumns` <a name="putColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.putColumns"></a>

```typescript
public putColumns(value: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.putColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>[]

---

##### `resetColumns` <a name="resetColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resetColumns"></a>

```typescript
public resetColumns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columnsInput">columnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columns"></a>

```typescript
public readonly columns: CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList</a>

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columnsInput"></a>

```typescript
public readonly columnsInput: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

new cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.putDifferentialPrivacy">putDifferentialPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAdditionalAnalyses">resetAdditionalAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalyses">resetAllowedAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalysisProviders">resetAllowedAnalysisProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedResultReceivers">resetAllowedResultReceivers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetDifferentialPrivacy">resetDifferentialPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetDisallowedOutputColumns">resetDisallowedOutputColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDifferentialPrivacy` <a name="putDifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.putDifferentialPrivacy"></a>

```typescript
public putDifferentialPrivacy(value: CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.putDifferentialPrivacy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

---

##### `resetAdditionalAnalyses` <a name="resetAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAdditionalAnalyses"></a>

```typescript
public resetAdditionalAnalyses(): void
```

##### `resetAllowedAnalyses` <a name="resetAllowedAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalyses"></a>

```typescript
public resetAllowedAnalyses(): void
```

##### `resetAllowedAnalysisProviders` <a name="resetAllowedAnalysisProviders" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalysisProviders"></a>

```typescript
public resetAllowedAnalysisProviders(): void
```

##### `resetAllowedResultReceivers` <a name="resetAllowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedResultReceivers"></a>

```typescript
public resetAllowedResultReceivers(): void
```

##### `resetDifferentialPrivacy` <a name="resetDifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetDifferentialPrivacy"></a>

```typescript
public resetDifferentialPrivacy(): void
```

##### `resetDisallowedOutputColumns` <a name="resetDisallowedOutputColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetDisallowedOutputColumns"></a>

```typescript
public resetDisallowedOutputColumns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacy">differentialPrivacy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalysesInput">additionalAnalysesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysesInput">allowedAnalysesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProvidersInput">allowedAnalysisProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceiversInput">allowedResultReceiversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacyInput">differentialPrivacyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumnsInput">disallowedOutputColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalyses">additionalAnalyses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalyses">allowedAnalyses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProviders">allowedAnalysisProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers">allowedResultReceivers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumns">disallowedOutputColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `differentialPrivacy`<sup>Required</sup> <a name="differentialPrivacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacy"></a>

```typescript
public readonly differentialPrivacy: CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference</a>

---

##### `additionalAnalysesInput`<sup>Optional</sup> <a name="additionalAnalysesInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalysesInput"></a>

```typescript
public readonly additionalAnalysesInput: string;
```

- *Type:* string

---

##### `allowedAnalysesInput`<sup>Optional</sup> <a name="allowedAnalysesInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysesInput"></a>

```typescript
public readonly allowedAnalysesInput: string[];
```

- *Type:* string[]

---

##### `allowedAnalysisProvidersInput`<sup>Optional</sup> <a name="allowedAnalysisProvidersInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProvidersInput"></a>

```typescript
public readonly allowedAnalysisProvidersInput: string[];
```

- *Type:* string[]

---

##### `allowedResultReceiversInput`<sup>Optional</sup> <a name="allowedResultReceiversInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceiversInput"></a>

```typescript
public readonly allowedResultReceiversInput: string[];
```

- *Type:* string[]

---

##### `differentialPrivacyInput`<sup>Optional</sup> <a name="differentialPrivacyInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacyInput"></a>

```typescript
public readonly differentialPrivacyInput: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

---

##### `disallowedOutputColumnsInput`<sup>Optional</sup> <a name="disallowedOutputColumnsInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumnsInput"></a>

```typescript
public readonly disallowedOutputColumnsInput: string[];
```

- *Type:* string[]

---

##### `additionalAnalyses`<sup>Required</sup> <a name="additionalAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalyses"></a>

```typescript
public readonly additionalAnalyses: string;
```

- *Type:* string

---

##### `allowedAnalyses`<sup>Required</sup> <a name="allowedAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalyses"></a>

```typescript
public readonly allowedAnalyses: string[];
```

- *Type:* string[]

---

##### `allowedAnalysisProviders`<sup>Required</sup> <a name="allowedAnalysisProviders" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProviders"></a>

```typescript
public readonly allowedAnalysisProviders: string[];
```

- *Type:* string[]

---

##### `allowedResultReceivers`<sup>Required</sup> <a name="allowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers"></a>

```typescript
public readonly allowedResultReceivers: string[];
```

- *Type:* string[]

---

##### `disallowedOutputColumns`<sup>Required</sup> <a name="disallowedOutputColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumns"></a>

```typescript
public readonly disallowedOutputColumns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a>

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

new cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.putCustom">putCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resetCustom">resetCustom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustom` <a name="putCustom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.putCustom"></a>

```typescript
public putCustom(value: CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a>

---

##### `resetCustom` <a name="resetCustom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resetCustom"></a>

```typescript
public resetCustom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.customInput">customInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.custom"></a>

```typescript
public readonly custom: CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference</a>

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.customInput"></a>

```typescript
public readonly customInput: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicyV1;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a>

---


### CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference <a name="CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

new cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.putSqlParameters">putSqlParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resetSqlParameters">resetSqlParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSqlParameters` <a name="putSqlParameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.putSqlParameters"></a>

```typescript
public putSqlParameters(value: CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.putSqlParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a>

---

##### `resetSqlParameters` <a name="resetSqlParameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resetSqlParameters"></a>

```typescript
public resetSqlParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParameters">sqlParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParametersInput">sqlParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sqlParameters`<sup>Required</sup> <a name="sqlParameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParameters"></a>

```typescript
public readonly sqlParameters: CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference</a>

---

##### `sqlParametersInput`<sup>Optional</sup> <a name="sqlParametersInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParametersInput"></a>

```typescript
public readonly sqlParametersInput: IResolvable | CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsIntermediateTablePopulationAnalysisConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a>

---


### CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference <a name="CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

new cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resetAnalysisTemplateArn">resetAnalysisTemplateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnalysisTemplateArn` <a name="resetAnalysisTemplateArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resetAnalysisTemplateArn"></a>

```typescript
public resetAnalysisTemplateArn(): void
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resetQueryString"></a>

```typescript
public resetQueryString(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArnInput">analysisTemplateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArn">analysisTemplateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryString">queryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analysisTemplateArnInput`<sup>Optional</sup> <a name="analysisTemplateArnInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArnInput"></a>

```typescript
public readonly analysisTemplateArnInput: string;
```

- *Type:* string

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: string;
```

- *Type:* string

---

##### `analysisTemplateArn`<sup>Required</sup> <a name="analysisTemplateArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArn"></a>

```typescript
public readonly analysisTemplateArn: string;
```

- *Type:* string

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a>

---


### CleanroomsIntermediateTableTagsList <a name="CleanroomsIntermediateTableTagsList" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

new cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.get"></a>

```typescript
public get(index: number): CleanroomsIntermediateTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsIntermediateTableTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>[]

---


### CleanroomsIntermediateTableTagsOutputReference <a name="CleanroomsIntermediateTableTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer"></a>

```typescript
import { cleanroomsIntermediateTable } from '@cdktn/provider-awscc'

new cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsIntermediateTableTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>

---



