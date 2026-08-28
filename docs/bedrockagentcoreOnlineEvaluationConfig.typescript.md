# `bedrockagentcoreOnlineEvaluationConfig` Submodule <a name="`bedrockagentcoreOnlineEvaluationConfig` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreOnlineEvaluationConfig <a name="BedrockagentcoreOnlineEvaluationConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config awscc_bedrockagentcore_online_evaluation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig(scope: Construct, id: string, config: BedrockagentcoreOnlineEvaluationConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig">BedrockagentcoreOnlineEvaluationConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig">BedrockagentcoreOnlineEvaluationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putClusteringConfig">putClusteringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putDataSourceConfig">putDataSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putEvaluators">putEvaluators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putInsights">putInsights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetClusteringConfig">resetClusteringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetEvaluators">resetEvaluators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetExecutionStatus">resetExecutionStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetInsights">resetInsights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClusteringConfig` <a name="putClusteringConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putClusteringConfig"></a>

```typescript
public putClusteringConfig(value: BedrockagentcoreOnlineEvaluationConfigClusteringConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putClusteringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig">BedrockagentcoreOnlineEvaluationConfigClusteringConfig</a>

---

##### `putDataSourceConfig` <a name="putDataSourceConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putDataSourceConfig"></a>

```typescript
public putDataSourceConfig(value: BedrockagentcoreOnlineEvaluationConfigDataSourceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putDataSourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>

---

##### `putEvaluators` <a name="putEvaluators" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putEvaluators"></a>

```typescript
public putEvaluators(value: IResolvable | BedrockagentcoreOnlineEvaluationConfigEvaluators[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putEvaluators.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators">BedrockagentcoreOnlineEvaluationConfigEvaluators</a>[]

---

##### `putInsights` <a name="putInsights" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putInsights"></a>

```typescript
public putInsights(value: IResolvable | BedrockagentcoreOnlineEvaluationConfigInsights[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putInsights.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights">BedrockagentcoreOnlineEvaluationConfigInsights</a>[]

---

##### `putRule` <a name="putRule" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putRule"></a>

```typescript
public putRule(value: BedrockagentcoreOnlineEvaluationConfigRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putTags"></a>

```typescript
public putTags(value: IResolvable | BedrockagentcoreOnlineEvaluationConfigTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags">BedrockagentcoreOnlineEvaluationConfigTags</a>[]

---

##### `resetClusteringConfig` <a name="resetClusteringConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetClusteringConfig"></a>

```typescript
public resetClusteringConfig(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEvaluators` <a name="resetEvaluators" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetEvaluators"></a>

```typescript
public resetEvaluators(): void
```

##### `resetExecutionStatus` <a name="resetExecutionStatus" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetExecutionStatus"></a>

```typescript
public resetExecutionStatus(): void
```

##### `resetInsights` <a name="resetInsights" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetInsights"></a>

```typescript
public resetInsights(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreOnlineEvaluationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isConstruct"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformElement"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformResource"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BedrockagentcoreOnlineEvaluationConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreOnlineEvaluationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreOnlineEvaluationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreOnlineEvaluationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.clusteringConfig">clusteringConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfig">dataSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluators">evaluators</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList">BedrockagentcoreOnlineEvaluationConfigEvaluatorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.insights">insights</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList">BedrockagentcoreOnlineEvaluationConfigInsightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigArn">onlineEvaluationConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigId">onlineEvaluationConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference">BedrockagentcoreOnlineEvaluationConfigRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList">BedrockagentcoreOnlineEvaluationConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.clusteringConfigInput">clusteringConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig">BedrockagentcoreOnlineEvaluationConfigClusteringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfigInput">dataSourceConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArnInput">evaluationExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluatorsInput">evaluatorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators">BedrockagentcoreOnlineEvaluationConfigEvaluators</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.executionStatusInput">executionStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.insightsInput">insightsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights">BedrockagentcoreOnlineEvaluationConfigInsights</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigNameInput">onlineEvaluationConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.ruleInput">ruleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags">BedrockagentcoreOnlineEvaluationConfigTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArn">evaluationExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.executionStatus">executionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigName">onlineEvaluationConfigName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clusteringConfig`<sup>Required</sup> <a name="clusteringConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.clusteringConfig"></a>

```typescript
public readonly clusteringConfig: BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dataSourceConfig`<sup>Required</sup> <a name="dataSourceConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfig"></a>

```typescript
public readonly dataSourceConfig: BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference</a>

---

##### `evaluators`<sup>Required</sup> <a name="evaluators" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluators"></a>

```typescript
public readonly evaluators: BedrockagentcoreOnlineEvaluationConfigEvaluatorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList">BedrockagentcoreOnlineEvaluationConfigEvaluatorsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `insights`<sup>Required</sup> <a name="insights" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.insights"></a>

```typescript
public readonly insights: BedrockagentcoreOnlineEvaluationConfigInsightsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList">BedrockagentcoreOnlineEvaluationConfigInsightsList</a>

---

##### `onlineEvaluationConfigArn`<sup>Required</sup> <a name="onlineEvaluationConfigArn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigArn"></a>

```typescript
public readonly onlineEvaluationConfigArn: string;
```

- *Type:* string

---

##### `onlineEvaluationConfigId`<sup>Required</sup> <a name="onlineEvaluationConfigId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigId"></a>

```typescript
public readonly onlineEvaluationConfigId: string;
```

- *Type:* string

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.outputConfig"></a>

```typescript
public readonly outputConfig: BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.rule"></a>

```typescript
public readonly rule: BedrockagentcoreOnlineEvaluationConfigRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference">BedrockagentcoreOnlineEvaluationConfigRuleOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tags"></a>

```typescript
public readonly tags: BedrockagentcoreOnlineEvaluationConfigTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList">BedrockagentcoreOnlineEvaluationConfigTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `clusteringConfigInput`<sup>Optional</sup> <a name="clusteringConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.clusteringConfigInput"></a>

```typescript
public readonly clusteringConfigInput: IResolvable | BedrockagentcoreOnlineEvaluationConfigClusteringConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig">BedrockagentcoreOnlineEvaluationConfigClusteringConfig</a>

---

##### `dataSourceConfigInput`<sup>Optional</sup> <a name="dataSourceConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfigInput"></a>

```typescript
public readonly dataSourceConfigInput: IResolvable | BedrockagentcoreOnlineEvaluationConfigDataSourceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `evaluationExecutionRoleArnInput`<sup>Optional</sup> <a name="evaluationExecutionRoleArnInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArnInput"></a>

```typescript
public readonly evaluationExecutionRoleArnInput: string;
```

- *Type:* string

---

##### `evaluatorsInput`<sup>Optional</sup> <a name="evaluatorsInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluatorsInput"></a>

```typescript
public readonly evaluatorsInput: IResolvable | BedrockagentcoreOnlineEvaluationConfigEvaluators[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators">BedrockagentcoreOnlineEvaluationConfigEvaluators</a>[]

---

##### `executionStatusInput`<sup>Optional</sup> <a name="executionStatusInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.executionStatusInput"></a>

```typescript
public readonly executionStatusInput: string;
```

- *Type:* string

---

##### `insightsInput`<sup>Optional</sup> <a name="insightsInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.insightsInput"></a>

```typescript
public readonly insightsInput: IResolvable | BedrockagentcoreOnlineEvaluationConfigInsights[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights">BedrockagentcoreOnlineEvaluationConfigInsights</a>[]

---

##### `onlineEvaluationConfigNameInput`<sup>Optional</sup> <a name="onlineEvaluationConfigNameInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigNameInput"></a>

```typescript
public readonly onlineEvaluationConfigNameInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | BedrockagentcoreOnlineEvaluationConfigRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | BedrockagentcoreOnlineEvaluationConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags">BedrockagentcoreOnlineEvaluationConfigTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `evaluationExecutionRoleArn`<sup>Required</sup> <a name="evaluationExecutionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArn"></a>

```typescript
public readonly evaluationExecutionRoleArn: string;
```

- *Type:* string

---

##### `executionStatus`<sup>Required</sup> <a name="executionStatus" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.executionStatus"></a>

```typescript
public readonly executionStatus: string;
```

- *Type:* string

---

##### `onlineEvaluationConfigName`<sup>Required</sup> <a name="onlineEvaluationConfigName" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigName"></a>

```typescript
public readonly onlineEvaluationConfigName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreOnlineEvaluationConfigClusteringConfig <a name="BedrockagentcoreOnlineEvaluationConfigClusteringConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const bedrockagentcoreOnlineEvaluationConfigClusteringConfig: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig.property.frequencies">frequencies</a></code> | <code>string[]</code> | The list of frequencies at which clustering reports are generated. |

---

##### `frequencies`<sup>Optional</sup> <a name="frequencies" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig.property.frequencies"></a>

```typescript
public readonly frequencies: string[];
```

- *Type:* string[]

The list of frequencies at which clustering reports are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#frequencies BedrockagentcoreOnlineEvaluationConfig#frequencies}

---

### BedrockagentcoreOnlineEvaluationConfigConfig <a name="BedrockagentcoreOnlineEvaluationConfigConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const bedrockagentcoreOnlineEvaluationConfigConfig: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.dataSourceConfig">dataSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a></code> | The data source configuration that specifies CloudWatch log groups and service names to monitor. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.evaluationExecutionRoleArn">evaluationExecutionRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role that grants permissions for evaluation. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.onlineEvaluationConfigName">onlineEvaluationConfigName</a></code> | <code>string</code> | The name of the online evaluation configuration. Must be unique within your account. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a></code> | The evaluation rule that defines sampling configuration, filters, and session detection settings. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.clusteringConfig">clusteringConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig">BedrockagentcoreOnlineEvaluationConfigClusteringConfig</a></code> | The configuration for clustering analysis of evaluation results. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.description">description</a></code> | <code>string</code> | The description of the online evaluation configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.evaluators">evaluators</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators">BedrockagentcoreOnlineEvaluationConfigEvaluators</a>[]</code> | The list of evaluators to apply during online evaluation. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.executionStatus">executionStatus</a></code> | <code>string</code> | The execution status indicating whether the online evaluation is currently running. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.insights">insights</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights">BedrockagentcoreOnlineEvaluationConfigInsights</a>[]</code> | The list of insights to enable for failure analysis. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags">BedrockagentcoreOnlineEvaluationConfigTags</a>[]</code> | A list of tags to assign to the online evaluation configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataSourceConfig`<sup>Required</sup> <a name="dataSourceConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.dataSourceConfig"></a>

```typescript
public readonly dataSourceConfig: BedrockagentcoreOnlineEvaluationConfigDataSourceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>

The data source configuration that specifies CloudWatch log groups and service names to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#data_source_config BedrockagentcoreOnlineEvaluationConfig#data_source_config}

---

##### `evaluationExecutionRoleArn`<sup>Required</sup> <a name="evaluationExecutionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.evaluationExecutionRoleArn"></a>

```typescript
public readonly evaluationExecutionRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role that grants permissions for evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluation_execution_role_arn BedrockagentcoreOnlineEvaluationConfig#evaluation_execution_role_arn}

---

##### `onlineEvaluationConfigName`<sup>Required</sup> <a name="onlineEvaluationConfigName" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.onlineEvaluationConfigName"></a>

```typescript
public readonly onlineEvaluationConfigName: string;
```

- *Type:* string

The name of the online evaluation configuration. Must be unique within your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#online_evaluation_config_name BedrockagentcoreOnlineEvaluationConfig#online_evaluation_config_name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.rule"></a>

```typescript
public readonly rule: BedrockagentcoreOnlineEvaluationConfigRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>

The evaluation rule that defines sampling configuration, filters, and session detection settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#rule BedrockagentcoreOnlineEvaluationConfig#rule}

---

##### `clusteringConfig`<sup>Optional</sup> <a name="clusteringConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.clusteringConfig"></a>

```typescript
public readonly clusteringConfig: BedrockagentcoreOnlineEvaluationConfigClusteringConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig">BedrockagentcoreOnlineEvaluationConfigClusteringConfig</a>

The configuration for clustering analysis of evaluation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#clustering_config BedrockagentcoreOnlineEvaluationConfig#clustering_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the online evaluation configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#description BedrockagentcoreOnlineEvaluationConfig#description}

---

##### `evaluators`<sup>Optional</sup> <a name="evaluators" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.evaluators"></a>

```typescript
public readonly evaluators: IResolvable | BedrockagentcoreOnlineEvaluationConfigEvaluators[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators">BedrockagentcoreOnlineEvaluationConfigEvaluators</a>[]

The list of evaluators to apply during online evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluators BedrockagentcoreOnlineEvaluationConfig#evaluators}

---

##### `executionStatus`<sup>Optional</sup> <a name="executionStatus" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.executionStatus"></a>

```typescript
public readonly executionStatus: string;
```

- *Type:* string

The execution status indicating whether the online evaluation is currently running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#execution_status BedrockagentcoreOnlineEvaluationConfig#execution_status}

---

##### `insights`<sup>Optional</sup> <a name="insights" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.insights"></a>

```typescript
public readonly insights: IResolvable | BedrockagentcoreOnlineEvaluationConfigInsights[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights">BedrockagentcoreOnlineEvaluationConfigInsights</a>[]

The list of insights to enable for failure analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#insights BedrockagentcoreOnlineEvaluationConfig#insights}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | BedrockagentcoreOnlineEvaluationConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags">BedrockagentcoreOnlineEvaluationConfigTags</a>[]

A list of tags to assign to the online evaluation configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#tags BedrockagentcoreOnlineEvaluationConfig#tags}

---

### BedrockagentcoreOnlineEvaluationConfigDataSourceConfig <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const bedrockagentcoreOnlineEvaluationConfigDataSourceConfig: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a></code> | The configuration for reading agent traces from CloudWatch logs. |

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>

The configuration for reading agent traces from CloudWatch logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#cloudwatch_logs BedrockagentcoreOnlineEvaluationConfig#cloudwatch_logs}

---

### BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const bedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.property.logGroupNames">logGroupNames</a></code> | <code>string[]</code> | The list of CloudWatch log group names to monitor for agent traces. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.property.serviceNames">serviceNames</a></code> | <code>string[]</code> | The list of service names to filter traces within the specified log groups. |

---

##### `logGroupNames`<sup>Required</sup> <a name="logGroupNames" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.property.logGroupNames"></a>

```typescript
public readonly logGroupNames: string[];
```

- *Type:* string[]

The list of CloudWatch log group names to monitor for agent traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#log_group_names BedrockagentcoreOnlineEvaluationConfig#log_group_names}

---

##### `serviceNames`<sup>Required</sup> <a name="serviceNames" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.property.serviceNames"></a>

```typescript
public readonly serviceNames: string[];
```

- *Type:* string[]

The list of service names to filter traces within the specified log groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#service_names BedrockagentcoreOnlineEvaluationConfig#service_names}

---

### BedrockagentcoreOnlineEvaluationConfigEvaluators <a name="BedrockagentcoreOnlineEvaluationConfigEvaluators" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const bedrockagentcoreOnlineEvaluationConfigEvaluators: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators.property.evaluatorId">evaluatorId</a></code> | <code>string</code> | The unique identifier of the evaluator. |

---

##### `evaluatorId`<sup>Optional</sup> <a name="evaluatorId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators.property.evaluatorId"></a>

```typescript
public readonly evaluatorId: string;
```

- *Type:* string

The unique identifier of the evaluator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluator_id BedrockagentcoreOnlineEvaluationConfig#evaluator_id}

---

### BedrockagentcoreOnlineEvaluationConfigInsights <a name="BedrockagentcoreOnlineEvaluationConfigInsights" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const bedrockagentcoreOnlineEvaluationConfigInsights: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights.property.insightId">insightId</a></code> | <code>string</code> | The unique identifier of the insight. |

---

##### `insightId`<sup>Optional</sup> <a name="insightId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights.property.insightId"></a>

```typescript
public readonly insightId: string;
```

- *Type:* string

The unique identifier of the insight.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#insight_id BedrockagentcoreOnlineEvaluationConfig#insight_id}

---

### BedrockagentcoreOnlineEvaluationConfigOutputConfig <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const bedrockagentcoreOnlineEvaluationConfigOutputConfig: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig = { ... }
```


### BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const bedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig = { ... }
```


### BedrockagentcoreOnlineEvaluationConfigRule <a name="BedrockagentcoreOnlineEvaluationConfigRule" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const bedrockagentcoreOnlineEvaluationConfigRule: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.samplingConfig">samplingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a></code> | The configuration that controls what percentage of agent traces are sampled for evaluation. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.filters">filters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters">BedrockagentcoreOnlineEvaluationConfigRuleFilters</a>[]</code> | The list of filters that determine which agent traces should be included in the evaluation. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.sessionConfig">sessionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a></code> | The configuration that defines how agent sessions are detected. |

---

##### `samplingConfig`<sup>Required</sup> <a name="samplingConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.samplingConfig"></a>

```typescript
public readonly samplingConfig: BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>

The configuration that controls what percentage of agent traces are sampled for evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#sampling_config BedrockagentcoreOnlineEvaluationConfig#sampling_config}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.filters"></a>

```typescript
public readonly filters: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters">BedrockagentcoreOnlineEvaluationConfigRuleFilters</a>[]

The list of filters that determine which agent traces should be included in the evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#filters BedrockagentcoreOnlineEvaluationConfig#filters}

---

##### `sessionConfig`<sup>Optional</sup> <a name="sessionConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.sessionConfig"></a>

```typescript
public readonly sessionConfig: BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>

The configuration that defines how agent sessions are detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#session_config BedrockagentcoreOnlineEvaluationConfig#session_config}

---

### BedrockagentcoreOnlineEvaluationConfigRuleFilters <a name="BedrockagentcoreOnlineEvaluationConfigRuleFilters" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const bedrockagentcoreOnlineEvaluationConfigRuleFilters: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters.property.key">key</a></code> | <code>string</code> | The key or field name to filter on within the agent trace data. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters.property.operator">operator</a></code> | <code>string</code> | The comparison operator to use for filtering. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue">BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue</a></code> | The value used in filter comparisons. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key or field name to filter on within the agent trace data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#key BedrockagentcoreOnlineEvaluationConfig#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

The comparison operator to use for filtering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#operator BedrockagentcoreOnlineEvaluationConfig#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters.property.value"></a>

```typescript
public readonly value: BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue">BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue</a>

The value used in filter comparisons.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#value BedrockagentcoreOnlineEvaluationConfig#value}

---

### BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue <a name="BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const bedrockagentcoreOnlineEvaluationConfigRuleFiltersValue: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue.property.booleanValue">booleanValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | The boolean value for true/false filtering conditions. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue.property.doubleValue">doubleValue</a></code> | <code>number</code> | The numeric value for numerical filtering. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue.property.stringValue">stringValue</a></code> | <code>string</code> | The string value for text-based filtering. |

---

##### `booleanValue`<sup>Optional</sup> <a name="booleanValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue.property.booleanValue"></a>

```typescript
public readonly booleanValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The boolean value for true/false filtering conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#boolean_value BedrockagentcoreOnlineEvaluationConfig#boolean_value}

---

##### `doubleValue`<sup>Optional</sup> <a name="doubleValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue.property.doubleValue"></a>

```typescript
public readonly doubleValue: number;
```

- *Type:* number

The numeric value for numerical filtering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#double_value BedrockagentcoreOnlineEvaluationConfig#double_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

The string value for text-based filtering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#string_value BedrockagentcoreOnlineEvaluationConfig#string_value}

---

### BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig <a name="BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const bedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig.property.samplingPercentage">samplingPercentage</a></code> | <code>number</code> | The percentage of agent traces to sample for evaluation. |

---

##### `samplingPercentage`<sup>Required</sup> <a name="samplingPercentage" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig.property.samplingPercentage"></a>

```typescript
public readonly samplingPercentage: number;
```

- *Type:* number

The percentage of agent traces to sample for evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#sampling_percentage BedrockagentcoreOnlineEvaluationConfig#sampling_percentage}

---

### BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig <a name="BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const bedrockagentcoreOnlineEvaluationConfigRuleSessionConfig: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig.property.sessionTimeoutMinutes">sessionTimeoutMinutes</a></code> | <code>number</code> | The number of minutes of inactivity after which an agent session is considered complete. |

---

##### `sessionTimeoutMinutes`<sup>Optional</sup> <a name="sessionTimeoutMinutes" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig.property.sessionTimeoutMinutes"></a>

```typescript
public readonly sessionTimeoutMinutes: number;
```

- *Type:* number

The number of minutes of inactivity after which an agent session is considered complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#session_timeout_minutes BedrockagentcoreOnlineEvaluationConfig#session_timeout_minutes}

---

### BedrockagentcoreOnlineEvaluationConfigTags <a name="BedrockagentcoreOnlineEvaluationConfigTags" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const bedrockagentcoreOnlineEvaluationConfigTags: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#key BedrockagentcoreOnlineEvaluationConfig#key}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#value BedrockagentcoreOnlineEvaluationConfig#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#key BedrockagentcoreOnlineEvaluationConfig#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_online_evaluation_config#value BedrockagentcoreOnlineEvaluationConfig#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.resetFrequencies">resetFrequencies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrequencies` <a name="resetFrequencies" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.resetFrequencies"></a>

```typescript
public resetFrequencies(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.frequenciesInput">frequenciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.frequencies">frequencies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig">BedrockagentcoreOnlineEvaluationConfigClusteringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequenciesInput`<sup>Optional</sup> <a name="frequenciesInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.frequenciesInput"></a>

```typescript
public readonly frequenciesInput: string[];
```

- *Type:* string[]

---

##### `frequencies`<sup>Required</sup> <a name="frequencies" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.frequencies"></a>

```typescript
public readonly frequencies: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigClusteringConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig">BedrockagentcoreOnlineEvaluationConfigClusteringConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNamesInput">logGroupNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNamesInput">serviceNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNames">logGroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNames">serviceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupNamesInput`<sup>Optional</sup> <a name="logGroupNamesInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNamesInput"></a>

```typescript
public readonly logGroupNamesInput: string[];
```

- *Type:* string[]

---

##### `serviceNamesInput`<sup>Optional</sup> <a name="serviceNamesInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNamesInput"></a>

```typescript
public readonly serviceNamesInput: string[];
```

- *Type:* string[]

---

##### `logGroupNames`<sup>Required</sup> <a name="logGroupNames" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNames"></a>

```typescript
public readonly logGroupNames: string[];
```

- *Type:* string[]

---

##### `serviceNames`<sup>Required</sup> <a name="serviceNames" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNames"></a>

```typescript
public readonly serviceNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>

---


### BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.putCloudwatchLogs"></a>

```typescript
public putCloudwatchLogs(value: BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogsInput"></a>

```typescript
public readonly cloudwatchLogsInput: IResolvable | BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigDataSourceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigEvaluatorsList <a name="BedrockagentcoreOnlineEvaluationConfigEvaluatorsList" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.get"></a>

```typescript
public get(index: number): BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators">BedrockagentcoreOnlineEvaluationConfigEvaluators</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigEvaluators[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators">BedrockagentcoreOnlineEvaluationConfigEvaluators</a>[]

---


### BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.resetEvaluatorId">resetEvaluatorId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluatorId` <a name="resetEvaluatorId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.resetEvaluatorId"></a>

```typescript
public resetEvaluatorId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.evaluatorIdInput">evaluatorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.evaluatorId">evaluatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators">BedrockagentcoreOnlineEvaluationConfigEvaluators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluatorIdInput`<sup>Optional</sup> <a name="evaluatorIdInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.evaluatorIdInput"></a>

```typescript
public readonly evaluatorIdInput: string;
```

- *Type:* string

---

##### `evaluatorId`<sup>Required</sup> <a name="evaluatorId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.evaluatorId"></a>

```typescript
public readonly evaluatorId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigEvaluators;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators">BedrockagentcoreOnlineEvaluationConfigEvaluators</a>

---


### BedrockagentcoreOnlineEvaluationConfigInsightsList <a name="BedrockagentcoreOnlineEvaluationConfigInsightsList" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.get"></a>

```typescript
public get(index: number): BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights">BedrockagentcoreOnlineEvaluationConfigInsights</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigInsights[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights">BedrockagentcoreOnlineEvaluationConfigInsights</a>[]

---


### BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.resetInsightId">resetInsightId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInsightId` <a name="resetInsightId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.resetInsightId"></a>

```typescript
public resetInsightId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.insightIdInput">insightIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.insightId">insightId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights">BedrockagentcoreOnlineEvaluationConfigInsights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `insightIdInput`<sup>Optional</sup> <a name="insightIdInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.insightIdInput"></a>

```typescript
public readonly insightIdInput: string;
```

- *Type:* string

---

##### `insightId`<sup>Required</sup> <a name="insightId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.insightId"></a>

```typescript
public readonly insightId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigInsights;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights">BedrockagentcoreOnlineEvaluationConfigInsights</a>

---


### BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig">BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig">BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.cloudwatchConfig">cloudwatchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig">BedrockagentcoreOnlineEvaluationConfigOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchConfig`<sup>Required</sup> <a name="cloudwatchConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.cloudwatchConfig"></a>

```typescript
public readonly cloudwatchConfig: BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BedrockagentcoreOnlineEvaluationConfigOutputConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig">BedrockagentcoreOnlineEvaluationConfigOutputConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigRuleFiltersList <a name="BedrockagentcoreOnlineEvaluationConfigRuleFiltersList" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.get"></a>

```typescript
public get(index: number): BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters">BedrockagentcoreOnlineEvaluationConfigRuleFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters">BedrockagentcoreOnlineEvaluationConfigRuleFilters</a>[]

---


### BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.putValue"></a>

```typescript
public putValue(value: BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue">BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue</a>

---

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference">BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.valueInput">valueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue">BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters">BedrockagentcoreOnlineEvaluationConfigRuleFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.value"></a>

```typescript
public readonly value: BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference">BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue">BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters">BedrockagentcoreOnlineEvaluationConfigRuleFilters</a>

---


### BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resetBooleanValue">resetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resetDoubleValue">resetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBooleanValue` <a name="resetBooleanValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resetBooleanValue"></a>

```typescript
public resetBooleanValue(): void
```

##### `resetDoubleValue` <a name="resetDoubleValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resetDoubleValue"></a>

```typescript
public resetDoubleValue(): void
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.booleanValueInput">booleanValueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.doubleValueInput">doubleValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.booleanValue">booleanValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.doubleValue">doubleValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue">BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `booleanValueInput`<sup>Optional</sup> <a name="booleanValueInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.booleanValueInput"></a>

```typescript
public readonly booleanValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `doubleValueInput`<sup>Optional</sup> <a name="doubleValueInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.doubleValueInput"></a>

```typescript
public readonly doubleValueInput: number;
```

- *Type:* number

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `booleanValue`<sup>Required</sup> <a name="booleanValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.booleanValue"></a>

```typescript
public readonly booleanValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `doubleValue`<sup>Required</sup> <a name="doubleValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.doubleValue"></a>

```typescript
public readonly doubleValue: number;
```

- *Type:* number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue">BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue</a>

---


### BedrockagentcoreOnlineEvaluationConfigRuleOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSamplingConfig">putSamplingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSessionConfig">putSessionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetSessionConfig">resetSessionConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilters` <a name="putFilters" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putFilters"></a>

```typescript
public putFilters(value: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters">BedrockagentcoreOnlineEvaluationConfigRuleFilters</a>[]

---

##### `putSamplingConfig` <a name="putSamplingConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSamplingConfig"></a>

```typescript
public putSamplingConfig(value: BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSamplingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>

---

##### `putSessionConfig` <a name="putSessionConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSessionConfig"></a>

```typescript
public putSessionConfig(value: BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSessionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>

---

##### `resetFilters` <a name="resetFilters" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetFilters"></a>

```typescript
public resetFilters(): void
```

##### `resetSessionConfig` <a name="resetSessionConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetSessionConfig"></a>

```typescript
public resetSessionConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList">BedrockagentcoreOnlineEvaluationConfigRuleFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfig">samplingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfig">sessionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filtersInput">filtersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters">BedrockagentcoreOnlineEvaluationConfigRuleFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfigInput">samplingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfigInput">sessionConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filters"></a>

```typescript
public readonly filters: BedrockagentcoreOnlineEvaluationConfigRuleFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList">BedrockagentcoreOnlineEvaluationConfigRuleFiltersList</a>

---

##### `samplingConfig`<sup>Required</sup> <a name="samplingConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfig"></a>

```typescript
public readonly samplingConfig: BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference</a>

---

##### `sessionConfig`<sup>Required</sup> <a name="sessionConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfig"></a>

```typescript
public readonly sessionConfig: BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference</a>

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filtersInput"></a>

```typescript
public readonly filtersInput: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters">BedrockagentcoreOnlineEvaluationConfigRuleFilters</a>[]

---

##### `samplingConfigInput`<sup>Optional</sup> <a name="samplingConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfigInput"></a>

```typescript
public readonly samplingConfigInput: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>

---

##### `sessionConfigInput`<sup>Optional</sup> <a name="sessionConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfigInput"></a>

```typescript
public readonly sessionConfigInput: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>

---


### BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentageInput">samplingPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentage">samplingPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `samplingPercentageInput`<sup>Optional</sup> <a name="samplingPercentageInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentageInput"></a>

```typescript
public readonly samplingPercentageInput: number;
```

- *Type:* number

---

##### `samplingPercentage`<sup>Required</sup> <a name="samplingPercentage" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentage"></a>

```typescript
public readonly samplingPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resetSessionTimeoutMinutes">resetSessionTimeoutMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSessionTimeoutMinutes` <a name="resetSessionTimeoutMinutes" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resetSessionTimeoutMinutes"></a>

```typescript
public resetSessionTimeoutMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutesInput">sessionTimeoutMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutes">sessionTimeoutMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sessionTimeoutMinutesInput`<sup>Optional</sup> <a name="sessionTimeoutMinutesInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutesInput"></a>

```typescript
public readonly sessionTimeoutMinutesInput: number;
```

- *Type:* number

---

##### `sessionTimeoutMinutes`<sup>Required</sup> <a name="sessionTimeoutMinutes" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutes"></a>

```typescript
public readonly sessionTimeoutMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigTagsList <a name="BedrockagentcoreOnlineEvaluationConfigTagsList" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.get"></a>

```typescript
public get(index: number): BedrockagentcoreOnlineEvaluationConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags">BedrockagentcoreOnlineEvaluationConfigTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags">BedrockagentcoreOnlineEvaluationConfigTags</a>[]

---


### BedrockagentcoreOnlineEvaluationConfigTagsOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigTagsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags">BedrockagentcoreOnlineEvaluationConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags">BedrockagentcoreOnlineEvaluationConfigTags</a>

---



