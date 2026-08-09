# `lakeformationDataCellsFilter` Submodule <a name="`lakeformationDataCellsFilter` Submodule" id="@cdktn/provider-awscc.lakeformationDataCellsFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationDataCellsFilter <a name="LakeformationDataCellsFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_data_cells_filter awscc_lakeformation_data_cells_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktn/provider-awscc'

new lakeformationDataCellsFilter.LakeformationDataCellsFilter(scope: Construct, id: string, config: LakeformationDataCellsFilterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig">LakeformationDataCellsFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig">LakeformationDataCellsFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putColumnWildcard">putColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putRowFilter">putRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetColumnNames">resetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetColumnWildcard">resetColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetRowFilter">resetRowFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putColumnWildcard` <a name="putColumnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putColumnWildcard"></a>

```typescript
public putColumnWildcard(value: LakeformationDataCellsFilterColumnWildcard): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putColumnWildcard.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a>

---

##### `putRowFilter` <a name="putRowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putRowFilter"></a>

```typescript
public putRowFilter(value: LakeformationDataCellsFilterRowFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putRowFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a>

---

##### `resetColumnNames` <a name="resetColumnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetColumnNames"></a>

```typescript
public resetColumnNames(): void
```

##### `resetColumnWildcard` <a name="resetColumnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetColumnWildcard"></a>

```typescript
public resetColumnWildcard(): void
```

##### `resetRowFilter` <a name="resetRowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetRowFilter"></a>

```typescript
public resetRowFilter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LakeformationDataCellsFilter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktn/provider-awscc'

lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktn/provider-awscc'

lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktn/provider-awscc'

lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktn/provider-awscc'

lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LakeformationDataCellsFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakeformationDataCellsFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakeformationDataCellsFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_data_cells_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LakeformationDataCellsFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnWildcard">columnWildcard</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference">LakeformationDataCellsFilterColumnWildcardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.rowFilter">rowFilter</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference">LakeformationDataCellsFilterRowFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnNamesInput">columnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnWildcardInput">columnWildcardInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.rowFilterInput">rowFilterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableCatalogIdInput">tableCatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnNames">columnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableCatalogId">tableCatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `columnWildcard`<sup>Required</sup> <a name="columnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnWildcard"></a>

```typescript
public readonly columnWildcard: LakeformationDataCellsFilterColumnWildcardOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference">LakeformationDataCellsFilterColumnWildcardOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rowFilter`<sup>Required</sup> <a name="rowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.rowFilter"></a>

```typescript
public readonly rowFilter: LakeformationDataCellsFilterRowFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference">LakeformationDataCellsFilterRowFilterOutputReference</a>

---

##### `columnNamesInput`<sup>Optional</sup> <a name="columnNamesInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnNamesInput"></a>

```typescript
public readonly columnNamesInput: string[];
```

- *Type:* string[]

---

##### `columnWildcardInput`<sup>Optional</sup> <a name="columnWildcardInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnWildcardInput"></a>

```typescript
public readonly columnWildcardInput: IResolvable | LakeformationDataCellsFilterColumnWildcard;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rowFilterInput`<sup>Optional</sup> <a name="rowFilterInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.rowFilterInput"></a>

```typescript
public readonly rowFilterInput: IResolvable | LakeformationDataCellsFilterRowFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a>

---

##### `tableCatalogIdInput`<sup>Optional</sup> <a name="tableCatalogIdInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableCatalogIdInput"></a>

```typescript
public readonly tableCatalogIdInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tableCatalogId`<sup>Required</sup> <a name="tableCatalogId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableCatalogId"></a>

```typescript
public readonly tableCatalogId: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationDataCellsFilterColumnWildcard <a name="LakeformationDataCellsFilterColumnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktn/provider-awscc'

const lakeformationDataCellsFilterColumnWildcard: lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard.property.excludedColumnNames">excludedColumnNames</a></code> | <code>string[]</code> | A list of column names to be excluded from the Data Cells Filter. |

---

##### `excludedColumnNames`<sup>Optional</sup> <a name="excludedColumnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard.property.excludedColumnNames"></a>

```typescript
public readonly excludedColumnNames: string[];
```

- *Type:* string[]

A list of column names to be excluded from the Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_data_cells_filter#excluded_column_names LakeformationDataCellsFilter#excluded_column_names}

---

### LakeformationDataCellsFilterConfig <a name="LakeformationDataCellsFilterConfig" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktn/provider-awscc'

const lakeformationDataCellsFilterConfig: lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the Database that the Table resides in. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.name">name</a></code> | <code>string</code> | The desired name of the Data Cells Filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableCatalogId">tableCatalogId</a></code> | <code>string</code> | The Catalog Id of the Table on which to create a Data Cells Filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableName">tableName</a></code> | <code>string</code> | The name of the Table to create a Data Cells Filter for. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.columnNames">columnNames</a></code> | <code>string[]</code> | A list of columns to be included in this Data Cells Filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.columnWildcard">columnWildcard</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a></code> | An object representing the Data Cells Filter's Columns. Either Column Names or a Wildcard is required. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.rowFilter">rowFilter</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a></code> | An object representing the Data Cells Filter's Row Filter. Either a Filter Expression or a Wildcard is required. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the Database that the Table resides in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_data_cells_filter#database_name LakeformationDataCellsFilter#database_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The desired name of the Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_data_cells_filter#name LakeformationDataCellsFilter#name}

---

##### `tableCatalogId`<sup>Required</sup> <a name="tableCatalogId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableCatalogId"></a>

```typescript
public readonly tableCatalogId: string;
```

- *Type:* string

The Catalog Id of the Table on which to create a Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_data_cells_filter#table_catalog_id LakeformationDataCellsFilter#table_catalog_id}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The name of the Table to create a Data Cells Filter for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_data_cells_filter#table_name LakeformationDataCellsFilter#table_name}

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

A list of columns to be included in this Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_data_cells_filter#column_names LakeformationDataCellsFilter#column_names}

---

##### `columnWildcard`<sup>Optional</sup> <a name="columnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.columnWildcard"></a>

```typescript
public readonly columnWildcard: LakeformationDataCellsFilterColumnWildcard;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a>

An object representing the Data Cells Filter's Columns. Either Column Names or a Wildcard is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_data_cells_filter#column_wildcard LakeformationDataCellsFilter#column_wildcard}

---

##### `rowFilter`<sup>Optional</sup> <a name="rowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.rowFilter"></a>

```typescript
public readonly rowFilter: LakeformationDataCellsFilterRowFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a>

An object representing the Data Cells Filter's Row Filter. Either a Filter Expression or a Wildcard is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_data_cells_filter#row_filter LakeformationDataCellsFilter#row_filter}

---

### LakeformationDataCellsFilterRowFilter <a name="LakeformationDataCellsFilterRowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktn/provider-awscc'

const lakeformationDataCellsFilterRowFilter: lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.property.allRowsWildcard">allRowsWildcard</a></code> | <code>string</code> | An empty object representing a row wildcard. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.property.filterExpression">filterExpression</a></code> | <code>string</code> | A PartiQL predicate. |

---

##### `allRowsWildcard`<sup>Optional</sup> <a name="allRowsWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.property.allRowsWildcard"></a>

```typescript
public readonly allRowsWildcard: string;
```

- *Type:* string

An empty object representing a row wildcard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_data_cells_filter#all_rows_wildcard LakeformationDataCellsFilter#all_rows_wildcard}

---

##### `filterExpression`<sup>Optional</sup> <a name="filterExpression" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.property.filterExpression"></a>

```typescript
public readonly filterExpression: string;
```

- *Type:* string

A PartiQL predicate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_data_cells_filter#filter_expression LakeformationDataCellsFilter#filter_expression}

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationDataCellsFilterColumnWildcardOutputReference <a name="LakeformationDataCellsFilterColumnWildcardOutputReference" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktn/provider-awscc'

new lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resetExcludedColumnNames">resetExcludedColumnNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludedColumnNames` <a name="resetExcludedColumnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resetExcludedColumnNames"></a>

```typescript
public resetExcludedColumnNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.excludedColumnNamesInput">excludedColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.excludedColumnNames">excludedColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludedColumnNamesInput`<sup>Optional</sup> <a name="excludedColumnNamesInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.excludedColumnNamesInput"></a>

```typescript
public readonly excludedColumnNamesInput: string[];
```

- *Type:* string[]

---

##### `excludedColumnNames`<sup>Required</sup> <a name="excludedColumnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.excludedColumnNames"></a>

```typescript
public readonly excludedColumnNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationDataCellsFilterColumnWildcard;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a>

---


### LakeformationDataCellsFilterRowFilterOutputReference <a name="LakeformationDataCellsFilterRowFilterOutputReference" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktn/provider-awscc'

new lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resetAllRowsWildcard">resetAllRowsWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resetFilterExpression">resetFilterExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllRowsWildcard` <a name="resetAllRowsWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resetAllRowsWildcard"></a>

```typescript
public resetAllRowsWildcard(): void
```

##### `resetFilterExpression` <a name="resetFilterExpression" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resetFilterExpression"></a>

```typescript
public resetFilterExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.allRowsWildcardInput">allRowsWildcardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.filterExpressionInput">filterExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.allRowsWildcard">allRowsWildcard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.filterExpression">filterExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allRowsWildcardInput`<sup>Optional</sup> <a name="allRowsWildcardInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.allRowsWildcardInput"></a>

```typescript
public readonly allRowsWildcardInput: string;
```

- *Type:* string

---

##### `filterExpressionInput`<sup>Optional</sup> <a name="filterExpressionInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.filterExpressionInput"></a>

```typescript
public readonly filterExpressionInput: string;
```

- *Type:* string

---

##### `allRowsWildcard`<sup>Required</sup> <a name="allRowsWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.allRowsWildcard"></a>

```typescript
public readonly allRowsWildcard: string;
```

- *Type:* string

---

##### `filterExpression`<sup>Required</sup> <a name="filterExpression" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.filterExpression"></a>

```typescript
public readonly filterExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationDataCellsFilterRowFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a>

---



