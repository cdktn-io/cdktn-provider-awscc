# `sagemakerDataQualityJobDefinition` Submodule <a name="`sagemakerDataQualityJobDefinition` Submodule" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerDataQualityJobDefinition <a name="SagemakerDataQualityJobDefinition" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition awscc_sagemaker_data_quality_job_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition(scope: Construct, id: string, config: SagemakerDataQualityJobDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig">SagemakerDataQualityJobDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig">SagemakerDataQualityJobDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityAppSpecification">putDataQualityAppSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityBaselineConfig">putDataQualityBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobInput">putDataQualityJobInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobOutputConfig">putDataQualityJobOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putJobResources">putJobResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putStoppingCondition">putStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetDataQualityBaselineConfig">resetDataQualityBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetEndpointName">resetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetJobDefinitionName">resetJobDefinitionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetStoppingCondition">resetStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataQualityAppSpecification` <a name="putDataQualityAppSpecification" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityAppSpecification"></a>

```typescript
public putDataQualityAppSpecification(value: SagemakerDataQualityJobDefinitionDataQualityAppSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityAppSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a>

---

##### `putDataQualityBaselineConfig` <a name="putDataQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityBaselineConfig"></a>

```typescript
public putDataQualityBaselineConfig(value: SagemakerDataQualityJobDefinitionDataQualityBaselineConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityBaselineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a>

---

##### `putDataQualityJobInput` <a name="putDataQualityJobInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobInput"></a>

```typescript
public putDataQualityJobInput(value: SagemakerDataQualityJobDefinitionDataQualityJobInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a>

---

##### `putDataQualityJobOutputConfig` <a name="putDataQualityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobOutputConfig"></a>

```typescript
public putDataQualityJobOutputConfig(value: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a>

---

##### `putJobResources` <a name="putJobResources" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putJobResources"></a>

```typescript
public putJobResources(value: SagemakerDataQualityJobDefinitionJobResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putJobResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putNetworkConfig"></a>

```typescript
public putNetworkConfig(value: SagemakerDataQualityJobDefinitionNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a>

---

##### `putStoppingCondition` <a name="putStoppingCondition" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putStoppingCondition"></a>

```typescript
public putStoppingCondition(value: SagemakerDataQualityJobDefinitionStoppingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putStoppingCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putTags"></a>

```typescript
public putTags(value: IResolvable | SagemakerDataQualityJobDefinitionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags">SagemakerDataQualityJobDefinitionTags</a>[]

---

##### `resetDataQualityBaselineConfig` <a name="resetDataQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetDataQualityBaselineConfig"></a>

```typescript
public resetDataQualityBaselineConfig(): void
```

##### `resetEndpointName` <a name="resetEndpointName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetEndpointName"></a>

```typescript
public resetEndpointName(): void
```

##### `resetJobDefinitionName` <a name="resetJobDefinitionName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetJobDefinitionName"></a>

```typescript
public resetJobDefinitionName(): void
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetNetworkConfig"></a>

```typescript
public resetNetworkConfig(): void
```

##### `resetStoppingCondition` <a name="resetStoppingCondition" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetStoppingCondition"></a>

```typescript
public resetStoppingCondition(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerDataQualityJobDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isConstruct"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformElement"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformResource"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SagemakerDataQualityJobDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerDataQualityJobDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerDataQualityJobDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerDataQualityJobDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityAppSpecification">dataQualityAppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference">SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityBaselineConfig">dataQualityBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobInput">dataQualityJobInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobOutputConfig">dataQualityJobOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobDefinitionArn">jobDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobResources">jobResources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference">SagemakerDataQualityJobDefinitionJobResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference">SagemakerDataQualityJobDefinitionNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.stoppingCondition">stoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference">SagemakerDataQualityJobDefinitionStoppingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList">SagemakerDataQualityJobDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityAppSpecificationInput">dataQualityAppSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityBaselineConfigInput">dataQualityBaselineConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobInputInput">dataQualityJobInputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobOutputConfigInput">dataQualityJobOutputConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.endpointNameInput">endpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobDefinitionNameInput">jobDefinitionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobResourcesInput">jobResourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.networkConfigInput">networkConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.stoppingConditionInput">stoppingConditionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags">SagemakerDataQualityJobDefinitionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobDefinitionName">jobDefinitionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `dataQualityAppSpecification`<sup>Required</sup> <a name="dataQualityAppSpecification" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityAppSpecification"></a>

```typescript
public readonly dataQualityAppSpecification: SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference">SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference</a>

---

##### `dataQualityBaselineConfig`<sup>Required</sup> <a name="dataQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityBaselineConfig"></a>

```typescript
public readonly dataQualityBaselineConfig: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference</a>

---

##### `dataQualityJobInput`<sup>Required</sup> <a name="dataQualityJobInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobInput"></a>

```typescript
public readonly dataQualityJobInput: SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference</a>

---

##### `dataQualityJobOutputConfig`<sup>Required</sup> <a name="dataQualityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobOutputConfig"></a>

```typescript
public readonly dataQualityJobOutputConfig: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jobDefinitionArn`<sup>Required</sup> <a name="jobDefinitionArn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobDefinitionArn"></a>

```typescript
public readonly jobDefinitionArn: string;
```

- *Type:* string

---

##### `jobResources`<sup>Required</sup> <a name="jobResources" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobResources"></a>

```typescript
public readonly jobResources: SagemakerDataQualityJobDefinitionJobResourcesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference">SagemakerDataQualityJobDefinitionJobResourcesOutputReference</a>

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.networkConfig"></a>

```typescript
public readonly networkConfig: SagemakerDataQualityJobDefinitionNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference">SagemakerDataQualityJobDefinitionNetworkConfigOutputReference</a>

---

##### `stoppingCondition`<sup>Required</sup> <a name="stoppingCondition" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.stoppingCondition"></a>

```typescript
public readonly stoppingCondition: SagemakerDataQualityJobDefinitionStoppingConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference">SagemakerDataQualityJobDefinitionStoppingConditionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tags"></a>

```typescript
public readonly tags: SagemakerDataQualityJobDefinitionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList">SagemakerDataQualityJobDefinitionTagsList</a>

---

##### `dataQualityAppSpecificationInput`<sup>Optional</sup> <a name="dataQualityAppSpecificationInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityAppSpecificationInput"></a>

```typescript
public readonly dataQualityAppSpecificationInput: IResolvable | SagemakerDataQualityJobDefinitionDataQualityAppSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a>

---

##### `dataQualityBaselineConfigInput`<sup>Optional</sup> <a name="dataQualityBaselineConfigInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityBaselineConfigInput"></a>

```typescript
public readonly dataQualityBaselineConfigInput: IResolvable | SagemakerDataQualityJobDefinitionDataQualityBaselineConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a>

---

##### `dataQualityJobInputInput`<sup>Optional</sup> <a name="dataQualityJobInputInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobInputInput"></a>

```typescript
public readonly dataQualityJobInputInput: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a>

---

##### `dataQualityJobOutputConfigInput`<sup>Optional</sup> <a name="dataQualityJobOutputConfigInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobOutputConfigInput"></a>

```typescript
public readonly dataQualityJobOutputConfigInput: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a>

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.endpointNameInput"></a>

```typescript
public readonly endpointNameInput: string;
```

- *Type:* string

---

##### `jobDefinitionNameInput`<sup>Optional</sup> <a name="jobDefinitionNameInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobDefinitionNameInput"></a>

```typescript
public readonly jobDefinitionNameInput: string;
```

- *Type:* string

---

##### `jobResourcesInput`<sup>Optional</sup> <a name="jobResourcesInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobResourcesInput"></a>

```typescript
public readonly jobResourcesInput: IResolvable | SagemakerDataQualityJobDefinitionJobResources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a>

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.networkConfigInput"></a>

```typescript
public readonly networkConfigInput: IResolvable | SagemakerDataQualityJobDefinitionNetworkConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `stoppingConditionInput`<sup>Optional</sup> <a name="stoppingConditionInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.stoppingConditionInput"></a>

```typescript
public readonly stoppingConditionInput: IResolvable | SagemakerDataQualityJobDefinitionStoppingCondition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SagemakerDataQualityJobDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags">SagemakerDataQualityJobDefinitionTags</a>[]

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `jobDefinitionName`<sup>Required</sup> <a name="jobDefinitionName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobDefinitionName"></a>

```typescript
public readonly jobDefinitionName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerDataQualityJobDefinitionConfig <a name="SagemakerDataQualityJobDefinitionConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

const sagemakerDataQualityJobDefinitionConfig: sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityAppSpecification">dataQualityAppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a></code> | Container image configuration object for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityJobInput">dataQualityJobInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a></code> | The inputs for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityJobOutputConfig">dataQualityJobOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a></code> | The output configuration for monitoring jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.jobResources">jobResources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a></code> | Identifies the resources to deploy for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityBaselineConfig">dataQualityBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a></code> | Baseline configuration used to validate that the data conforms to the specified constraints and statistics. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.endpointName">endpointName</a></code> | <code>string</code> | The name of the endpoint used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.jobDefinitionName">jobDefinitionName</a></code> | <code>string</code> | The name of the job definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a></code> | Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.stoppingCondition">stoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a></code> | Specifies a time limit for how long the monitoring job is allowed to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags">SagemakerDataQualityJobDefinitionTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataQualityAppSpecification`<sup>Required</sup> <a name="dataQualityAppSpecification" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityAppSpecification"></a>

```typescript
public readonly dataQualityAppSpecification: SagemakerDataQualityJobDefinitionDataQualityAppSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a>

Container image configuration object for the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_app_specification SagemakerDataQualityJobDefinition#data_quality_app_specification}

---

##### `dataQualityJobInput`<sup>Required</sup> <a name="dataQualityJobInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityJobInput"></a>

```typescript
public readonly dataQualityJobInput: SagemakerDataQualityJobDefinitionDataQualityJobInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a>

The inputs for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_job_input SagemakerDataQualityJobDefinition#data_quality_job_input}

---

##### `dataQualityJobOutputConfig`<sup>Required</sup> <a name="dataQualityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityJobOutputConfig"></a>

```typescript
public readonly dataQualityJobOutputConfig: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a>

The output configuration for monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_job_output_config SagemakerDataQualityJobDefinition#data_quality_job_output_config}

---

##### `jobResources`<sup>Required</sup> <a name="jobResources" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.jobResources"></a>

```typescript
public readonly jobResources: SagemakerDataQualityJobDefinitionJobResources;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a>

Identifies the resources to deploy for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#job_resources SagemakerDataQualityJobDefinition#job_resources}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#role_arn SagemakerDataQualityJobDefinition#role_arn}

---

##### `dataQualityBaselineConfig`<sup>Optional</sup> <a name="dataQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityBaselineConfig"></a>

```typescript
public readonly dataQualityBaselineConfig: SagemakerDataQualityJobDefinitionDataQualityBaselineConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a>

Baseline configuration used to validate that the data conforms to the specified constraints and statistics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_baseline_config SagemakerDataQualityJobDefinition#data_quality_baseline_config}

---

##### `endpointName`<sup>Optional</sup> <a name="endpointName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_name SagemakerDataQualityJobDefinition#endpoint_name}

---

##### `jobDefinitionName`<sup>Optional</sup> <a name="jobDefinitionName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.jobDefinitionName"></a>

```typescript
public readonly jobDefinitionName: string;
```

- *Type:* string

The name of the job definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#job_definition_name SagemakerDataQualityJobDefinition#job_definition_name}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.networkConfig"></a>

```typescript
public readonly networkConfig: SagemakerDataQualityJobDefinitionNetworkConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a>

Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#network_config SagemakerDataQualityJobDefinition#network_config}

---

##### `stoppingCondition`<sup>Optional</sup> <a name="stoppingCondition" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.stoppingCondition"></a>

```typescript
public readonly stoppingCondition: SagemakerDataQualityJobDefinitionStoppingCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a>

Specifies a time limit for how long the monitoring job is allowed to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#stopping_condition SagemakerDataQualityJobDefinition#stopping_condition}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SagemakerDataQualityJobDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags">SagemakerDataQualityJobDefinitionTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#tags SagemakerDataQualityJobDefinition#tags}

---

### SagemakerDataQualityJobDefinitionDataQualityAppSpecification <a name="SagemakerDataQualityJobDefinitionDataQualityAppSpecification" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

const sagemakerDataQualityJobDefinitionDataQualityAppSpecification: sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.imageUri">imageUri</a></code> | <code>string</code> | The container image to be run by the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.containerArguments">containerArguments</a></code> | <code>string[]</code> | An array of arguments for the container used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.containerEntrypoint">containerEntrypoint</a></code> | <code>string[]</code> | Specifies the entrypoint for a container used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Sets the environment variables in the Docker container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.postAnalyticsProcessorSourceUri">postAnalyticsProcessorSourceUri</a></code> | <code>string</code> | An Amazon S3 URI to a script that is called after analysis has been performed. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.recordPreprocessorSourceUri">recordPreprocessorSourceUri</a></code> | <code>string</code> | An Amazon S3 URI to a script that is called per row prior to running analysis. |

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

The container image to be run by the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#image_uri SagemakerDataQualityJobDefinition#image_uri}

---

##### `containerArguments`<sup>Optional</sup> <a name="containerArguments" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.containerArguments"></a>

```typescript
public readonly containerArguments: string[];
```

- *Type:* string[]

An array of arguments for the container used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#container_arguments SagemakerDataQualityJobDefinition#container_arguments}

---

##### `containerEntrypoint`<sup>Optional</sup> <a name="containerEntrypoint" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.containerEntrypoint"></a>

```typescript
public readonly containerEntrypoint: string[];
```

- *Type:* string[]

Specifies the entrypoint for a container used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#container_entrypoint SagemakerDataQualityJobDefinition#container_entrypoint}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets the environment variables in the Docker container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#environment SagemakerDataQualityJobDefinition#environment}

---

##### `postAnalyticsProcessorSourceUri`<sup>Optional</sup> <a name="postAnalyticsProcessorSourceUri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.postAnalyticsProcessorSourceUri"></a>

```typescript
public readonly postAnalyticsProcessorSourceUri: string;
```

- *Type:* string

An Amazon S3 URI to a script that is called after analysis has been performed.

Applicable only for the built-in (first party) containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#post_analytics_processor_source_uri SagemakerDataQualityJobDefinition#post_analytics_processor_source_uri}

---

##### `recordPreprocessorSourceUri`<sup>Optional</sup> <a name="recordPreprocessorSourceUri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.recordPreprocessorSourceUri"></a>

```typescript
public readonly recordPreprocessorSourceUri: string;
```

- *Type:* string

An Amazon S3 URI to a script that is called per row prior to running analysis.

It can base64 decode the payload and convert it into a flatted json so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#record_preprocessor_source_uri SagemakerDataQualityJobDefinition#record_preprocessor_source_uri}

---

### SagemakerDataQualityJobDefinitionDataQualityBaselineConfig <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

const sagemakerDataQualityJobDefinitionDataQualityBaselineConfig: sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.baseliningJobName">baseliningJobName</a></code> | <code>string</code> | The name of a processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.constraintsResource">constraintsResource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a></code> | The baseline constraints resource for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.statisticsResource">statisticsResource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a></code> | The baseline statistics resource for a monitoring job. |

---

##### `baseliningJobName`<sup>Optional</sup> <a name="baseliningJobName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.baseliningJobName"></a>

```typescript
public readonly baseliningJobName: string;
```

- *Type:* string

The name of a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#baselining_job_name SagemakerDataQualityJobDefinition#baselining_job_name}

---

##### `constraintsResource`<sup>Optional</sup> <a name="constraintsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.constraintsResource"></a>

```typescript
public readonly constraintsResource: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a>

The baseline constraints resource for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#constraints_resource SagemakerDataQualityJobDefinition#constraints_resource}

---

##### `statisticsResource`<sup>Optional</sup> <a name="statisticsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.statisticsResource"></a>

```typescript
public readonly statisticsResource: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a>

The baseline statistics resource for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#statistics_resource SagemakerDataQualityJobDefinition#statistics_resource}

---

### SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

const sagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource: sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource.property.s3Uri">s3Uri</a></code> | <code>string</code> | The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against. |

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}

---

### SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

const sagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource: sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource.property.s3Uri">s3Uri</a></code> | <code>string</code> | The Amazon S3 URI for the baseline statistics file in Amazon S3 that the current monitoring job should be validated against. |

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

The Amazon S3 URI for the baseline statistics file in Amazon S3 that the current monitoring job should be validated against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}

---

### SagemakerDataQualityJobDefinitionDataQualityJobInput <a name="SagemakerDataQualityJobDefinitionDataQualityJobInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

const sagemakerDataQualityJobDefinitionDataQualityJobInput: sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput.property.batchTransformInput">batchTransformInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a></code> | The batch transform input for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput.property.endpointInput">endpointInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a></code> | The endpoint for a monitoring job. |

---

##### `batchTransformInput`<sup>Optional</sup> <a name="batchTransformInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput.property.batchTransformInput"></a>

```typescript
public readonly batchTransformInput: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a>

The batch transform input for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#batch_transform_input SagemakerDataQualityJobDefinition#batch_transform_input}

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput.property.endpointInput"></a>

```typescript
public readonly endpointInput: SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a>

The endpoint for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_input SagemakerDataQualityJobDefinition#endpoint_input}

---

### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

const sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput: sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.dataCapturedDestinationS3Uri">dataCapturedDestinationS3Uri</a></code> | <code>string</code> | A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.datasetFormat">datasetFormat</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a></code> | The dataset format of the data to monitor. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.excludeFeaturesAttribute">excludeFeaturesAttribute</a></code> | <code>string</code> | Indexes or names of the features to be excluded from analysis. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.localPath">localPath</a></code> | <code>string</code> | Path to the filesystem where the endpoint data is available to the container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.s3DataDistributionType">s3DataDistributionType</a></code> | <code>string</code> | Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.s3InputMode">s3InputMode</a></code> | <code>string</code> | Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. |

---

##### `dataCapturedDestinationS3Uri`<sup>Optional</sup> <a name="dataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.dataCapturedDestinationS3Uri"></a>

```typescript
public readonly dataCapturedDestinationS3Uri: string;
```

- *Type:* string

A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#data_captured_destination_s3_uri SagemakerDataQualityJobDefinition#data_captured_destination_s3_uri}

---

##### `datasetFormat`<sup>Optional</sup> <a name="datasetFormat" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.datasetFormat"></a>

```typescript
public readonly datasetFormat: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a>

The dataset format of the data to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#dataset_format SagemakerDataQualityJobDefinition#dataset_format}

---

##### `excludeFeaturesAttribute`<sup>Optional</sup> <a name="excludeFeaturesAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.excludeFeaturesAttribute"></a>

```typescript
public readonly excludeFeaturesAttribute: string;
```

- *Type:* string

Indexes or names of the features to be excluded from analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#exclude_features_attribute SagemakerDataQualityJobDefinition#exclude_features_attribute}

---

##### `localPath`<sup>Optional</sup> <a name="localPath" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.localPath"></a>

```typescript
public readonly localPath: string;
```

- *Type:* string

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}

---

##### `s3DataDistributionType`<sup>Optional</sup> <a name="s3DataDistributionType" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.s3DataDistributionType"></a>

```typescript
public readonly s3DataDistributionType: string;
```

- *Type:* string

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_data_distribution_type SagemakerDataQualityJobDefinition#s3_data_distribution_type}

---

##### `s3InputMode`<sup>Optional</sup> <a name="s3InputMode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.s3InputMode"></a>

```typescript
public readonly s3InputMode: string;
```

- *Type:* string

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_input_mode SagemakerDataQualityJobDefinition#s3_input_mode}

---

### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

const sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat: sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a></code> | The CSV format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.json">json</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a></code> | The Json format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.parquet">parquet</a></code> | <code>boolean \| cdktn.IResolvable</code> | A flag indicate if the dataset format is Parquet. |

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.csv"></a>

```typescript
public readonly csv: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a>

The CSV format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#csv SagemakerDataQualityJobDefinition#csv}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.json"></a>

```typescript
public readonly json: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a>

The Json format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#json SagemakerDataQualityJobDefinition#json}

---

##### `parquet`<sup>Optional</sup> <a name="parquet" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.parquet"></a>

```typescript
public readonly parquet: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A flag indicate if the dataset format is Parquet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#parquet SagemakerDataQualityJobDefinition#parquet}

---

### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

const sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv: sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv.property.header">header</a></code> | <code>boolean \| cdktn.IResolvable</code> | A boolean flag indicating if given CSV has header. |

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv.property.header"></a>

```typescript
public readonly header: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A boolean flag indicating if given CSV has header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#header SagemakerDataQualityJobDefinition#header}

---

### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

const sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson: sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson.property.line">line</a></code> | <code>boolean \| cdktn.IResolvable</code> | A boolean flag indicating if it is JSON line format. |

---

##### `line`<sup>Optional</sup> <a name="line" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson.property.line"></a>

```typescript
public readonly line: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A boolean flag indicating if it is JSON line format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#line SagemakerDataQualityJobDefinition#line}

---

### SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

const sagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput: sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.endpointName">endpointName</a></code> | <code>string</code> | The name of the endpoint used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.excludeFeaturesAttribute">excludeFeaturesAttribute</a></code> | <code>string</code> | Indexes or names of the features to be excluded from analysis. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.localPath">localPath</a></code> | <code>string</code> | Path to the filesystem where the endpoint data is available to the container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.s3DataDistributionType">s3DataDistributionType</a></code> | <code>string</code> | Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.s3InputMode">s3InputMode</a></code> | <code>string</code> | Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. |

---

##### `endpointName`<sup>Optional</sup> <a name="endpointName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_name SagemakerDataQualityJobDefinition#endpoint_name}

---

##### `excludeFeaturesAttribute`<sup>Optional</sup> <a name="excludeFeaturesAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.excludeFeaturesAttribute"></a>

```typescript
public readonly excludeFeaturesAttribute: string;
```

- *Type:* string

Indexes or names of the features to be excluded from analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#exclude_features_attribute SagemakerDataQualityJobDefinition#exclude_features_attribute}

---

##### `localPath`<sup>Optional</sup> <a name="localPath" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.localPath"></a>

```typescript
public readonly localPath: string;
```

- *Type:* string

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}

---

##### `s3DataDistributionType`<sup>Optional</sup> <a name="s3DataDistributionType" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.s3DataDistributionType"></a>

```typescript
public readonly s3DataDistributionType: string;
```

- *Type:* string

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_data_distribution_type SagemakerDataQualityJobDefinition#s3_data_distribution_type}

---

##### `s3InputMode`<sup>Optional</sup> <a name="s3InputMode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.s3InputMode"></a>

```typescript
public readonly s3InputMode: string;
```

- *Type:* string

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_input_mode SagemakerDataQualityJobDefinition#s3_input_mode}

---

### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

const sagemakerDataQualityJobDefinitionDataQualityJobOutputConfig: sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig.property.monitoringOutputs">monitoringOutputs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>[]</code> | Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption. |

---

##### `monitoringOutputs`<sup>Required</sup> <a name="monitoringOutputs" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig.property.monitoringOutputs"></a>

```typescript
public readonly monitoringOutputs: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>[]

Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#monitoring_outputs SagemakerDataQualityJobDefinition#monitoring_outputs}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#kms_key_id SagemakerDataQualityJobDefinition#kms_key_id}

---

### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

const sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs: sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs.property.s3Output">s3Output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a></code> | Information about where and how to store the results of a monitoring job. |

---

##### `s3Output`<sup>Required</sup> <a name="s3Output" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs.property.s3Output"></a>

```typescript
public readonly s3Output: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a>

Information about where and how to store the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_output SagemakerDataQualityJobDefinition#s3_output}

---

### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

const sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output: sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.localPath">localPath</a></code> | <code>string</code> | The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.s3Uri">s3Uri</a></code> | <code>string</code> | A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.s3UploadMode">s3UploadMode</a></code> | <code>string</code> | Whether to upload the results of the monitoring job continuously or after the job completes. |

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.localPath"></a>

```typescript
public readonly localPath: string;
```

- *Type:* string

The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

LocalPath is an absolute path for the output data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}

---

##### `s3UploadMode`<sup>Optional</sup> <a name="s3UploadMode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.s3UploadMode"></a>

```typescript
public readonly s3UploadMode: string;
```

- *Type:* string

Whether to upload the results of the monitoring job continuously or after the job completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_upload_mode SagemakerDataQualityJobDefinition#s3_upload_mode}

---

### SagemakerDataQualityJobDefinitionJobResources <a name="SagemakerDataQualityJobDefinitionJobResources" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

const sagemakerDataQualityJobDefinitionJobResources: sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a></code> | Configuration for the cluster used to run model monitoring jobs. |

---

##### `clusterConfig`<sup>Required</sup> <a name="clusterConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources.property.clusterConfig"></a>

```typescript
public readonly clusterConfig: SagemakerDataQualityJobDefinitionJobResourcesClusterConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a>

Configuration for the cluster used to run model monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#cluster_config SagemakerDataQualityJobDefinition#cluster_config}

---

### SagemakerDataQualityJobDefinitionJobResourcesClusterConfig <a name="SagemakerDataQualityJobDefinitionJobResourcesClusterConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

const sagemakerDataQualityJobDefinitionJobResourcesClusterConfig: sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.instanceCount">instanceCount</a></code> | <code>number</code> | The number of ML compute instances to use in the model monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.instanceType">instanceType</a></code> | <code>string</code> | The ML compute instance type for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>number</code> | The size of the ML storage volume, in gigabytes, that you want to provision. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job. |

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

The number of ML compute instances to use in the model monitoring job.

For distributed processing jobs, specify a value greater than 1. The default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#instance_count SagemakerDataQualityJobDefinition#instance_count}

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The ML compute instance type for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#instance_type SagemakerDataQualityJobDefinition#instance_type}

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.volumeSizeInGb"></a>

```typescript
public readonly volumeSizeInGb: number;
```

- *Type:* number

The size of the ML storage volume, in gigabytes, that you want to provision.

You must specify sufficient ML storage for your scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#volume_size_in_gb SagemakerDataQualityJobDefinition#volume_size_in_gb}

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.volumeKmsKeyId"></a>

```typescript
public readonly volumeKmsKeyId: string;
```

- *Type:* string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#volume_kms_key_id SagemakerDataQualityJobDefinition#volume_kms_key_id}

---

### SagemakerDataQualityJobDefinitionNetworkConfig <a name="SagemakerDataQualityJobDefinitionNetworkConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

const sagemakerDataQualityJobDefinitionNetworkConfig: sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.enableInterContainerTrafficEncryption">enableInterContainerTrafficEncryption</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to encrypt all communications between distributed processing jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.enableNetworkIsolation">enableNetworkIsolation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to allow inbound and outbound network calls to and from the containers used for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a></code> | Specifies a VPC that your training jobs and hosted models have access to. |

---

##### `enableInterContainerTrafficEncryption`<sup>Optional</sup> <a name="enableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.enableInterContainerTrafficEncryption"></a>

```typescript
public readonly enableInterContainerTrafficEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to encrypt all communications between distributed processing jobs.

Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#enable_inter_container_traffic_encryption SagemakerDataQualityJobDefinition#enable_inter_container_traffic_encryption}

---

##### `enableNetworkIsolation`<sup>Optional</sup> <a name="enableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.enableNetworkIsolation"></a>

```typescript
public readonly enableNetworkIsolation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to allow inbound and outbound network calls to and from the containers used for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#enable_network_isolation SagemakerDataQualityJobDefinition#enable_network_isolation}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a>

Specifies a VPC that your training jobs and hosted models have access to.

Control access to and from your training and model containers by configuring the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#vpc_config SagemakerDataQualityJobDefinition#vpc_config}

---

### SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig <a name="SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

const sagemakerDataQualityJobDefinitionNetworkConfigVpcConfig: sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig.property.subnets">subnets</a></code> | <code>string[]</code> | The ID of the subnets in the VPC to which you want to connect to your monitoring jobs. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#security_group_ids SagemakerDataQualityJobDefinition#security_group_ids}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#subnets SagemakerDataQualityJobDefinition#subnets}

---

### SagemakerDataQualityJobDefinitionStoppingCondition <a name="SagemakerDataQualityJobDefinitionStoppingCondition" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

const sagemakerDataQualityJobDefinitionStoppingCondition: sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition.property.maxRuntimeInSeconds">maxRuntimeInSeconds</a></code> | <code>number</code> | The maximum runtime allowed in seconds. |

---

##### `maxRuntimeInSeconds`<sup>Optional</sup> <a name="maxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition.property.maxRuntimeInSeconds"></a>

```typescript
public readonly maxRuntimeInSeconds: number;
```

- *Type:* number

The maximum runtime allowed in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#max_runtime_in_seconds SagemakerDataQualityJobDefinition#max_runtime_in_seconds}

---

### SagemakerDataQualityJobDefinitionTags <a name="SagemakerDataQualityJobDefinitionTags" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

const sagemakerDataQualityJobDefinitionTags: sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#key SagemakerDataQualityJobDefinition#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#value SagemakerDataQualityJobDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetContainerArguments">resetContainerArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetContainerEntrypoint">resetContainerEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetPostAnalyticsProcessorSourceUri">resetPostAnalyticsProcessorSourceUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetRecordPreprocessorSourceUri">resetRecordPreprocessorSourceUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerArguments` <a name="resetContainerArguments" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetContainerArguments"></a>

```typescript
public resetContainerArguments(): void
```

##### `resetContainerEntrypoint` <a name="resetContainerEntrypoint" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetContainerEntrypoint"></a>

```typescript
public resetContainerEntrypoint(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetPostAnalyticsProcessorSourceUri` <a name="resetPostAnalyticsProcessorSourceUri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetPostAnalyticsProcessorSourceUri"></a>

```typescript
public resetPostAnalyticsProcessorSourceUri(): void
```

##### `resetRecordPreprocessorSourceUri` <a name="resetRecordPreprocessorSourceUri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetRecordPreprocessorSourceUri"></a>

```typescript
public resetRecordPreprocessorSourceUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerArgumentsInput">containerArgumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerEntrypointInput">containerEntrypointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.environmentInput">environmentInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUriInput">postAnalyticsProcessorSourceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUriInput">recordPreprocessorSourceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerArguments">containerArguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerEntrypoint">containerEntrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUri">postAnalyticsProcessorSourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUri">recordPreprocessorSourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerArgumentsInput`<sup>Optional</sup> <a name="containerArgumentsInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerArgumentsInput"></a>

```typescript
public readonly containerArgumentsInput: string[];
```

- *Type:* string[]

---

##### `containerEntrypointInput`<sup>Optional</sup> <a name="containerEntrypointInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerEntrypointInput"></a>

```typescript
public readonly containerEntrypointInput: string[];
```

- *Type:* string[]

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.imageUriInput"></a>

```typescript
public readonly imageUriInput: string;
```

- *Type:* string

---

##### `postAnalyticsProcessorSourceUriInput`<sup>Optional</sup> <a name="postAnalyticsProcessorSourceUriInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUriInput"></a>

```typescript
public readonly postAnalyticsProcessorSourceUriInput: string;
```

- *Type:* string

---

##### `recordPreprocessorSourceUriInput`<sup>Optional</sup> <a name="recordPreprocessorSourceUriInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUriInput"></a>

```typescript
public readonly recordPreprocessorSourceUriInput: string;
```

- *Type:* string

---

##### `containerArguments`<sup>Required</sup> <a name="containerArguments" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerArguments"></a>

```typescript
public readonly containerArguments: string[];
```

- *Type:* string[]

---

##### `containerEntrypoint`<sup>Required</sup> <a name="containerEntrypoint" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerEntrypoint"></a>

```typescript
public readonly containerEntrypoint: string[];
```

- *Type:* string[]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `postAnalyticsProcessorSourceUri`<sup>Required</sup> <a name="postAnalyticsProcessorSourceUri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUri"></a>

```typescript
public readonly postAnalyticsProcessorSourceUri: string;
```

- *Type:* string

---

##### `recordPreprocessorSourceUri`<sup>Required</sup> <a name="recordPreprocessorSourceUri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUri"></a>

```typescript
public readonly recordPreprocessorSourceUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerDataQualityJobDefinitionDataQualityAppSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a>

---


### SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resetS3Uri">resetS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Uri` <a name="resetS3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resetS3Uri"></a>

```typescript
public resetS3Uri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.s3UriInput"></a>

```typescript
public readonly s3UriInput: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a>

---


### SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putConstraintsResource">putConstraintsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putStatisticsResource">putStatisticsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetBaseliningJobName">resetBaseliningJobName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetConstraintsResource">resetConstraintsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetStatisticsResource">resetStatisticsResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConstraintsResource` <a name="putConstraintsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putConstraintsResource"></a>

```typescript
public putConstraintsResource(value: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putConstraintsResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a>

---

##### `putStatisticsResource` <a name="putStatisticsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putStatisticsResource"></a>

```typescript
public putStatisticsResource(value: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putStatisticsResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a>

---

##### `resetBaseliningJobName` <a name="resetBaseliningJobName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetBaseliningJobName"></a>

```typescript
public resetBaseliningJobName(): void
```

##### `resetConstraintsResource` <a name="resetConstraintsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetConstraintsResource"></a>

```typescript
public resetConstraintsResource(): void
```

##### `resetStatisticsResource` <a name="resetStatisticsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetStatisticsResource"></a>

```typescript
public resetStatisticsResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.constraintsResource">constraintsResource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.statisticsResource">statisticsResource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.baseliningJobNameInput">baseliningJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.constraintsResourceInput">constraintsResourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.statisticsResourceInput">statisticsResourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.baseliningJobName">baseliningJobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constraintsResource`<sup>Required</sup> <a name="constraintsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.constraintsResource"></a>

```typescript
public readonly constraintsResource: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference</a>

---

##### `statisticsResource`<sup>Required</sup> <a name="statisticsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.statisticsResource"></a>

```typescript
public readonly statisticsResource: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference</a>

---

##### `baseliningJobNameInput`<sup>Optional</sup> <a name="baseliningJobNameInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.baseliningJobNameInput"></a>

```typescript
public readonly baseliningJobNameInput: string;
```

- *Type:* string

---

##### `constraintsResourceInput`<sup>Optional</sup> <a name="constraintsResourceInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.constraintsResourceInput"></a>

```typescript
public readonly constraintsResourceInput: IResolvable | SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a>

---

##### `statisticsResourceInput`<sup>Optional</sup> <a name="statisticsResourceInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.statisticsResourceInput"></a>

```typescript
public readonly statisticsResourceInput: IResolvable | SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a>

---

##### `baseliningJobName`<sup>Required</sup> <a name="baseliningJobName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.baseliningJobName"></a>

```typescript
public readonly baseliningJobName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerDataQualityJobDefinitionDataQualityBaselineConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a>

---


### SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resetS3Uri">resetS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Uri` <a name="resetS3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resetS3Uri"></a>

```typescript
public resetS3Uri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.s3UriInput"></a>

```typescript
public readonly s3UriInput: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resetHeader">resetHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeader` <a name="resetHeader" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.headerInput">headerInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header">header</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header"></a>

```typescript
public readonly header: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resetLine">resetLine</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLine` <a name="resetLine" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resetLine"></a>

```typescript
public resetLine(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.lineInput">lineInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line">line</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lineInput`<sup>Optional</sup> <a name="lineInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.lineInput"></a>

```typescript
public readonly lineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `line`<sup>Required</sup> <a name="line" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line"></a>

```typescript
public readonly line: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv">putCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putJson">putJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetCsv">resetCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetJson">resetJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetParquet">resetParquet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCsv` <a name="putCsv" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv"></a>

```typescript
public putCsv(value: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a>

---

##### `putJson` <a name="putJson" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putJson"></a>

```typescript
public putJson(value: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a>

---

##### `resetCsv` <a name="resetCsv" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetCsv"></a>

```typescript
public resetCsv(): void
```

##### `resetJson` <a name="resetJson" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetJson"></a>

```typescript
public resetJson(): void
```

##### `resetParquet` <a name="resetParquet" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetParquet"></a>

```typescript
public resetParquet(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csvInput">csvInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.jsonInput">jsonInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquetInput">parquetInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet">parquet</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv"></a>

```typescript
public readonly csv: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.json"></a>

```typescript
public readonly json: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a>

---

##### `csvInput`<sup>Optional</sup> <a name="csvInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csvInput"></a>

```typescript
public readonly csvInput: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a>

---

##### `jsonInput`<sup>Optional</sup> <a name="jsonInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.jsonInput"></a>

```typescript
public readonly jsonInput: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a>

---

##### `parquetInput`<sup>Optional</sup> <a name="parquetInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquetInput"></a>

```typescript
public readonly parquetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `parquet`<sup>Required</sup> <a name="parquet" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet"></a>

```typescript
public readonly parquet: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.putDatasetFormat">putDatasetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetDataCapturedDestinationS3Uri">resetDataCapturedDestinationS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetDatasetFormat">resetDatasetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetExcludeFeaturesAttribute">resetExcludeFeaturesAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetLocalPath">resetLocalPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetS3DataDistributionType">resetS3DataDistributionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetS3InputMode">resetS3InputMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatasetFormat` <a name="putDatasetFormat" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.putDatasetFormat"></a>

```typescript
public putDatasetFormat(value: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.putDatasetFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a>

---

##### `resetDataCapturedDestinationS3Uri` <a name="resetDataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetDataCapturedDestinationS3Uri"></a>

```typescript
public resetDataCapturedDestinationS3Uri(): void
```

##### `resetDatasetFormat` <a name="resetDatasetFormat" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetDatasetFormat"></a>

```typescript
public resetDatasetFormat(): void
```

##### `resetExcludeFeaturesAttribute` <a name="resetExcludeFeaturesAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetExcludeFeaturesAttribute"></a>

```typescript
public resetExcludeFeaturesAttribute(): void
```

##### `resetLocalPath` <a name="resetLocalPath" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetLocalPath"></a>

```typescript
public resetLocalPath(): void
```

##### `resetS3DataDistributionType` <a name="resetS3DataDistributionType" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetS3DataDistributionType"></a>

```typescript
public resetS3DataDistributionType(): void
```

##### `resetS3InputMode` <a name="resetS3InputMode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetS3InputMode"></a>

```typescript
public resetS3InputMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.datasetFormat">datasetFormat</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3UriInput">dataCapturedDestinationS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.datasetFormatInput">datasetFormatInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.excludeFeaturesAttributeInput">excludeFeaturesAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.localPathInput">localPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionTypeInput">s3DataDistributionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3InputModeInput">s3InputModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri">dataCapturedDestinationS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.excludeFeaturesAttribute">excludeFeaturesAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.localPath">localPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType">s3DataDistributionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3InputMode">s3InputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetFormat`<sup>Required</sup> <a name="datasetFormat" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.datasetFormat"></a>

```typescript
public readonly datasetFormat: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference</a>

---

##### `dataCapturedDestinationS3UriInput`<sup>Optional</sup> <a name="dataCapturedDestinationS3UriInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3UriInput"></a>

```typescript
public readonly dataCapturedDestinationS3UriInput: string;
```

- *Type:* string

---

##### `datasetFormatInput`<sup>Optional</sup> <a name="datasetFormatInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.datasetFormatInput"></a>

```typescript
public readonly datasetFormatInput: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a>

---

##### `excludeFeaturesAttributeInput`<sup>Optional</sup> <a name="excludeFeaturesAttributeInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.excludeFeaturesAttributeInput"></a>

```typescript
public readonly excludeFeaturesAttributeInput: string;
```

- *Type:* string

---

##### `localPathInput`<sup>Optional</sup> <a name="localPathInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.localPathInput"></a>

```typescript
public readonly localPathInput: string;
```

- *Type:* string

---

##### `s3DataDistributionTypeInput`<sup>Optional</sup> <a name="s3DataDistributionTypeInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionTypeInput"></a>

```typescript
public readonly s3DataDistributionTypeInput: string;
```

- *Type:* string

---

##### `s3InputModeInput`<sup>Optional</sup> <a name="s3InputModeInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3InputModeInput"></a>

```typescript
public readonly s3InputModeInput: string;
```

- *Type:* string

---

##### `dataCapturedDestinationS3Uri`<sup>Required</sup> <a name="dataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri"></a>

```typescript
public readonly dataCapturedDestinationS3Uri: string;
```

- *Type:* string

---

##### `excludeFeaturesAttribute`<sup>Required</sup> <a name="excludeFeaturesAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.excludeFeaturesAttribute"></a>

```typescript
public readonly excludeFeaturesAttribute: string;
```

- *Type:* string

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.localPath"></a>

```typescript
public readonly localPath: string;
```

- *Type:* string

---

##### `s3DataDistributionType`<sup>Required</sup> <a name="s3DataDistributionType" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType"></a>

```typescript
public readonly s3DataDistributionType: string;
```

- *Type:* string

---

##### `s3InputMode`<sup>Required</sup> <a name="s3InputMode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3InputMode"></a>

```typescript
public readonly s3InputMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetEndpointName">resetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetExcludeFeaturesAttribute">resetExcludeFeaturesAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetLocalPath">resetLocalPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetS3DataDistributionType">resetS3DataDistributionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetS3InputMode">resetS3InputMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointName` <a name="resetEndpointName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetEndpointName"></a>

```typescript
public resetEndpointName(): void
```

##### `resetExcludeFeaturesAttribute` <a name="resetExcludeFeaturesAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetExcludeFeaturesAttribute"></a>

```typescript
public resetExcludeFeaturesAttribute(): void
```

##### `resetLocalPath` <a name="resetLocalPath" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetLocalPath"></a>

```typescript
public resetLocalPath(): void
```

##### `resetS3DataDistributionType` <a name="resetS3DataDistributionType" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetS3DataDistributionType"></a>

```typescript
public resetS3DataDistributionType(): void
```

##### `resetS3InputMode` <a name="resetS3InputMode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetS3InputMode"></a>

```typescript
public resetS3InputMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.endpointNameInput">endpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.excludeFeaturesAttributeInput">excludeFeaturesAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.localPathInput">localPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3DataDistributionTypeInput">s3DataDistributionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3InputModeInput">s3InputModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.excludeFeaturesAttribute">excludeFeaturesAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.localPath">localPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3DataDistributionType">s3DataDistributionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3InputMode">s3InputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.endpointNameInput"></a>

```typescript
public readonly endpointNameInput: string;
```

- *Type:* string

---

##### `excludeFeaturesAttributeInput`<sup>Optional</sup> <a name="excludeFeaturesAttributeInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.excludeFeaturesAttributeInput"></a>

```typescript
public readonly excludeFeaturesAttributeInput: string;
```

- *Type:* string

---

##### `localPathInput`<sup>Optional</sup> <a name="localPathInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.localPathInput"></a>

```typescript
public readonly localPathInput: string;
```

- *Type:* string

---

##### `s3DataDistributionTypeInput`<sup>Optional</sup> <a name="s3DataDistributionTypeInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3DataDistributionTypeInput"></a>

```typescript
public readonly s3DataDistributionTypeInput: string;
```

- *Type:* string

---

##### `s3InputModeInput`<sup>Optional</sup> <a name="s3InputModeInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3InputModeInput"></a>

```typescript
public readonly s3InputModeInput: string;
```

- *Type:* string

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `excludeFeaturesAttribute`<sup>Required</sup> <a name="excludeFeaturesAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.excludeFeaturesAttribute"></a>

```typescript
public readonly excludeFeaturesAttribute: string;
```

- *Type:* string

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.localPath"></a>

```typescript
public readonly localPath: string;
```

- *Type:* string

---

##### `s3DataDistributionType`<sup>Required</sup> <a name="s3DataDistributionType" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3DataDistributionType"></a>

```typescript
public readonly s3DataDistributionType: string;
```

- *Type:* string

---

##### `s3InputMode`<sup>Required</sup> <a name="s3InputMode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3InputMode"></a>

```typescript
public readonly s3InputMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putBatchTransformInput">putBatchTransformInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putEndpointInput">putEndpointInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resetBatchTransformInput">resetBatchTransformInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resetEndpointInput">resetEndpointInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBatchTransformInput` <a name="putBatchTransformInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putBatchTransformInput"></a>

```typescript
public putBatchTransformInput(value: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putBatchTransformInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a>

---

##### `putEndpointInput` <a name="putEndpointInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putEndpointInput"></a>

```typescript
public putEndpointInput(value: SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putEndpointInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a>

---

##### `resetBatchTransformInput` <a name="resetBatchTransformInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resetBatchTransformInput"></a>

```typescript
public resetBatchTransformInput(): void
```

##### `resetEndpointInput` <a name="resetEndpointInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resetEndpointInput"></a>

```typescript
public resetEndpointInput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.batchTransformInput">batchTransformInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.endpointInput">endpointInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.batchTransformInputInput">batchTransformInputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.endpointInputInput">endpointInputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchTransformInput`<sup>Required</sup> <a name="batchTransformInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.batchTransformInput"></a>

```typescript
public readonly batchTransformInput: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference</a>

---

##### `endpointInput`<sup>Required</sup> <a name="endpointInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference</a>

---

##### `batchTransformInputInput`<sup>Optional</sup> <a name="batchTransformInputInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.batchTransformInputInput"></a>

```typescript
public readonly batchTransformInputInput: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a>

---

##### `endpointInputInput`<sup>Optional</sup> <a name="endpointInputInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.endpointInputInput"></a>

```typescript
public readonly endpointInputInput: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.get"></a>

```typescript
public get(index: number): SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>[]

---


### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output">putS3Output</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Output` <a name="putS3Output" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output"></a>

```typescript
public putS3Output(value: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output">s3Output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3OutputInput">s3OutputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Output`<sup>Required</sup> <a name="s3Output" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output"></a>

```typescript
public readonly s3Output: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a>

---

##### `s3OutputInput`<sup>Optional</sup> <a name="s3OutputInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3OutputInput"></a>

```typescript
public readonly s3OutputInput: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resetS3UploadMode">resetS3UploadMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3UploadMode` <a name="resetS3UploadMode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resetS3UploadMode"></a>

```typescript
public resetS3UploadMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPathInput">localPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadModeInput">s3UploadModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath">localPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode">s3UploadMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localPathInput`<sup>Optional</sup> <a name="localPathInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPathInput"></a>

```typescript
public readonly localPathInput: string;
```

- *Type:* string

---

##### `s3UploadModeInput`<sup>Optional</sup> <a name="s3UploadModeInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadModeInput"></a>

```typescript
public readonly s3UploadModeInput: string;
```

- *Type:* string

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UriInput"></a>

```typescript
public readonly s3UriInput: string;
```

- *Type:* string

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath"></a>

```typescript
public readonly localPath: string;
```

- *Type:* string

---

##### `s3UploadMode`<sup>Required</sup> <a name="s3UploadMode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode"></a>

```typescript
public readonly s3UploadMode: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.putMonitoringOutputs">putMonitoringOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMonitoringOutputs` <a name="putMonitoringOutputs" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.putMonitoringOutputs"></a>

```typescript
public putMonitoringOutputs(value: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.putMonitoringOutputs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>[]

---

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.monitoringOutputs">monitoringOutputs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.monitoringOutputsInput">monitoringOutputsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `monitoringOutputs`<sup>Required</sup> <a name="monitoringOutputs" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.monitoringOutputs"></a>

```typescript
public readonly monitoringOutputs: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `monitoringOutputsInput`<sup>Optional</sup> <a name="monitoringOutputsInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.monitoringOutputsInput"></a>

```typescript
public readonly monitoringOutputsInput: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a>

---


### SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference <a name="SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resetVolumeKmsKeyId">resetVolumeKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVolumeKmsKeyId` <a name="resetVolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resetVolumeKmsKeyId"></a>

```typescript
public resetVolumeKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput">volumeKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGbInput">volumeSizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `volumeKmsKeyIdInput`<sup>Optional</sup> <a name="volumeKmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```typescript
public readonly volumeKmsKeyIdInput: string;
```

- *Type:* string

---

##### `volumeSizeInGbInput`<sup>Optional</sup> <a name="volumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGbInput"></a>

```typescript
public readonly volumeSizeInGbInput: number;
```

- *Type:* number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId"></a>

```typescript
public readonly volumeKmsKeyId: string;
```

- *Type:* string

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb"></a>

```typescript
public readonly volumeSizeInGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerDataQualityJobDefinitionJobResourcesClusterConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a>

---


### SagemakerDataQualityJobDefinitionJobResourcesOutputReference <a name="SagemakerDataQualityJobDefinitionJobResourcesOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.putClusterConfig">putClusterConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClusterConfig` <a name="putClusterConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.putClusterConfig"></a>

```typescript
public putClusterConfig(value: SagemakerDataQualityJobDefinitionJobResourcesClusterConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.putClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference">SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.clusterConfigInput">clusterConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterConfig`<sup>Required</sup> <a name="clusterConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.clusterConfig"></a>

```typescript
public readonly clusterConfig: SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference">SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference</a>

---

##### `clusterConfigInput`<sup>Optional</sup> <a name="clusterConfigInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.clusterConfigInput"></a>

```typescript
public readonly clusterConfigInput: IResolvable | SagemakerDataQualityJobDefinitionJobResourcesClusterConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerDataQualityJobDefinitionJobResources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a>

---


### SagemakerDataQualityJobDefinitionNetworkConfigOutputReference <a name="SagemakerDataQualityJobDefinitionNetworkConfigOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption">resetEnableInterContainerTrafficEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetEnableNetworkIsolation">resetEnableNetworkIsolation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig"></a>

```typescript
public putVpcConfig(value: SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a>

---

##### `resetEnableInterContainerTrafficEncryption` <a name="resetEnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption"></a>

```typescript
public resetEnableInterContainerTrafficEncryption(): void
```

##### `resetEnableNetworkIsolation` <a name="resetEnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetEnableNetworkIsolation"></a>

```typescript
public resetEnableNetworkIsolation(): void
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetVpcConfig"></a>

```typescript
public resetVpcConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput">enableInterContainerTrafficEncryptionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolationInput">enableNetworkIsolationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfigInput">vpcConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption">enableInterContainerTrafficEncryption</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation">enableNetworkIsolation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference</a>

---

##### `enableInterContainerTrafficEncryptionInput`<sup>Optional</sup> <a name="enableInterContainerTrafficEncryptionInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput"></a>

```typescript
public readonly enableInterContainerTrafficEncryptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableNetworkIsolationInput`<sup>Optional</sup> <a name="enableNetworkIsolationInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolationInput"></a>

```typescript
public readonly enableNetworkIsolationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: IResolvable | SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a>

---

##### `enableInterContainerTrafficEncryption`<sup>Required</sup> <a name="enableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption"></a>

```typescript
public readonly enableInterContainerTrafficEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableNetworkIsolation`<sup>Required</sup> <a name="enableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation"></a>

```typescript
public readonly enableNetworkIsolation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerDataQualityJobDefinitionNetworkConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a>

---


### SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference <a name="SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSubnets"></a>

```typescript
public resetSubnets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a>

---


### SagemakerDataQualityJobDefinitionStoppingConditionOutputReference <a name="SagemakerDataQualityJobDefinitionStoppingConditionOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resetMaxRuntimeInSeconds">resetMaxRuntimeInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxRuntimeInSeconds` <a name="resetMaxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resetMaxRuntimeInSeconds"></a>

```typescript
public resetMaxRuntimeInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSecondsInput">maxRuntimeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds">maxRuntimeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxRuntimeInSecondsInput`<sup>Optional</sup> <a name="maxRuntimeInSecondsInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSecondsInput"></a>

```typescript
public readonly maxRuntimeInSecondsInput: number;
```

- *Type:* number

---

##### `maxRuntimeInSeconds`<sup>Required</sup> <a name="maxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds"></a>

```typescript
public readonly maxRuntimeInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerDataQualityJobDefinitionStoppingCondition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a>

---


### SagemakerDataQualityJobDefinitionTagsList <a name="SagemakerDataQualityJobDefinitionTagsList" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.get"></a>

```typescript
public get(index: number): SagemakerDataQualityJobDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags">SagemakerDataQualityJobDefinitionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerDataQualityJobDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags">SagemakerDataQualityJobDefinitionTags</a>[]

---


### SagemakerDataQualityJobDefinitionTagsOutputReference <a name="SagemakerDataQualityJobDefinitionTagsOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer"></a>

```typescript
import { sagemakerDataQualityJobDefinition } from '@cdktn/provider-awscc'

new sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags">SagemakerDataQualityJobDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerDataQualityJobDefinitionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags">SagemakerDataQualityJobDefinitionTags</a>

---



