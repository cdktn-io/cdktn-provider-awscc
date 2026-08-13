# `fisExperimentTemplate` Submodule <a name="`fisExperimentTemplate` Submodule" id="@cdktn/provider-awscc.fisExperimentTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FisExperimentTemplate <a name="FisExperimentTemplate" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template awscc_fis_experiment_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

new fisExperimentTemplate.FisExperimentTemplate(scope: Construct, id: string, config: FisExperimentTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig">FisExperimentTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig">FisExperimentTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentOptions">putExperimentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentReportConfiguration">putExperimentReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putLogConfiguration">putLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putStopConditions">putStopConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetExperimentOptions">resetExperimentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetExperimentReportConfiguration">resetExperimentReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetLogConfiguration">resetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActions` <a name="putActions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putActions"></a>

```typescript
public putActions(value: IResolvable | {[ key: string ]: FisExperimentTemplateActions}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>}

---

##### `putExperimentOptions` <a name="putExperimentOptions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentOptions"></a>

```typescript
public putExperimentOptions(value: FisExperimentTemplateExperimentOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a>

---

##### `putExperimentReportConfiguration` <a name="putExperimentReportConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentReportConfiguration"></a>

```typescript
public putExperimentReportConfiguration(value: FisExperimentTemplateExperimentReportConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentReportConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a>

---

##### `putLogConfiguration` <a name="putLogConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putLogConfiguration"></a>

```typescript
public putLogConfiguration(value: FisExperimentTemplateLogConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a>

---

##### `putStopConditions` <a name="putStopConditions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putStopConditions"></a>

```typescript
public putStopConditions(value: IResolvable | FisExperimentTemplateStopConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putStopConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>[]

---

##### `putTargets` <a name="putTargets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putTargets"></a>

```typescript
public putTargets(value: IResolvable | {[ key: string ]: FisExperimentTemplateTargets}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>}

---

##### `resetActions` <a name="resetActions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetExperimentOptions` <a name="resetExperimentOptions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetExperimentOptions"></a>

```typescript
public resetExperimentOptions(): void
```

##### `resetExperimentReportConfiguration` <a name="resetExperimentReportConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetExperimentReportConfiguration"></a>

```typescript
public resetExperimentReportConfiguration(): void
```

##### `resetLogConfiguration` <a name="resetLogConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetLogConfiguration"></a>

```typescript
public resetLogConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FisExperimentTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isConstruct"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

fisExperimentTemplate.FisExperimentTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isTerraformElement"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

fisExperimentTemplate.FisExperimentTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isTerraformResource"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

fisExperimentTemplate.FisExperimentTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FisExperimentTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FisExperimentTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FisExperimentTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FisExperimentTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap">FisExperimentTemplateActionsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentOptions">experimentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference">FisExperimentTemplateExperimentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentReportConfiguration">experimentReportConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentTemplateId">experimentTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference">FisExperimentTemplateLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.stopConditions">stopConditions</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList">FisExperimentTemplateStopConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap">FisExperimentTemplateTargetsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.actionsInput">actionsInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentOptionsInput">experimentOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentReportConfigurationInput">experimentReportConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.logConfigurationInput">logConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.stopConditionsInput">stopConditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.targetsInput">targetsInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.actions"></a>

```typescript
public readonly actions: FisExperimentTemplateActionsMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap">FisExperimentTemplateActionsMap</a>

---

##### `experimentOptions`<sup>Required</sup> <a name="experimentOptions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentOptions"></a>

```typescript
public readonly experimentOptions: FisExperimentTemplateExperimentOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference">FisExperimentTemplateExperimentOptionsOutputReference</a>

---

##### `experimentReportConfiguration`<sup>Required</sup> <a name="experimentReportConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentReportConfiguration"></a>

```typescript
public readonly experimentReportConfiguration: FisExperimentTemplateExperimentReportConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputReference</a>

---

##### `experimentTemplateId`<sup>Required</sup> <a name="experimentTemplateId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentTemplateId"></a>

```typescript
public readonly experimentTemplateId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: FisExperimentTemplateLogConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference">FisExperimentTemplateLogConfigurationOutputReference</a>

---

##### `stopConditions`<sup>Required</sup> <a name="stopConditions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.stopConditions"></a>

```typescript
public readonly stopConditions: FisExperimentTemplateStopConditionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList">FisExperimentTemplateStopConditionsList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.targets"></a>

```typescript
public readonly targets: FisExperimentTemplateTargetsMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap">FisExperimentTemplateTargetsMap</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | {[ key: string ]: FisExperimentTemplateActions};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `experimentOptionsInput`<sup>Optional</sup> <a name="experimentOptionsInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentOptionsInput"></a>

```typescript
public readonly experimentOptionsInput: IResolvable | FisExperimentTemplateExperimentOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a>

---

##### `experimentReportConfigurationInput`<sup>Optional</sup> <a name="experimentReportConfigurationInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentReportConfigurationInput"></a>

```typescript
public readonly experimentReportConfigurationInput: IResolvable | FisExperimentTemplateExperimentReportConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a>

---

##### `logConfigurationInput`<sup>Optional</sup> <a name="logConfigurationInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.logConfigurationInput"></a>

```typescript
public readonly logConfigurationInput: IResolvable | FisExperimentTemplateLogConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `stopConditionsInput`<sup>Optional</sup> <a name="stopConditionsInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.stopConditionsInput"></a>

```typescript
public readonly stopConditionsInput: IResolvable | FisExperimentTemplateStopConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.targetsInput"></a>

```typescript
public readonly targetsInput: IResolvable | {[ key: string ]: FisExperimentTemplateTargets};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FisExperimentTemplateActions <a name="FisExperimentTemplateActions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

const fisExperimentTemplateActions: fisExperimentTemplate.FisExperimentTemplateActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.actionId">actionId</a></code> | <code>string</code> | The ID of the action. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.description">description</a></code> | <code>string</code> | A description for the action. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | The parameters for the action, if applicable. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.startAfter">startAfter</a></code> | <code>string[]</code> | The names of the actions that must be completed before the current action starts. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.targets">targets</a></code> | <code>{[ key: string ]: string}</code> | One or more targets for the action. |

---

##### `actionId`<sup>Optional</sup> <a name="actionId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.actionId"></a>

```typescript
public readonly actionId: string;
```

- *Type:* string

The ID of the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#action_id FisExperimentTemplate#action_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#description FisExperimentTemplate#description}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The parameters for the action, if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#parameters FisExperimentTemplate#parameters}

---

##### `startAfter`<sup>Optional</sup> <a name="startAfter" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.startAfter"></a>

```typescript
public readonly startAfter: string[];
```

- *Type:* string[]

The names of the actions that must be completed before the current action starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#start_after FisExperimentTemplate#start_after}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.targets"></a>

```typescript
public readonly targets: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

One or more targets for the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#targets FisExperimentTemplate#targets}

---

### FisExperimentTemplateConfig <a name="FisExperimentTemplateConfig" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

const fisExperimentTemplateConfig: fisExperimentTemplate.FisExperimentTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.description">description</a></code> | <code>string</code> | A description for the experiment template. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.stopConditions">stopConditions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>[]</code> | One or more stop conditions. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.targets">targets</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>}</code> | The targets for the experiment. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.actions">actions</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>}</code> | The actions for the experiment. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.experimentOptions">experimentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_options FisExperimentTemplate#experiment_options}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.experimentReportConfiguration">experimentReportConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_report_configuration FisExperimentTemplate#experiment_report_configuration}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_configuration FisExperimentTemplate#log_configuration}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#tags FisExperimentTemplate#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the experiment template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#description FisExperimentTemplate#description}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#role_arn FisExperimentTemplate#role_arn}

---

##### `stopConditions`<sup>Required</sup> <a name="stopConditions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.stopConditions"></a>

```typescript
public readonly stopConditions: IResolvable | FisExperimentTemplateStopConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>[]

One or more stop conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#stop_conditions FisExperimentTemplate#stop_conditions}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.targets"></a>

```typescript
public readonly targets: IResolvable | {[ key: string ]: FisExperimentTemplateTargets};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>}

The targets for the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#targets FisExperimentTemplate#targets}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.actions"></a>

```typescript
public readonly actions: IResolvable | {[ key: string ]: FisExperimentTemplateActions};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>}

The actions for the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#actions FisExperimentTemplate#actions}

---

##### `experimentOptions`<sup>Optional</sup> <a name="experimentOptions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.experimentOptions"></a>

```typescript
public readonly experimentOptions: FisExperimentTemplateExperimentOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_options FisExperimentTemplate#experiment_options}.

---

##### `experimentReportConfiguration`<sup>Optional</sup> <a name="experimentReportConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.experimentReportConfiguration"></a>

```typescript
public readonly experimentReportConfiguration: FisExperimentTemplateExperimentReportConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_report_configuration FisExperimentTemplate#experiment_report_configuration}.

---

##### `logConfiguration`<sup>Optional</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: FisExperimentTemplateLogConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_configuration FisExperimentTemplate#log_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#tags FisExperimentTemplate#tags}.

---

### FisExperimentTemplateExperimentOptions <a name="FisExperimentTemplateExperimentOptions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

const fisExperimentTemplateExperimentOptions: fisExperimentTemplate.FisExperimentTemplateExperimentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.property.accountTargeting">accountTargeting</a></code> | <code>string</code> | The account targeting setting for the experiment template. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.property.emptyTargetResolutionMode">emptyTargetResolutionMode</a></code> | <code>string</code> | The target resolution failure mode for the experiment template. |

---

##### `accountTargeting`<sup>Optional</sup> <a name="accountTargeting" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.property.accountTargeting"></a>

```typescript
public readonly accountTargeting: string;
```

- *Type:* string

The account targeting setting for the experiment template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#account_targeting FisExperimentTemplate#account_targeting}

---

##### `emptyTargetResolutionMode`<sup>Optional</sup> <a name="emptyTargetResolutionMode" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.property.emptyTargetResolutionMode"></a>

```typescript
public readonly emptyTargetResolutionMode: string;
```

- *Type:* string

The target resolution failure mode for the experiment template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#empty_target_resolution_mode FisExperimentTemplate#empty_target_resolution_mode}

---

### FisExperimentTemplateExperimentReportConfiguration <a name="FisExperimentTemplateExperimentReportConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

const fisExperimentTemplateExperimentReportConfiguration: fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.dataSources">dataSources</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#data_sources FisExperimentTemplate#data_sources}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#outputs FisExperimentTemplate#outputs}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.postExperimentDuration">postExperimentDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#post_experiment_duration FisExperimentTemplate#post_experiment_duration}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.preExperimentDuration">preExperimentDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#pre_experiment_duration FisExperimentTemplate#pre_experiment_duration}. |

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.dataSources"></a>

```typescript
public readonly dataSources: FisExperimentTemplateExperimentReportConfigurationDataSources;
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#data_sources FisExperimentTemplate#data_sources}.

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.outputs"></a>

```typescript
public readonly outputs: FisExperimentTemplateExperimentReportConfigurationOutputs;
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#outputs FisExperimentTemplate#outputs}.

---

##### `postExperimentDuration`<sup>Optional</sup> <a name="postExperimentDuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.postExperimentDuration"></a>

```typescript
public readonly postExperimentDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#post_experiment_duration FisExperimentTemplate#post_experiment_duration}.

---

##### `preExperimentDuration`<sup>Optional</sup> <a name="preExperimentDuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.preExperimentDuration"></a>

```typescript
public readonly preExperimentDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#pre_experiment_duration FisExperimentTemplate#pre_experiment_duration}.

---

### FisExperimentTemplateExperimentReportConfigurationDataSources <a name="FisExperimentTemplateExperimentReportConfigurationDataSources" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

const fisExperimentTemplateExperimentReportConfigurationDataSources: fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources.property.cloudwatchDashboards">cloudwatchDashboards</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#cloudwatch_dashboards FisExperimentTemplate#cloudwatch_dashboards}. |

---

##### `cloudwatchDashboards`<sup>Optional</sup> <a name="cloudwatchDashboards" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources.property.cloudwatchDashboards"></a>

```typescript
public readonly cloudwatchDashboards: IResolvable | FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#cloudwatch_dashboards FisExperimentTemplate#cloudwatch_dashboards}.

---

### FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards <a name="FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

const fisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards: fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards.property.dashboardIdentifier">dashboardIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#dashboard_identifier FisExperimentTemplate#dashboard_identifier}. |

---

##### `dashboardIdentifier`<sup>Optional</sup> <a name="dashboardIdentifier" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards.property.dashboardIdentifier"></a>

```typescript
public readonly dashboardIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#dashboard_identifier FisExperimentTemplate#dashboard_identifier}.

---

### FisExperimentTemplateExperimentReportConfigurationOutputs <a name="FisExperimentTemplateExperimentReportConfigurationOutputs" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

const fisExperimentTemplateExperimentReportConfigurationOutputs: fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs.property.experimentReportS3Configuration">experimentReportS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_report_s3_configuration FisExperimentTemplate#experiment_report_s3_configuration}. |

---

##### `experimentReportS3Configuration`<sup>Optional</sup> <a name="experimentReportS3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs.property.experimentReportS3Configuration"></a>

```typescript
public readonly experimentReportS3Configuration: FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration;
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_report_s3_configuration FisExperimentTemplate#experiment_report_s3_configuration}.

---

### FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration <a name="FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

const fisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration: fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}.

---

### FisExperimentTemplateLogConfiguration <a name="FisExperimentTemplateLogConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

const fisExperimentTemplateLogConfiguration: fisExperimentTemplate.FisExperimentTemplateLogConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.cloudwatchLogsConfiguration">cloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#cloudwatch_logs_configuration FisExperimentTemplate#cloudwatch_logs_configuration}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.logSchemaVersion">logSchemaVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_schema_version FisExperimentTemplate#log_schema_version}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#s3_configuration FisExperimentTemplate#s3_configuration}. |

---

##### `cloudwatchLogsConfiguration`<sup>Optional</sup> <a name="cloudwatchLogsConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.cloudwatchLogsConfiguration"></a>

```typescript
public readonly cloudwatchLogsConfiguration: FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#cloudwatch_logs_configuration FisExperimentTemplate#cloudwatch_logs_configuration}.

---

##### `logSchemaVersion`<sup>Optional</sup> <a name="logSchemaVersion" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.logSchemaVersion"></a>

```typescript
public readonly logSchemaVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_schema_version FisExperimentTemplate#log_schema_version}.

---

##### `s3Configuration`<sup>Optional</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.s3Configuration"></a>

```typescript
public readonly s3Configuration: FisExperimentTemplateLogConfigurationS3Configuration;
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#s3_configuration FisExperimentTemplate#s3_configuration}.

---

### FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration <a name="FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

const fisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration: fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_group_arn FisExperimentTemplate#log_group_arn}. |

---

##### `logGroupArn`<sup>Optional</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_group_arn FisExperimentTemplate#log_group_arn}.

---

### FisExperimentTemplateLogConfigurationS3Configuration <a name="FisExperimentTemplateLogConfigurationS3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

const fisExperimentTemplateLogConfigurationS3Configuration: fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}.

---

### FisExperimentTemplateStopConditions <a name="FisExperimentTemplateStopConditions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

const fisExperimentTemplateStopConditions: fisExperimentTemplate.FisExperimentTemplateStopConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#source FisExperimentTemplate#source}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#source FisExperimentTemplate#source}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}.

---

### FisExperimentTemplateTargets <a name="FisExperimentTemplateTargets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

const fisExperimentTemplateTargets: fisExperimentTemplate.FisExperimentTemplateTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.filters">filters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#filters FisExperimentTemplate#filters}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#parameters FisExperimentTemplate#parameters}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.resourceArns">resourceArns</a></code> | <code>string[]</code> | The Amazon Resource Names (ARNs) of the target resources. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.resourceTags">resourceTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#resource_tags FisExperimentTemplate#resource_tags}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.resourceType">resourceType</a></code> | <code>string</code> | The AWS resource type. The resource type must be supported for the specified action. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.selectionMode">selectionMode</a></code> | <code>string</code> | Scopes the identified resources to a specific number of the resources at random, or a percentage of the resources. |

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.filters"></a>

```typescript
public readonly filters: IResolvable | FisExperimentTemplateTargetsFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#filters FisExperimentTemplate#filters}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#parameters FisExperimentTemplate#parameters}.

---

##### `resourceArns`<sup>Optional</sup> <a name="resourceArns" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.resourceArns"></a>

```typescript
public readonly resourceArns: string[];
```

- *Type:* string[]

The Amazon Resource Names (ARNs) of the target resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#resource_arns FisExperimentTemplate#resource_arns}

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.resourceTags"></a>

```typescript
public readonly resourceTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#resource_tags FisExperimentTemplate#resource_tags}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The AWS resource type. The resource type must be supported for the specified action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#resource_type FisExperimentTemplate#resource_type}

---

##### `selectionMode`<sup>Optional</sup> <a name="selectionMode" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.selectionMode"></a>

```typescript
public readonly selectionMode: string;
```

- *Type:* string

Scopes the identified resources to a specific number of the resources at random, or a percentage of the resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#selection_mode FisExperimentTemplate#selection_mode}

---

### FisExperimentTemplateTargetsFilters <a name="FisExperimentTemplateTargetsFilters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

const fisExperimentTemplateTargetsFilters: fisExperimentTemplate.FisExperimentTemplateTargetsFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters.property.path">path</a></code> | <code>string</code> | The attribute path for the filter. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters.property.values">values</a></code> | <code>string[]</code> | The attribute values for the filter. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The attribute path for the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#path FisExperimentTemplate#path}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The attribute values for the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#values FisExperimentTemplate#values}

---

## Classes <a name="Classes" id="Classes"></a>

### FisExperimentTemplateActionsMap <a name="FisExperimentTemplateActionsMap" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

new fisExperimentTemplate.FisExperimentTemplateActionsMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.get"></a>

```typescript
public get(key: string): FisExperimentTemplateActionsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: FisExperimentTemplateActions};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>}

---


### FisExperimentTemplateActionsOutputReference <a name="FisExperimentTemplateActionsOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

new fisExperimentTemplate.FisExperimentTemplateActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetActionId">resetActionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetStartAfter">resetStartAfter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetTargets">resetTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionId` <a name="resetActionId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetActionId"></a>

```typescript
public resetActionId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetStartAfter` <a name="resetStartAfter" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetStartAfter"></a>

```typescript
public resetStartAfter(): void
```

##### `resetTargets` <a name="resetTargets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetTargets"></a>

```typescript
public resetTargets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.actionIdInput">actionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.startAfterInput">startAfterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.targetsInput">targetsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.actionId">actionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.startAfter">startAfter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.targets">targets</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionIdInput`<sup>Optional</sup> <a name="actionIdInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.actionIdInput"></a>

```typescript
public readonly actionIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `startAfterInput`<sup>Optional</sup> <a name="startAfterInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.startAfterInput"></a>

```typescript
public readonly startAfterInput: string[];
```

- *Type:* string[]

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.targetsInput"></a>

```typescript
public readonly targetsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.actionId"></a>

```typescript
public readonly actionId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `startAfter`<sup>Required</sup> <a name="startAfter" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.startAfter"></a>

```typescript
public readonly startAfter: string[];
```

- *Type:* string[]

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.targets"></a>

```typescript
public readonly targets: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>

---


### FisExperimentTemplateExperimentOptionsOutputReference <a name="FisExperimentTemplateExperimentOptionsOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

new fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resetAccountTargeting">resetAccountTargeting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resetEmptyTargetResolutionMode">resetEmptyTargetResolutionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountTargeting` <a name="resetAccountTargeting" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resetAccountTargeting"></a>

```typescript
public resetAccountTargeting(): void
```

##### `resetEmptyTargetResolutionMode` <a name="resetEmptyTargetResolutionMode" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resetEmptyTargetResolutionMode"></a>

```typescript
public resetEmptyTargetResolutionMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.accountTargetingInput">accountTargetingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionModeInput">emptyTargetResolutionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.accountTargeting">accountTargeting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionMode">emptyTargetResolutionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountTargetingInput`<sup>Optional</sup> <a name="accountTargetingInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.accountTargetingInput"></a>

```typescript
public readonly accountTargetingInput: string;
```

- *Type:* string

---

##### `emptyTargetResolutionModeInput`<sup>Optional</sup> <a name="emptyTargetResolutionModeInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionModeInput"></a>

```typescript
public readonly emptyTargetResolutionModeInput: string;
```

- *Type:* string

---

##### `accountTargeting`<sup>Required</sup> <a name="accountTargeting" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.accountTargeting"></a>

```typescript
public readonly accountTargeting: string;
```

- *Type:* string

---

##### `emptyTargetResolutionMode`<sup>Required</sup> <a name="emptyTargetResolutionMode" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionMode"></a>

```typescript
public readonly emptyTargetResolutionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateExperimentOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a>

---


### FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList <a name="FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

new fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.get"></a>

```typescript
public get(index: number): FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>[]

---


### FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

new fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.resetDashboardIdentifier">resetDashboardIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDashboardIdentifier` <a name="resetDashboardIdentifier" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.resetDashboardIdentifier"></a>

```typescript
public resetDashboardIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.dashboardIdentifierInput">dashboardIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.dashboardIdentifier">dashboardIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dashboardIdentifierInput`<sup>Optional</sup> <a name="dashboardIdentifierInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.dashboardIdentifierInput"></a>

```typescript
public readonly dashboardIdentifierInput: string;
```

- *Type:* string

---

##### `dashboardIdentifier`<sup>Required</sup> <a name="dashboardIdentifier" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.dashboardIdentifier"></a>

```typescript
public readonly dashboardIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>

---


### FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

new fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.putCloudwatchDashboards">putCloudwatchDashboards</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resetCloudwatchDashboards">resetCloudwatchDashboards</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchDashboards` <a name="putCloudwatchDashboards" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.putCloudwatchDashboards"></a>

```typescript
public putCloudwatchDashboards(value: IResolvable | FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.putCloudwatchDashboards.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>[]

---

##### `resetCloudwatchDashboards` <a name="resetCloudwatchDashboards" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resetCloudwatchDashboards"></a>

```typescript
public resetCloudwatchDashboards(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboards">cloudwatchDashboards</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboardsInput">cloudwatchDashboardsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchDashboards`<sup>Required</sup> <a name="cloudwatchDashboards" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboards"></a>

```typescript
public readonly cloudwatchDashboards: FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList</a>

---

##### `cloudwatchDashboardsInput`<sup>Optional</sup> <a name="cloudwatchDashboardsInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboardsInput"></a>

```typescript
public readonly cloudwatchDashboardsInput: IResolvable | FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateExperimentReportConfigurationDataSources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a>

---


### FisExperimentTemplateExperimentReportConfigurationOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

new fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putDataSources">putDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putOutputs">putOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetDataSources">resetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetOutputs">resetOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetPostExperimentDuration">resetPostExperimentDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetPreExperimentDuration">resetPreExperimentDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataSources` <a name="putDataSources" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putDataSources"></a>

```typescript
public putDataSources(value: FisExperimentTemplateExperimentReportConfigurationDataSources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putDataSources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a>

---

##### `putOutputs` <a name="putOutputs" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putOutputs"></a>

```typescript
public putOutputs(value: FisExperimentTemplateExperimentReportConfigurationOutputs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putOutputs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a>

---

##### `resetDataSources` <a name="resetDataSources" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetDataSources"></a>

```typescript
public resetDataSources(): void
```

##### `resetOutputs` <a name="resetOutputs" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetOutputs"></a>

```typescript
public resetOutputs(): void
```

##### `resetPostExperimentDuration` <a name="resetPostExperimentDuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetPostExperimentDuration"></a>

```typescript
public resetPostExperimentDuration(): void
```

##### `resetPreExperimentDuration` <a name="resetPreExperimentDuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetPreExperimentDuration"></a>

```typescript
public resetPreExperimentDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSources">dataSources</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference">FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSourcesInput">dataSourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputsInput">outputsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDurationInput">postExperimentDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDurationInput">preExperimentDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDuration">postExperimentDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDuration">preExperimentDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSources"></a>

```typescript
public readonly dataSources: FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference">FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference</a>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputs"></a>

```typescript
public readonly outputs: FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference</a>

---

##### `dataSourcesInput`<sup>Optional</sup> <a name="dataSourcesInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSourcesInput"></a>

```typescript
public readonly dataSourcesInput: IResolvable | FisExperimentTemplateExperimentReportConfigurationDataSources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a>

---

##### `outputsInput`<sup>Optional</sup> <a name="outputsInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputsInput"></a>

```typescript
public readonly outputsInput: IResolvable | FisExperimentTemplateExperimentReportConfigurationOutputs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a>

---

##### `postExperimentDurationInput`<sup>Optional</sup> <a name="postExperimentDurationInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDurationInput"></a>

```typescript
public readonly postExperimentDurationInput: string;
```

- *Type:* string

---

##### `preExperimentDurationInput`<sup>Optional</sup> <a name="preExperimentDurationInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDurationInput"></a>

```typescript
public readonly preExperimentDurationInput: string;
```

- *Type:* string

---

##### `postExperimentDuration`<sup>Required</sup> <a name="postExperimentDuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDuration"></a>

```typescript
public readonly postExperimentDuration: string;
```

- *Type:* string

---

##### `preExperimentDuration`<sup>Required</sup> <a name="preExperimentDuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDuration"></a>

```typescript
public readonly preExperimentDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateExperimentReportConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a>

---


### FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

new fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a>

---


### FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

new fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.putExperimentReportS3Configuration">putExperimentReportS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resetExperimentReportS3Configuration">resetExperimentReportS3Configuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExperimentReportS3Configuration` <a name="putExperimentReportS3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.putExperimentReportS3Configuration"></a>

```typescript
public putExperimentReportS3Configuration(value: FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.putExperimentReportS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a>

---

##### `resetExperimentReportS3Configuration` <a name="resetExperimentReportS3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resetExperimentReportS3Configuration"></a>

```typescript
public resetExperimentReportS3Configuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.experimentReportS3Configuration">experimentReportS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.experimentReportS3ConfigurationInput">experimentReportS3ConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `experimentReportS3Configuration`<sup>Required</sup> <a name="experimentReportS3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.experimentReportS3Configuration"></a>

```typescript
public readonly experimentReportS3Configuration: FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference</a>

---

##### `experimentReportS3ConfigurationInput`<sup>Optional</sup> <a name="experimentReportS3ConfigurationInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.experimentReportS3ConfigurationInput"></a>

```typescript
public readonly experimentReportS3ConfigurationInput: IResolvable | FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateExperimentReportConfigurationOutputs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a>

---


### FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference <a name="FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

new fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resetLogGroupArn">resetLogGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroupArn` <a name="resetLogGroupArn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resetLogGroupArn"></a>

```typescript
public resetLogGroupArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArnInput"></a>

```typescript
public readonly logGroupArnInput: string;
```

- *Type:* string

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

---


### FisExperimentTemplateLogConfigurationOutputReference <a name="FisExperimentTemplateLogConfigurationOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

new fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putCloudwatchLogsConfiguration">putCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putS3Configuration">putS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetCloudwatchLogsConfiguration">resetCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetLogSchemaVersion">resetLogSchemaVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetS3Configuration">resetS3Configuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogsConfiguration` <a name="putCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putCloudwatchLogsConfiguration"></a>

```typescript
public putCloudwatchLogsConfiguration(value: FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putCloudwatchLogsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

---

##### `putS3Configuration` <a name="putS3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putS3Configuration"></a>

```typescript
public putS3Configuration(value: FisExperimentTemplateLogConfigurationS3Configuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a>

---

##### `resetCloudwatchLogsConfiguration` <a name="resetCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetCloudwatchLogsConfiguration"></a>

```typescript
public resetCloudwatchLogsConfiguration(): void
```

##### `resetLogSchemaVersion` <a name="resetLogSchemaVersion" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetLogSchemaVersion"></a>

```typescript
public resetLogSchemaVersion(): void
```

##### `resetS3Configuration` <a name="resetS3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetS3Configuration"></a>

```typescript
public resetS3Configuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfiguration">cloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference">FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference">FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfigurationInput">cloudwatchLogsConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersionInput">logSchemaVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.s3ConfigurationInput">s3ConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersion">logSchemaVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogsConfiguration`<sup>Required</sup> <a name="cloudwatchLogsConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfiguration"></a>

```typescript
public readonly cloudwatchLogsConfiguration: FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference">FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference</a>

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.s3Configuration"></a>

```typescript
public readonly s3Configuration: FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference">FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference</a>

---

##### `cloudwatchLogsConfigurationInput`<sup>Optional</sup> <a name="cloudwatchLogsConfigurationInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfigurationInput"></a>

```typescript
public readonly cloudwatchLogsConfigurationInput: IResolvable | FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

---

##### `logSchemaVersionInput`<sup>Optional</sup> <a name="logSchemaVersionInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersionInput"></a>

```typescript
public readonly logSchemaVersionInput: number;
```

- *Type:* number

---

##### `s3ConfigurationInput`<sup>Optional</sup> <a name="s3ConfigurationInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.s3ConfigurationInput"></a>

```typescript
public readonly s3ConfigurationInput: IResolvable | FisExperimentTemplateLogConfigurationS3Configuration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a>

---

##### `logSchemaVersion`<sup>Required</sup> <a name="logSchemaVersion" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersion"></a>

```typescript
public readonly logSchemaVersion: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateLogConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a>

---


### FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference <a name="FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

new fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateLogConfigurationS3Configuration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a>

---


### FisExperimentTemplateStopConditionsList <a name="FisExperimentTemplateStopConditionsList" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

new fisExperimentTemplate.FisExperimentTemplateStopConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.get"></a>

```typescript
public get(index: number): FisExperimentTemplateStopConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateStopConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>[]

---


### FisExperimentTemplateStopConditionsOutputReference <a name="FisExperimentTemplateStopConditionsOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

new fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateStopConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>

---


### FisExperimentTemplateTargetsFiltersList <a name="FisExperimentTemplateTargetsFiltersList" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

new fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.get"></a>

```typescript
public get(index: number): FisExperimentTemplateTargetsFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateTargetsFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>[]

---


### FisExperimentTemplateTargetsFiltersOutputReference <a name="FisExperimentTemplateTargetsFiltersOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

new fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateTargetsFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>

---


### FisExperimentTemplateTargetsMap <a name="FisExperimentTemplateTargetsMap" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

new fisExperimentTemplate.FisExperimentTemplateTargetsMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.get"></a>

```typescript
public get(key: string): FisExperimentTemplateTargetsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: FisExperimentTemplateTargets};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>}

---


### FisExperimentTemplateTargetsOutputReference <a name="FisExperimentTemplateTargetsOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktn/provider-awscc'

new fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetResourceArns">resetResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetResourceTags">resetResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetSelectionMode">resetSelectionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilters` <a name="putFilters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.putFilters"></a>

```typescript
public putFilters(value: IResolvable | FisExperimentTemplateTargetsFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.putFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>[]

---

##### `resetFilters` <a name="resetFilters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetFilters"></a>

```typescript
public resetFilters(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetResourceArns` <a name="resetResourceArns" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetResourceArns"></a>

```typescript
public resetResourceArns(): void
```

##### `resetResourceTags` <a name="resetResourceTags" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetResourceTags"></a>

```typescript
public resetResourceTags(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetSelectionMode` <a name="resetSelectionMode" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetSelectionMode"></a>

```typescript
public resetSelectionMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList">FisExperimentTemplateTargetsFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.filtersInput">filtersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceArnsInput">resourceArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceTagsInput">resourceTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.selectionModeInput">selectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceArns">resourceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceTags">resourceTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.selectionMode">selectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.filters"></a>

```typescript
public readonly filters: FisExperimentTemplateTargetsFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList">FisExperimentTemplateTargetsFiltersList</a>

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.filtersInput"></a>

```typescript
public readonly filtersInput: IResolvable | FisExperimentTemplateTargetsFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>[]

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceArnsInput`<sup>Optional</sup> <a name="resourceArnsInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceArnsInput"></a>

```typescript
public readonly resourceArnsInput: string[];
```

- *Type:* string[]

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceTagsInput"></a>

```typescript
public readonly resourceTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `selectionModeInput`<sup>Optional</sup> <a name="selectionModeInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.selectionModeInput"></a>

```typescript
public readonly selectionModeInput: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceArns`<sup>Required</sup> <a name="resourceArns" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceArns"></a>

```typescript
public readonly resourceArns: string[];
```

- *Type:* string[]

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceTags"></a>

```typescript
public readonly resourceTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `selectionMode`<sup>Required</sup> <a name="selectionMode" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.selectionMode"></a>

```typescript
public readonly selectionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateTargets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>

---



