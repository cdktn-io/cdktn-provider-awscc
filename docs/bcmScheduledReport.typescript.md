# `bcmScheduledReport` Submodule <a name="`bcmScheduledReport` Submodule" id="@cdktn/provider-awscc.bcmScheduledReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BcmScheduledReport <a name="BcmScheduledReport" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report awscc_bcm_scheduled_report}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer"></a>

```typescript
import { bcmScheduledReport } from '@cdktn/provider-awscc'

new bcmScheduledReport.BcmScheduledReport(scope: Construct, id: string, config: BcmScheduledReportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig">BcmScheduledReportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig">BcmScheduledReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putScheduleConfig">putScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putWidgetDateRangeOverride">putWidgetDateRangeOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetWidgetDateRangeOverride">resetWidgetDateRangeOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetWidgetIds">resetWidgetIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putScheduleConfig` <a name="putScheduleConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putScheduleConfig"></a>

```typescript
public putScheduleConfig(value: BcmScheduledReportScheduleConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putScheduleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putTags"></a>

```typescript
public putTags(value: IResolvable | BcmScheduledReportTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>[]

---

##### `putWidgetDateRangeOverride` <a name="putWidgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putWidgetDateRangeOverride"></a>

```typescript
public putWidgetDateRangeOverride(value: BcmScheduledReportWidgetDateRangeOverride): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putWidgetDateRangeOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWidgetDateRangeOverride` <a name="resetWidgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetWidgetDateRangeOverride"></a>

```typescript
public resetWidgetDateRangeOverride(): void
```

##### `resetWidgetIds` <a name="resetWidgetIds" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetWidgetIds"></a>

```typescript
public resetWidgetIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BcmScheduledReport resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isConstruct"></a>

```typescript
import { bcmScheduledReport } from '@cdktn/provider-awscc'

bcmScheduledReport.BcmScheduledReport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformElement"></a>

```typescript
import { bcmScheduledReport } from '@cdktn/provider-awscc'

bcmScheduledReport.BcmScheduledReport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformResource"></a>

```typescript
import { bcmScheduledReport } from '@cdktn/provider-awscc'

bcmScheduledReport.BcmScheduledReport.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport"></a>

```typescript
import { bcmScheduledReport } from '@cdktn/provider-awscc'

bcmScheduledReport.BcmScheduledReport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BcmScheduledReport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BcmScheduledReport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BcmScheduledReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BcmScheduledReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.healthStatus">healthStatus</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference">BcmScheduledReportHealthStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduleConfig">scheduleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference">BcmScheduledReportScheduleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList">BcmScheduledReportTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetDateRangeOverride">widgetDateRangeOverride</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference">BcmScheduledReportWidgetDateRangeOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dashboardArnInput">dashboardArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduleConfigInput">scheduleConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduledReportExecutionRoleArnInput">scheduledReportExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetDateRangeOverrideInput">widgetDateRangeOverrideInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetIdsInput">widgetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dashboardArn">dashboardArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduledReportExecutionRoleArn">scheduledReportExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetIds">widgetIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `healthStatus`<sup>Required</sup> <a name="healthStatus" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.healthStatus"></a>

```typescript
public readonly healthStatus: BcmScheduledReportHealthStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference">BcmScheduledReportHealthStatusOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scheduleConfig`<sup>Required</sup> <a name="scheduleConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduleConfig"></a>

```typescript
public readonly scheduleConfig: BcmScheduledReportScheduleConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference">BcmScheduledReportScheduleConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tags"></a>

```typescript
public readonly tags: BcmScheduledReportTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList">BcmScheduledReportTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `widgetDateRangeOverride`<sup>Required</sup> <a name="widgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetDateRangeOverride"></a>

```typescript
public readonly widgetDateRangeOverride: BcmScheduledReportWidgetDateRangeOverrideOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference">BcmScheduledReportWidgetDateRangeOverrideOutputReference</a>

---

##### `dashboardArnInput`<sup>Optional</sup> <a name="dashboardArnInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dashboardArnInput"></a>

```typescript
public readonly dashboardArnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scheduleConfigInput`<sup>Optional</sup> <a name="scheduleConfigInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduleConfigInput"></a>

```typescript
public readonly scheduleConfigInput: IResolvable | BcmScheduledReportScheduleConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a>

---

##### `scheduledReportExecutionRoleArnInput`<sup>Optional</sup> <a name="scheduledReportExecutionRoleArnInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduledReportExecutionRoleArnInput"></a>

```typescript
public readonly scheduledReportExecutionRoleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | BcmScheduledReportTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>[]

---

##### `widgetDateRangeOverrideInput`<sup>Optional</sup> <a name="widgetDateRangeOverrideInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetDateRangeOverrideInput"></a>

```typescript
public readonly widgetDateRangeOverrideInput: IResolvable | BcmScheduledReportWidgetDateRangeOverride;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a>

---

##### `widgetIdsInput`<sup>Optional</sup> <a name="widgetIdsInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetIdsInput"></a>

```typescript
public readonly widgetIdsInput: string[];
```

- *Type:* string[]

---

##### `dashboardArn`<sup>Required</sup> <a name="dashboardArn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dashboardArn"></a>

```typescript
public readonly dashboardArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scheduledReportExecutionRoleArn`<sup>Required</sup> <a name="scheduledReportExecutionRoleArn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduledReportExecutionRoleArn"></a>

```typescript
public readonly scheduledReportExecutionRoleArn: string;
```

- *Type:* string

---

##### `widgetIds`<sup>Required</sup> <a name="widgetIds" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetIds"></a>

```typescript
public readonly widgetIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BcmScheduledReportConfig <a name="BcmScheduledReportConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.Initializer"></a>

```typescript
import { bcmScheduledReport } from '@cdktn/provider-awscc'

const bcmScheduledReportConfig: bcmScheduledReport.BcmScheduledReportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.dashboardArn">dashboardArn</a></code> | <code>string</code> | The ARN of the dashboard associated with the scheduled report. Managed dashboards cannot be used. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.name">name</a></code> | <code>string</code> | The name of the scheduled report. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.scheduleConfig">scheduleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a></code> | The schedule configuration that defines when and how often the report is generated. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.scheduledReportExecutionRoleArn">scheduledReportExecutionRoleArn</a></code> | <code>string</code> | The ARN of the IAM role that the scheduled report uses to execute. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.description">description</a></code> | <code>string</code> | A description of the scheduled report's purpose or contents. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>[]</code> | The tags applied to the scheduled report. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.widgetDateRangeOverride">widgetDateRangeOverride</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a></code> | The date range override applied to widgets in the scheduled report. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.widgetIds">widgetIds</a></code> | <code>string[]</code> | The list of widget identifiers included in the scheduled report. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dashboardArn`<sup>Required</sup> <a name="dashboardArn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.dashboardArn"></a>

```typescript
public readonly dashboardArn: string;
```

- *Type:* string

The ARN of the dashboard associated with the scheduled report. Managed dashboards cannot be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#dashboard_arn BcmScheduledReport#dashboard_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#name BcmScheduledReport#name}

---

##### `scheduleConfig`<sup>Required</sup> <a name="scheduleConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.scheduleConfig"></a>

```typescript
public readonly scheduleConfig: BcmScheduledReportScheduleConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a>

The schedule configuration that defines when and how often the report is generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_config BcmScheduledReport#schedule_config}

---

##### `scheduledReportExecutionRoleArn`<sup>Required</sup> <a name="scheduledReportExecutionRoleArn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.scheduledReportExecutionRoleArn"></a>

```typescript
public readonly scheduledReportExecutionRoleArn: string;
```

- *Type:* string

The ARN of the IAM role that the scheduled report uses to execute.

AWS Billing and Cost Management Dashboards assumes this IAM role while executing the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#scheduled_report_execution_role_arn BcmScheduledReport#scheduled_report_execution_role_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the scheduled report's purpose or contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#description BcmScheduledReport#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | BcmScheduledReportTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>[]

The tags applied to the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#tags BcmScheduledReport#tags}

---

##### `widgetDateRangeOverride`<sup>Optional</sup> <a name="widgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.widgetDateRangeOverride"></a>

```typescript
public readonly widgetDateRangeOverride: BcmScheduledReportWidgetDateRangeOverride;
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a>

The date range override applied to widgets in the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#widget_date_range_override BcmScheduledReport#widget_date_range_override}

---

##### `widgetIds`<sup>Optional</sup> <a name="widgetIds" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.widgetIds"></a>

```typescript
public readonly widgetIds: string[];
```

- *Type:* string[]

The list of widget identifiers included in the scheduled report.

If not specified, all widgets in the dashboard are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#widget_ids BcmScheduledReport#widget_ids}

---

### BcmScheduledReportHealthStatus <a name="BcmScheduledReportHealthStatus" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatus.Initializer"></a>

```typescript
import { bcmScheduledReport } from '@cdktn/provider-awscc'

const bcmScheduledReportHealthStatus: bcmScheduledReport.BcmScheduledReportHealthStatus = { ... }
```


### BcmScheduledReportScheduleConfig <a name="BcmScheduledReportScheduleConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.Initializer"></a>

```typescript
import { bcmScheduledReport } from '@cdktn/provider-awscc'

const bcmScheduledReportScheduleConfig: bcmScheduledReport.BcmScheduledReportScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | The schedule expression that specifies when to trigger the scheduled report run. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.scheduleExpressionTimeZone">scheduleExpressionTimeZone</a></code> | <code>string</code> | The time zone for the schedule expression, for example, UTC. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.schedulePeriod">schedulePeriod</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a></code> | The time period during which the schedule is active. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.state">state</a></code> | <code>string</code> | The state of the schedule. |

---

##### `scheduleExpression`<sup>Optional</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

The schedule expression that specifies when to trigger the scheduled report run.

This value must be a cron expression consisting of six fields separated by white spaces: cron(minutes hours day_of_month month day_of_week year).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_expression BcmScheduledReport#schedule_expression}

---

##### `scheduleExpressionTimeZone`<sup>Optional</sup> <a name="scheduleExpressionTimeZone" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.scheduleExpressionTimeZone"></a>

```typescript
public readonly scheduleExpressionTimeZone: string;
```

- *Type:* string

The time zone for the schedule expression, for example, UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_expression_time_zone BcmScheduledReport#schedule_expression_time_zone}

---

##### `schedulePeriod`<sup>Optional</sup> <a name="schedulePeriod" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.schedulePeriod"></a>

```typescript
public readonly schedulePeriod: BcmScheduledReportScheduleConfigSchedulePeriod;
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a>

The time period during which the schedule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_period BcmScheduledReport#schedule_period}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

The state of the schedule.

ENABLED means the scheduled report runs according to its schedule expression. DISABLED means the scheduled report is paused and will not run until re-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#state BcmScheduledReport#state}

---

### BcmScheduledReportScheduleConfigSchedulePeriod <a name="BcmScheduledReportScheduleConfigSchedulePeriod" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.Initializer"></a>

```typescript
import { bcmScheduledReport } from '@cdktn/provider-awscc'

const bcmScheduledReportScheduleConfigSchedulePeriod: bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.property.endTime">endTime</a></code> | <code>string</code> | The time at which the schedule stops being active. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.property.startTime">startTime</a></code> | <code>string</code> | The time at which the schedule becomes active. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

The time at which the schedule stops being active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#end_time BcmScheduledReport#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

The time at which the schedule becomes active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#start_time BcmScheduledReport#start_time}

---

### BcmScheduledReportTags <a name="BcmScheduledReportTags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.Initializer"></a>

```typescript
import { bcmScheduledReport } from '@cdktn/provider-awscc'

const bcmScheduledReportTags: bcmScheduledReport.BcmScheduledReportTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#key BcmScheduledReport#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#value BcmScheduledReport#value}

---

### BcmScheduledReportWidgetDateRangeOverride <a name="BcmScheduledReportWidgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.Initializer"></a>

```typescript
import { bcmScheduledReport } from '@cdktn/provider-awscc'

const bcmScheduledReportWidgetDateRangeOverride: bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.property.endTime">endTime</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a></code> | The end of the range. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a></code> | The start of the range. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.property.endTime"></a>

```typescript
public readonly endTime: BcmScheduledReportWidgetDateRangeOverrideEndTime;
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a>

The end of the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#end_time BcmScheduledReport#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.property.startTime"></a>

```typescript
public readonly startTime: BcmScheduledReportWidgetDateRangeOverrideStartTime;
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a>

The start of the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#start_time BcmScheduledReport#start_time}

---

### BcmScheduledReportWidgetDateRangeOverrideEndTime <a name="BcmScheduledReportWidgetDateRangeOverrideEndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.Initializer"></a>

```typescript
import { bcmScheduledReport } from '@cdktn/provider-awscc'

const bcmScheduledReportWidgetDateRangeOverrideEndTime: bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.property.type">type</a></code> | <code>string</code> | Whether Value is an absolute date or a duration relative to now. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.property.value">value</a></code> | <code>string</code> | The date, or an ISO 8601 duration when Type is RELATIVE. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Whether Value is an absolute date or a duration relative to now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#type BcmScheduledReport#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The date, or an ISO 8601 duration when Type is RELATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#value BcmScheduledReport#value}

---

### BcmScheduledReportWidgetDateRangeOverrideStartTime <a name="BcmScheduledReportWidgetDateRangeOverrideStartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.Initializer"></a>

```typescript
import { bcmScheduledReport } from '@cdktn/provider-awscc'

const bcmScheduledReportWidgetDateRangeOverrideStartTime: bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.property.type">type</a></code> | <code>string</code> | Whether Value is an absolute date or a duration relative to now. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.property.value">value</a></code> | <code>string</code> | The date, or an ISO 8601 duration when Type is RELATIVE. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Whether Value is an absolute date or a duration relative to now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#type BcmScheduledReport#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The date, or an ISO 8601 duration when Type is RELATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#value BcmScheduledReport#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BcmScheduledReportHealthStatusOutputReference <a name="BcmScheduledReportHealthStatusOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer"></a>

```typescript
import { bcmScheduledReport } from '@cdktn/provider-awscc'

new bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.lastRefreshedAt">lastRefreshedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatus">BcmScheduledReportHealthStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastRefreshedAt`<sup>Required</sup> <a name="lastRefreshedAt" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.lastRefreshedAt"></a>

```typescript
public readonly lastRefreshedAt: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BcmScheduledReportHealthStatus;
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatus">BcmScheduledReportHealthStatus</a>

---


### BcmScheduledReportScheduleConfigOutputReference <a name="BcmScheduledReportScheduleConfigOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer"></a>

```typescript
import { bcmScheduledReport } from '@cdktn/provider-awscc'

new bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.putSchedulePeriod">putSchedulePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetScheduleExpression">resetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetScheduleExpressionTimeZone">resetScheduleExpressionTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetSchedulePeriod">resetSchedulePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchedulePeriod` <a name="putSchedulePeriod" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.putSchedulePeriod"></a>

```typescript
public putSchedulePeriod(value: BcmScheduledReportScheduleConfigSchedulePeriod): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.putSchedulePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a>

---

##### `resetScheduleExpression` <a name="resetScheduleExpression" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetScheduleExpression"></a>

```typescript
public resetScheduleExpression(): void
```

##### `resetScheduleExpressionTimeZone` <a name="resetScheduleExpressionTimeZone" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetScheduleExpressionTimeZone"></a>

```typescript
public resetScheduleExpressionTimeZone(): void
```

##### `resetSchedulePeriod` <a name="resetSchedulePeriod" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetSchedulePeriod"></a>

```typescript
public resetSchedulePeriod(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetState"></a>

```typescript
public resetState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.schedulePeriod">schedulePeriod</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference">BcmScheduledReportScheduleConfigSchedulePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZoneInput">scheduleExpressionTimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.schedulePeriodInput">schedulePeriodInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZone">scheduleExpressionTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schedulePeriod`<sup>Required</sup> <a name="schedulePeriod" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.schedulePeriod"></a>

```typescript
public readonly schedulePeriod: BcmScheduledReportScheduleConfigSchedulePeriodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference">BcmScheduledReportScheduleConfigSchedulePeriodOutputReference</a>

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionInput"></a>

```typescript
public readonly scheduleExpressionInput: string;
```

- *Type:* string

---

##### `scheduleExpressionTimeZoneInput`<sup>Optional</sup> <a name="scheduleExpressionTimeZoneInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZoneInput"></a>

```typescript
public readonly scheduleExpressionTimeZoneInput: string;
```

- *Type:* string

---

##### `schedulePeriodInput`<sup>Optional</sup> <a name="schedulePeriodInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.schedulePeriodInput"></a>

```typescript
public readonly schedulePeriodInput: IResolvable | BcmScheduledReportScheduleConfigSchedulePeriod;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `scheduleExpressionTimeZone`<sup>Required</sup> <a name="scheduleExpressionTimeZone" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZone"></a>

```typescript
public readonly scheduleExpressionTimeZone: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BcmScheduledReportScheduleConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a>

---


### BcmScheduledReportScheduleConfigSchedulePeriodOutputReference <a name="BcmScheduledReportScheduleConfigSchedulePeriodOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer"></a>

```typescript
import { bcmScheduledReport } from '@cdktn/provider-awscc'

new bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BcmScheduledReportScheduleConfigSchedulePeriod;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a>

---


### BcmScheduledReportTagsList <a name="BcmScheduledReportTagsList" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer"></a>

```typescript
import { bcmScheduledReport } from '@cdktn/provider-awscc'

new bcmScheduledReport.BcmScheduledReportTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.get"></a>

```typescript
public get(index: number): BcmScheduledReportTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BcmScheduledReportTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>[]

---


### BcmScheduledReportTagsOutputReference <a name="BcmScheduledReportTagsOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer"></a>

```typescript
import { bcmScheduledReport } from '@cdktn/provider-awscc'

new bcmScheduledReport.BcmScheduledReportTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BcmScheduledReportTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>

---


### BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference <a name="BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer"></a>

```typescript
import { bcmScheduledReport } from '@cdktn/provider-awscc'

new bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BcmScheduledReportWidgetDateRangeOverrideEndTime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a>

---


### BcmScheduledReportWidgetDateRangeOverrideOutputReference <a name="BcmScheduledReportWidgetDateRangeOverrideOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer"></a>

```typescript
import { bcmScheduledReport } from '@cdktn/provider-awscc'

new bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putEndTime">putEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putStartTime">putStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndTime` <a name="putEndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putEndTime"></a>

```typescript
public putEndTime(value: BcmScheduledReportWidgetDateRangeOverrideEndTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putEndTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a>

---

##### `putStartTime` <a name="putStartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putStartTime"></a>

```typescript
public putStartTime(value: BcmScheduledReportWidgetDateRangeOverrideStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a>

---

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTime">endTime</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference">BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference">BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTime"></a>

```typescript
public readonly endTime: BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference">BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTime"></a>

```typescript
public readonly startTime: BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference">BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference</a>

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: IResolvable | BcmScheduledReportWidgetDateRangeOverrideEndTime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: IResolvable | BcmScheduledReportWidgetDateRangeOverrideStartTime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BcmScheduledReportWidgetDateRangeOverride;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a>

---


### BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference <a name="BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer"></a>

```typescript
import { bcmScheduledReport } from '@cdktn/provider-awscc'

new bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BcmScheduledReportWidgetDateRangeOverrideStartTime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a>

---



