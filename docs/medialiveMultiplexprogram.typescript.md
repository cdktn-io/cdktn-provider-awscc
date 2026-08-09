# `medialiveMultiplexprogram` Submodule <a name="`medialiveMultiplexprogram` Submodule" id="@cdktn/provider-awscc.medialiveMultiplexprogram"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveMultiplexprogram <a name="MedialiveMultiplexprogram" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram awscc_medialive_multiplexprogram}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer"></a>

```typescript
import { medialiveMultiplexprogram } from '@cdktn/provider-awscc'

new medialiveMultiplexprogram.MedialiveMultiplexprogram(scope: Construct, id: string, config?: MedialiveMultiplexprogramConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig">MedialiveMultiplexprogramConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig">MedialiveMultiplexprogramConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putMultiplexProgramSettings">putMultiplexProgramSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPacketIdentifiersMap">putPacketIdentifiersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPipelineDetails">putPipelineDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetMultiplexId">resetMultiplexId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetMultiplexProgramSettings">resetMultiplexProgramSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPacketIdentifiersMap">resetPacketIdentifiersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPipelineDetails">resetPipelineDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPreferredChannelPipeline">resetPreferredChannelPipeline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetProgramName">resetProgramName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMultiplexProgramSettings` <a name="putMultiplexProgramSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putMultiplexProgramSettings"></a>

```typescript
public putMultiplexProgramSettings(value: MedialiveMultiplexprogramMultiplexProgramSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putMultiplexProgramSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a>

---

##### `putPacketIdentifiersMap` <a name="putPacketIdentifiersMap" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPacketIdentifiersMap"></a>

```typescript
public putPacketIdentifiersMap(value: MedialiveMultiplexprogramPacketIdentifiersMap): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPacketIdentifiersMap.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a>

---

##### `putPipelineDetails` <a name="putPipelineDetails" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPipelineDetails"></a>

```typescript
public putPipelineDetails(value: IResolvable | MedialiveMultiplexprogramPipelineDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPipelineDetails.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>[]

---

##### `resetMultiplexId` <a name="resetMultiplexId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetMultiplexId"></a>

```typescript
public resetMultiplexId(): void
```

##### `resetMultiplexProgramSettings` <a name="resetMultiplexProgramSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetMultiplexProgramSettings"></a>

```typescript
public resetMultiplexProgramSettings(): void
```

##### `resetPacketIdentifiersMap` <a name="resetPacketIdentifiersMap" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPacketIdentifiersMap"></a>

```typescript
public resetPacketIdentifiersMap(): void
```

##### `resetPipelineDetails` <a name="resetPipelineDetails" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPipelineDetails"></a>

```typescript
public resetPipelineDetails(): void
```

##### `resetPreferredChannelPipeline` <a name="resetPreferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPreferredChannelPipeline"></a>

```typescript
public resetPreferredChannelPipeline(): void
```

##### `resetProgramName` <a name="resetProgramName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetProgramName"></a>

```typescript
public resetProgramName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MedialiveMultiplexprogram resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isConstruct"></a>

```typescript
import { medialiveMultiplexprogram } from '@cdktn/provider-awscc'

medialiveMultiplexprogram.MedialiveMultiplexprogram.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformElement"></a>

```typescript
import { medialiveMultiplexprogram } from '@cdktn/provider-awscc'

medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformResource"></a>

```typescript
import { medialiveMultiplexprogram } from '@cdktn/provider-awscc'

medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport"></a>

```typescript
import { medialiveMultiplexprogram } from '@cdktn/provider-awscc'

medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MedialiveMultiplexprogram resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MedialiveMultiplexprogram to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MedialiveMultiplexprogram that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveMultiplexprogram to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexProgramSettings">multiplexProgramSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.packetIdentifiersMap">packetIdentifiersMap</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference">MedialiveMultiplexprogramPacketIdentifiersMapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.pipelineDetails">pipelineDetails</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList">MedialiveMultiplexprogramPipelineDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexIdInput">multiplexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexProgramSettingsInput">multiplexProgramSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.packetIdentifiersMapInput">packetIdentifiersMapInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.pipelineDetailsInput">pipelineDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.preferredChannelPipelineInput">preferredChannelPipelineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.programNameInput">programNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexId">multiplexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.preferredChannelPipeline">preferredChannelPipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.programName">programName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `multiplexProgramSettings`<sup>Required</sup> <a name="multiplexProgramSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexProgramSettings"></a>

```typescript
public readonly multiplexProgramSettings: MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference</a>

---

##### `packetIdentifiersMap`<sup>Required</sup> <a name="packetIdentifiersMap" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.packetIdentifiersMap"></a>

```typescript
public readonly packetIdentifiersMap: MedialiveMultiplexprogramPacketIdentifiersMapOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference">MedialiveMultiplexprogramPacketIdentifiersMapOutputReference</a>

---

##### `pipelineDetails`<sup>Required</sup> <a name="pipelineDetails" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.pipelineDetails"></a>

```typescript
public readonly pipelineDetails: MedialiveMultiplexprogramPipelineDetailsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList">MedialiveMultiplexprogramPipelineDetailsList</a>

---

##### `multiplexIdInput`<sup>Optional</sup> <a name="multiplexIdInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexIdInput"></a>

```typescript
public readonly multiplexIdInput: string;
```

- *Type:* string

---

##### `multiplexProgramSettingsInput`<sup>Optional</sup> <a name="multiplexProgramSettingsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexProgramSettingsInput"></a>

```typescript
public readonly multiplexProgramSettingsInput: IResolvable | MedialiveMultiplexprogramMultiplexProgramSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a>

---

##### `packetIdentifiersMapInput`<sup>Optional</sup> <a name="packetIdentifiersMapInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.packetIdentifiersMapInput"></a>

```typescript
public readonly packetIdentifiersMapInput: IResolvable | MedialiveMultiplexprogramPacketIdentifiersMap;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a>

---

##### `pipelineDetailsInput`<sup>Optional</sup> <a name="pipelineDetailsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.pipelineDetailsInput"></a>

```typescript
public readonly pipelineDetailsInput: IResolvable | MedialiveMultiplexprogramPipelineDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>[]

---

##### `preferredChannelPipelineInput`<sup>Optional</sup> <a name="preferredChannelPipelineInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.preferredChannelPipelineInput"></a>

```typescript
public readonly preferredChannelPipelineInput: string;
```

- *Type:* string

---

##### `programNameInput`<sup>Optional</sup> <a name="programNameInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.programNameInput"></a>

```typescript
public readonly programNameInput: string;
```

- *Type:* string

---

##### `multiplexId`<sup>Required</sup> <a name="multiplexId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexId"></a>

```typescript
public readonly multiplexId: string;
```

- *Type:* string

---

##### `preferredChannelPipeline`<sup>Required</sup> <a name="preferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.preferredChannelPipeline"></a>

```typescript
public readonly preferredChannelPipeline: string;
```

- *Type:* string

---

##### `programName`<sup>Required</sup> <a name="programName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.programName"></a>

```typescript
public readonly programName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveMultiplexprogramConfig <a name="MedialiveMultiplexprogramConfig" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.Initializer"></a>

```typescript
import { medialiveMultiplexprogram } from '@cdktn/provider-awscc'

const medialiveMultiplexprogramConfig: medialiveMultiplexprogram.MedialiveMultiplexprogramConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.multiplexId">multiplexId</a></code> | <code>string</code> | The ID of the multiplex that the program belongs to. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.multiplexProgramSettings">multiplexProgramSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a></code> | The settings for this multiplex program. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.packetIdentifiersMap">packetIdentifiersMap</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a></code> | The packet identifier map for this multiplex program. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.pipelineDetails">pipelineDetails</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>[]</code> | Contains information about the current sources for the specified program in the specified multiplex. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.preferredChannelPipeline">preferredChannelPipeline</a></code> | <code>string</code> | The settings for this multiplex program. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.programName">programName</a></code> | <code>string</code> | The name of the multiplex program. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `multiplexId`<sup>Optional</sup> <a name="multiplexId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.multiplexId"></a>

```typescript
public readonly multiplexId: string;
```

- *Type:* string

The ID of the multiplex that the program belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#multiplex_id MedialiveMultiplexprogram#multiplex_id}

---

##### `multiplexProgramSettings`<sup>Optional</sup> <a name="multiplexProgramSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.multiplexProgramSettings"></a>

```typescript
public readonly multiplexProgramSettings: MedialiveMultiplexprogramMultiplexProgramSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a>

The settings for this multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#multiplex_program_settings MedialiveMultiplexprogram#multiplex_program_settings}

---

##### `packetIdentifiersMap`<sup>Optional</sup> <a name="packetIdentifiersMap" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.packetIdentifiersMap"></a>

```typescript
public readonly packetIdentifiersMap: MedialiveMultiplexprogramPacketIdentifiersMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a>

The packet identifier map for this multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#packet_identifiers_map MedialiveMultiplexprogram#packet_identifiers_map}

---

##### `pipelineDetails`<sup>Optional</sup> <a name="pipelineDetails" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.pipelineDetails"></a>

```typescript
public readonly pipelineDetails: IResolvable | MedialiveMultiplexprogramPipelineDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>[]

Contains information about the current sources for the specified program in the specified multiplex.

Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#pipeline_details MedialiveMultiplexprogram#pipeline_details}

---

##### `preferredChannelPipeline`<sup>Optional</sup> <a name="preferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.preferredChannelPipeline"></a>

```typescript
public readonly preferredChannelPipeline: string;
```

- *Type:* string

The settings for this multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#preferred_channel_pipeline MedialiveMultiplexprogram#preferred_channel_pipeline}

---

##### `programName`<sup>Optional</sup> <a name="programName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.programName"></a>

```typescript
public readonly programName: string;
```

- *Type:* string

The name of the multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#program_name MedialiveMultiplexprogram#program_name}

---

### MedialiveMultiplexprogramMultiplexProgramSettings <a name="MedialiveMultiplexprogramMultiplexProgramSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.Initializer"></a>

```typescript
import { medialiveMultiplexprogram } from '@cdktn/provider-awscc'

const medialiveMultiplexprogramMultiplexProgramSettings: medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.preferredChannelPipeline">preferredChannelPipeline</a></code> | <code>string</code> | Indicates which pipeline is preferred by the multiplex for program ingest. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.programNumber">programNumber</a></code> | <code>number</code> | Unique program number. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.serviceDescriptor">serviceDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a></code> | Transport stream service descriptor configuration for the Multiplex program. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.videoSettings">videoSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a></code> | Program video settings configuration. |

---

##### `preferredChannelPipeline`<sup>Optional</sup> <a name="preferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.preferredChannelPipeline"></a>

```typescript
public readonly preferredChannelPipeline: string;
```

- *Type:* string

Indicates which pipeline is preferred by the multiplex for program ingest.

If set to \"PIPELINE_0\" or \"PIPELINE_1\" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline,
it will switch back once that ingest is healthy again. If set to \"CURRENTLY_ACTIVE\",
it will not switch back to the other pipeline based on it recovering to a healthy state,
it will only switch if the active pipeline becomes unhealthy.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#preferred_channel_pipeline MedialiveMultiplexprogram#preferred_channel_pipeline}

---

##### `programNumber`<sup>Optional</sup> <a name="programNumber" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.programNumber"></a>

```typescript
public readonly programNumber: number;
```

- *Type:* number

Unique program number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#program_number MedialiveMultiplexprogram#program_number}

---

##### `serviceDescriptor`<sup>Optional</sup> <a name="serviceDescriptor" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.serviceDescriptor"></a>

```typescript
public readonly serviceDescriptor: MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor;
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a>

Transport stream service descriptor configuration for the Multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#service_descriptor MedialiveMultiplexprogram#service_descriptor}

---

##### `videoSettings`<sup>Optional</sup> <a name="videoSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.videoSettings"></a>

```typescript
public readonly videoSettings: MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a>

Program video settings configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#video_settings MedialiveMultiplexprogram#video_settings}

---

### MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor <a name="MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.Initializer"></a>

```typescript
import { medialiveMultiplexprogram } from '@cdktn/provider-awscc'

const medialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor: medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.property.providerName">providerName</a></code> | <code>string</code> | Name of the provider. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.property.serviceName">serviceName</a></code> | <code>string</code> | Name of the service. |

---

##### `providerName`<sup>Optional</sup> <a name="providerName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Name of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#provider_name MedialiveMultiplexprogram#provider_name}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#service_name MedialiveMultiplexprogram#service_name}

---

### MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings <a name="MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.Initializer"></a>

```typescript
import { medialiveMultiplexprogram } from '@cdktn/provider-awscc'

const medialiveMultiplexprogramMultiplexProgramSettingsVideoSettings: medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.property.constantBitrate">constantBitrate</a></code> | <code>number</code> | The constant bitrate configuration for the video encode. When this field is defined, StatmuxSettings must be undefined. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.property.statmuxSettings">statmuxSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a></code> | Statmux rate control settings. When this field is defined, ConstantBitrate must be undefined. |

---

##### `constantBitrate`<sup>Optional</sup> <a name="constantBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.property.constantBitrate"></a>

```typescript
public readonly constantBitrate: number;
```

- *Type:* number

The constant bitrate configuration for the video encode. When this field is defined, StatmuxSettings must be undefined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#constant_bitrate MedialiveMultiplexprogram#constant_bitrate}

---

##### `statmuxSettings`<sup>Optional</sup> <a name="statmuxSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.property.statmuxSettings"></a>

```typescript
public readonly statmuxSettings: MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>

Statmux rate control settings. When this field is defined, ConstantBitrate must be undefined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#statmux_settings MedialiveMultiplexprogram#statmux_settings}

---

### MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings <a name="MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.Initializer"></a>

```typescript
import { medialiveMultiplexprogram } from '@cdktn/provider-awscc'

const medialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings: medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.maximumBitrate">maximumBitrate</a></code> | <code>number</code> | Maximum statmux bitrate. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.minimumBitrate">minimumBitrate</a></code> | <code>number</code> | Minimum statmux bitrate. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.priority">priority</a></code> | <code>number</code> | The purpose of the priority is to use a combination of the\nmultiplex rate control algorithm and the QVBR capability of the\nencoder to prioritize the video quality of some channels in a\nmultiplex over others. |

---

##### `maximumBitrate`<sup>Optional</sup> <a name="maximumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.maximumBitrate"></a>

```typescript
public readonly maximumBitrate: number;
```

- *Type:* number

Maximum statmux bitrate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#maximum_bitrate MedialiveMultiplexprogram#maximum_bitrate}

---

##### `minimumBitrate`<sup>Optional</sup> <a name="minimumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.minimumBitrate"></a>

```typescript
public readonly minimumBitrate: number;
```

- *Type:* number

Minimum statmux bitrate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#minimum_bitrate MedialiveMultiplexprogram#minimum_bitrate}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The purpose of the priority is to use a combination of the\nmultiplex rate control algorithm and the QVBR capability of the\nencoder to prioritize the video quality of some channels in a\nmultiplex over others.

Channels that have a higher priority will\nget higher video quality at the expense of the video quality of\nother channels in the multiplex with lower priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#priority MedialiveMultiplexprogram#priority}

---

### MedialiveMultiplexprogramPacketIdentifiersMap <a name="MedialiveMultiplexprogramPacketIdentifiersMap" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.Initializer"></a>

```typescript
import { medialiveMultiplexprogram } from '@cdktn/provider-awscc'

const medialiveMultiplexprogramPacketIdentifiersMap: medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.audioPids">audioPids</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#audio_pids MedialiveMultiplexprogram#audio_pids}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.dvbSubPids">dvbSubPids</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#dvb_sub_pids MedialiveMultiplexprogram#dvb_sub_pids}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.dvbTeletextPid">dvbTeletextPid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#dvb_teletext_pid MedialiveMultiplexprogram#dvb_teletext_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.etvPlatformPid">etvPlatformPid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#etv_platform_pid MedialiveMultiplexprogram#etv_platform_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.etvSignalPid">etvSignalPid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#etv_signal_pid MedialiveMultiplexprogram#etv_signal_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.klvDataPids">klvDataPids</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#klv_data_pids MedialiveMultiplexprogram#klv_data_pids}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.pcrPid">pcrPid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#pcr_pid MedialiveMultiplexprogram#pcr_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.pmtPid">pmtPid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#pmt_pid MedialiveMultiplexprogram#pmt_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.privateMetadataPid">privateMetadataPid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#private_metadata_pid MedialiveMultiplexprogram#private_metadata_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.scte27Pids">scte27Pids</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#scte_27_pids MedialiveMultiplexprogram#scte_27_pids}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.scte35Pid">scte35Pid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#scte_35_pid MedialiveMultiplexprogram#scte_35_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.timedMetadataPid">timedMetadataPid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#timed_metadata_pid MedialiveMultiplexprogram#timed_metadata_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.videoPid">videoPid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#video_pid MedialiveMultiplexprogram#video_pid}. |

---

##### `audioPids`<sup>Optional</sup> <a name="audioPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.audioPids"></a>

```typescript
public readonly audioPids: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#audio_pids MedialiveMultiplexprogram#audio_pids}.

---

##### `dvbSubPids`<sup>Optional</sup> <a name="dvbSubPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.dvbSubPids"></a>

```typescript
public readonly dvbSubPids: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#dvb_sub_pids MedialiveMultiplexprogram#dvb_sub_pids}.

---

##### `dvbTeletextPid`<sup>Optional</sup> <a name="dvbTeletextPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.dvbTeletextPid"></a>

```typescript
public readonly dvbTeletextPid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#dvb_teletext_pid MedialiveMultiplexprogram#dvb_teletext_pid}.

---

##### `etvPlatformPid`<sup>Optional</sup> <a name="etvPlatformPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.etvPlatformPid"></a>

```typescript
public readonly etvPlatformPid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#etv_platform_pid MedialiveMultiplexprogram#etv_platform_pid}.

---

##### `etvSignalPid`<sup>Optional</sup> <a name="etvSignalPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.etvSignalPid"></a>

```typescript
public readonly etvSignalPid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#etv_signal_pid MedialiveMultiplexprogram#etv_signal_pid}.

---

##### `klvDataPids`<sup>Optional</sup> <a name="klvDataPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.klvDataPids"></a>

```typescript
public readonly klvDataPids: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#klv_data_pids MedialiveMultiplexprogram#klv_data_pids}.

---

##### `pcrPid`<sup>Optional</sup> <a name="pcrPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.pcrPid"></a>

```typescript
public readonly pcrPid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#pcr_pid MedialiveMultiplexprogram#pcr_pid}.

---

##### `pmtPid`<sup>Optional</sup> <a name="pmtPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.pmtPid"></a>

```typescript
public readonly pmtPid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#pmt_pid MedialiveMultiplexprogram#pmt_pid}.

---

##### `privateMetadataPid`<sup>Optional</sup> <a name="privateMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.privateMetadataPid"></a>

```typescript
public readonly privateMetadataPid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#private_metadata_pid MedialiveMultiplexprogram#private_metadata_pid}.

---

##### `scte27Pids`<sup>Optional</sup> <a name="scte27Pids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.scte27Pids"></a>

```typescript
public readonly scte27Pids: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#scte_27_pids MedialiveMultiplexprogram#scte_27_pids}.

---

##### `scte35Pid`<sup>Optional</sup> <a name="scte35Pid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.scte35Pid"></a>

```typescript
public readonly scte35Pid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#scte_35_pid MedialiveMultiplexprogram#scte_35_pid}.

---

##### `timedMetadataPid`<sup>Optional</sup> <a name="timedMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.timedMetadataPid"></a>

```typescript
public readonly timedMetadataPid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#timed_metadata_pid MedialiveMultiplexprogram#timed_metadata_pid}.

---

##### `videoPid`<sup>Optional</sup> <a name="videoPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.videoPid"></a>

```typescript
public readonly videoPid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#video_pid MedialiveMultiplexprogram#video_pid}.

---

### MedialiveMultiplexprogramPipelineDetails <a name="MedialiveMultiplexprogramPipelineDetails" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails.Initializer"></a>

```typescript
import { medialiveMultiplexprogram } from '@cdktn/provider-awscc'

const medialiveMultiplexprogramPipelineDetails: medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails.property.activeChannelPipeline">activeChannelPipeline</a></code> | <code>string</code> | Identifies the channel pipeline that is currently active for the pipeline (identified by PipelineId) in the multiplex. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails.property.pipelineId">pipelineId</a></code> | <code>string</code> | Identifies a specific pipeline in the multiplex. |

---

##### `activeChannelPipeline`<sup>Optional</sup> <a name="activeChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails.property.activeChannelPipeline"></a>

```typescript
public readonly activeChannelPipeline: string;
```

- *Type:* string

Identifies the channel pipeline that is currently active for the pipeline (identified by PipelineId) in the multiplex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#active_channel_pipeline MedialiveMultiplexprogram#active_channel_pipeline}

---

##### `pipelineId`<sup>Optional</sup> <a name="pipelineId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

Identifies a specific pipeline in the multiplex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplexprogram#pipeline_id MedialiveMultiplexprogram#pipeline_id}

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference <a name="MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer"></a>

```typescript
import { medialiveMultiplexprogram } from '@cdktn/provider-awscc'

new medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putServiceDescriptor">putServiceDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putVideoSettings">putVideoSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetPreferredChannelPipeline">resetPreferredChannelPipeline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetProgramNumber">resetProgramNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetServiceDescriptor">resetServiceDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetVideoSettings">resetVideoSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServiceDescriptor` <a name="putServiceDescriptor" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putServiceDescriptor"></a>

```typescript
public putServiceDescriptor(value: MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putServiceDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a>

---

##### `putVideoSettings` <a name="putVideoSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putVideoSettings"></a>

```typescript
public putVideoSettings(value: MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putVideoSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a>

---

##### `resetPreferredChannelPipeline` <a name="resetPreferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetPreferredChannelPipeline"></a>

```typescript
public resetPreferredChannelPipeline(): void
```

##### `resetProgramNumber` <a name="resetProgramNumber" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetProgramNumber"></a>

```typescript
public resetProgramNumber(): void
```

##### `resetServiceDescriptor` <a name="resetServiceDescriptor" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetServiceDescriptor"></a>

```typescript
public resetServiceDescriptor(): void
```

##### `resetVideoSettings` <a name="resetVideoSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetVideoSettings"></a>

```typescript
public resetVideoSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptor">serviceDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettings">videoSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipelineInput">preferredChannelPipelineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumberInput">programNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptorInput">serviceDescriptorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettingsInput">videoSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipeline">preferredChannelPipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumber">programNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceDescriptor`<sup>Required</sup> <a name="serviceDescriptor" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptor"></a>

```typescript
public readonly serviceDescriptor: MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference</a>

---

##### `videoSettings`<sup>Required</sup> <a name="videoSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettings"></a>

```typescript
public readonly videoSettings: MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference</a>

---

##### `preferredChannelPipelineInput`<sup>Optional</sup> <a name="preferredChannelPipelineInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipelineInput"></a>

```typescript
public readonly preferredChannelPipelineInput: string;
```

- *Type:* string

---

##### `programNumberInput`<sup>Optional</sup> <a name="programNumberInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumberInput"></a>

```typescript
public readonly programNumberInput: number;
```

- *Type:* number

---

##### `serviceDescriptorInput`<sup>Optional</sup> <a name="serviceDescriptorInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptorInput"></a>

```typescript
public readonly serviceDescriptorInput: IResolvable | MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a>

---

##### `videoSettingsInput`<sup>Optional</sup> <a name="videoSettingsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettingsInput"></a>

```typescript
public readonly videoSettingsInput: IResolvable | MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a>

---

##### `preferredChannelPipeline`<sup>Required</sup> <a name="preferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipeline"></a>

```typescript
public readonly preferredChannelPipeline: string;
```

- *Type:* string

---

##### `programNumber`<sup>Required</sup> <a name="programNumber" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumber"></a>

```typescript
public readonly programNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MedialiveMultiplexprogramMultiplexProgramSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a>

---


### MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference <a name="MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer"></a>

```typescript
import { medialiveMultiplexprogram } from '@cdktn/provider-awscc'

new medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resetProviderName">resetProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProviderName` <a name="resetProviderName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resetProviderName"></a>

```typescript
public resetProviderName(): void
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a>

---


### MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference <a name="MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer"></a>

```typescript
import { medialiveMultiplexprogram } from '@cdktn/provider-awscc'

new medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.putStatmuxSettings">putStatmuxSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resetConstantBitrate">resetConstantBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resetStatmuxSettings">resetStatmuxSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStatmuxSettings` <a name="putStatmuxSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.putStatmuxSettings"></a>

```typescript
public putStatmuxSettings(value: MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.putStatmuxSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>

---

##### `resetConstantBitrate` <a name="resetConstantBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resetConstantBitrate"></a>

```typescript
public resetConstantBitrate(): void
```

##### `resetStatmuxSettings` <a name="resetStatmuxSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resetStatmuxSettings"></a>

```typescript
public resetStatmuxSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettings">statmuxSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrateInput">constantBitrateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettingsInput">statmuxSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrate">constantBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statmuxSettings`<sup>Required</sup> <a name="statmuxSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettings"></a>

```typescript
public readonly statmuxSettings: MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference</a>

---

##### `constantBitrateInput`<sup>Optional</sup> <a name="constantBitrateInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrateInput"></a>

```typescript
public readonly constantBitrateInput: number;
```

- *Type:* number

---

##### `statmuxSettingsInput`<sup>Optional</sup> <a name="statmuxSettingsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettingsInput"></a>

```typescript
public readonly statmuxSettingsInput: IResolvable | MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>

---

##### `constantBitrate`<sup>Required</sup> <a name="constantBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrate"></a>

```typescript
public readonly constantBitrate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a>

---


### MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference <a name="MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer"></a>

```typescript
import { medialiveMultiplexprogram } from '@cdktn/provider-awscc'

new medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMaximumBitrate">resetMaximumBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMinimumBitrate">resetMinimumBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetPriority">resetPriority</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumBitrate` <a name="resetMaximumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMaximumBitrate"></a>

```typescript
public resetMaximumBitrate(): void
```

##### `resetMinimumBitrate` <a name="resetMinimumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMinimumBitrate"></a>

```typescript
public resetMinimumBitrate(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrateInput">maximumBitrateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrateInput">minimumBitrateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrate">maximumBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrate">minimumBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumBitrateInput`<sup>Optional</sup> <a name="maximumBitrateInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrateInput"></a>

```typescript
public readonly maximumBitrateInput: number;
```

- *Type:* number

---

##### `minimumBitrateInput`<sup>Optional</sup> <a name="minimumBitrateInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrateInput"></a>

```typescript
public readonly minimumBitrateInput: number;
```

- *Type:* number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `maximumBitrate`<sup>Required</sup> <a name="maximumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrate"></a>

```typescript
public readonly maximumBitrate: number;
```

- *Type:* number

---

##### `minimumBitrate`<sup>Required</sup> <a name="minimumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrate"></a>

```typescript
public readonly minimumBitrate: number;
```

- *Type:* number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>

---


### MedialiveMultiplexprogramPacketIdentifiersMapOutputReference <a name="MedialiveMultiplexprogramPacketIdentifiersMapOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer"></a>

```typescript
import { medialiveMultiplexprogram } from '@cdktn/provider-awscc'

new medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetAudioPids">resetAudioPids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetDvbSubPids">resetDvbSubPids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetDvbTeletextPid">resetDvbTeletextPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetEtvPlatformPid">resetEtvPlatformPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetEtvSignalPid">resetEtvSignalPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetKlvDataPids">resetKlvDataPids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPcrPid">resetPcrPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPmtPid">resetPmtPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPrivateMetadataPid">resetPrivateMetadataPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetScte27Pids">resetScte27Pids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetScte35Pid">resetScte35Pid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetTimedMetadataPid">resetTimedMetadataPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetVideoPid">resetVideoPid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudioPids` <a name="resetAudioPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetAudioPids"></a>

```typescript
public resetAudioPids(): void
```

##### `resetDvbSubPids` <a name="resetDvbSubPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetDvbSubPids"></a>

```typescript
public resetDvbSubPids(): void
```

##### `resetDvbTeletextPid` <a name="resetDvbTeletextPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetDvbTeletextPid"></a>

```typescript
public resetDvbTeletextPid(): void
```

##### `resetEtvPlatformPid` <a name="resetEtvPlatformPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetEtvPlatformPid"></a>

```typescript
public resetEtvPlatformPid(): void
```

##### `resetEtvSignalPid` <a name="resetEtvSignalPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetEtvSignalPid"></a>

```typescript
public resetEtvSignalPid(): void
```

##### `resetKlvDataPids` <a name="resetKlvDataPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetKlvDataPids"></a>

```typescript
public resetKlvDataPids(): void
```

##### `resetPcrPid` <a name="resetPcrPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPcrPid"></a>

```typescript
public resetPcrPid(): void
```

##### `resetPmtPid` <a name="resetPmtPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPmtPid"></a>

```typescript
public resetPmtPid(): void
```

##### `resetPrivateMetadataPid` <a name="resetPrivateMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPrivateMetadataPid"></a>

```typescript
public resetPrivateMetadataPid(): void
```

##### `resetScte27Pids` <a name="resetScte27Pids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetScte27Pids"></a>

```typescript
public resetScte27Pids(): void
```

##### `resetScte35Pid` <a name="resetScte35Pid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetScte35Pid"></a>

```typescript
public resetScte35Pid(): void
```

##### `resetTimedMetadataPid` <a name="resetTimedMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetTimedMetadataPid"></a>

```typescript
public resetTimedMetadataPid(): void
```

##### `resetVideoPid` <a name="resetVideoPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetVideoPid"></a>

```typescript
public resetVideoPid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPidsInput">audioPidsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPidsInput">dvbSubPidsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPidInput">dvbTeletextPidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPidInput">etvPlatformPidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPidInput">etvSignalPidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPidsInput">klvDataPidsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPidInput">pcrPidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPidInput">pmtPidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPidInput">privateMetadataPidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27PidsInput">scte27PidsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35PidInput">scte35PidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPidInput">timedMetadataPidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPidInput">videoPidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPids">audioPids</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPids">dvbSubPids</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPid">dvbTeletextPid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPid">etvPlatformPid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPid">etvSignalPid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPids">klvDataPids</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPid">pcrPid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPid">pmtPid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPid">privateMetadataPid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27Pids">scte27Pids</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35Pid">scte35Pid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPid">timedMetadataPid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPid">videoPid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioPidsInput`<sup>Optional</sup> <a name="audioPidsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPidsInput"></a>

```typescript
public readonly audioPidsInput: number[];
```

- *Type:* number[]

---

##### `dvbSubPidsInput`<sup>Optional</sup> <a name="dvbSubPidsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPidsInput"></a>

```typescript
public readonly dvbSubPidsInput: number[];
```

- *Type:* number[]

---

##### `dvbTeletextPidInput`<sup>Optional</sup> <a name="dvbTeletextPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPidInput"></a>

```typescript
public readonly dvbTeletextPidInput: number;
```

- *Type:* number

---

##### `etvPlatformPidInput`<sup>Optional</sup> <a name="etvPlatformPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPidInput"></a>

```typescript
public readonly etvPlatformPidInput: number;
```

- *Type:* number

---

##### `etvSignalPidInput`<sup>Optional</sup> <a name="etvSignalPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPidInput"></a>

```typescript
public readonly etvSignalPidInput: number;
```

- *Type:* number

---

##### `klvDataPidsInput`<sup>Optional</sup> <a name="klvDataPidsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPidsInput"></a>

```typescript
public readonly klvDataPidsInput: number[];
```

- *Type:* number[]

---

##### `pcrPidInput`<sup>Optional</sup> <a name="pcrPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPidInput"></a>

```typescript
public readonly pcrPidInput: number;
```

- *Type:* number

---

##### `pmtPidInput`<sup>Optional</sup> <a name="pmtPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPidInput"></a>

```typescript
public readonly pmtPidInput: number;
```

- *Type:* number

---

##### `privateMetadataPidInput`<sup>Optional</sup> <a name="privateMetadataPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPidInput"></a>

```typescript
public readonly privateMetadataPidInput: number;
```

- *Type:* number

---

##### `scte27PidsInput`<sup>Optional</sup> <a name="scte27PidsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27PidsInput"></a>

```typescript
public readonly scte27PidsInput: number[];
```

- *Type:* number[]

---

##### `scte35PidInput`<sup>Optional</sup> <a name="scte35PidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35PidInput"></a>

```typescript
public readonly scte35PidInput: number;
```

- *Type:* number

---

##### `timedMetadataPidInput`<sup>Optional</sup> <a name="timedMetadataPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPidInput"></a>

```typescript
public readonly timedMetadataPidInput: number;
```

- *Type:* number

---

##### `videoPidInput`<sup>Optional</sup> <a name="videoPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPidInput"></a>

```typescript
public readonly videoPidInput: number;
```

- *Type:* number

---

##### `audioPids`<sup>Required</sup> <a name="audioPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPids"></a>

```typescript
public readonly audioPids: number[];
```

- *Type:* number[]

---

##### `dvbSubPids`<sup>Required</sup> <a name="dvbSubPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPids"></a>

```typescript
public readonly dvbSubPids: number[];
```

- *Type:* number[]

---

##### `dvbTeletextPid`<sup>Required</sup> <a name="dvbTeletextPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPid"></a>

```typescript
public readonly dvbTeletextPid: number;
```

- *Type:* number

---

##### `etvPlatformPid`<sup>Required</sup> <a name="etvPlatformPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPid"></a>

```typescript
public readonly etvPlatformPid: number;
```

- *Type:* number

---

##### `etvSignalPid`<sup>Required</sup> <a name="etvSignalPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPid"></a>

```typescript
public readonly etvSignalPid: number;
```

- *Type:* number

---

##### `klvDataPids`<sup>Required</sup> <a name="klvDataPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPids"></a>

```typescript
public readonly klvDataPids: number[];
```

- *Type:* number[]

---

##### `pcrPid`<sup>Required</sup> <a name="pcrPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPid"></a>

```typescript
public readonly pcrPid: number;
```

- *Type:* number

---

##### `pmtPid`<sup>Required</sup> <a name="pmtPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPid"></a>

```typescript
public readonly pmtPid: number;
```

- *Type:* number

---

##### `privateMetadataPid`<sup>Required</sup> <a name="privateMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPid"></a>

```typescript
public readonly privateMetadataPid: number;
```

- *Type:* number

---

##### `scte27Pids`<sup>Required</sup> <a name="scte27Pids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27Pids"></a>

```typescript
public readonly scte27Pids: number[];
```

- *Type:* number[]

---

##### `scte35Pid`<sup>Required</sup> <a name="scte35Pid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35Pid"></a>

```typescript
public readonly scte35Pid: number;
```

- *Type:* number

---

##### `timedMetadataPid`<sup>Required</sup> <a name="timedMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPid"></a>

```typescript
public readonly timedMetadataPid: number;
```

- *Type:* number

---

##### `videoPid`<sup>Required</sup> <a name="videoPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPid"></a>

```typescript
public readonly videoPid: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MedialiveMultiplexprogramPacketIdentifiersMap;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a>

---


### MedialiveMultiplexprogramPipelineDetailsList <a name="MedialiveMultiplexprogramPipelineDetailsList" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer"></a>

```typescript
import { medialiveMultiplexprogram } from '@cdktn/provider-awscc'

new medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.get"></a>

```typescript
public get(index: number): MedialiveMultiplexprogramPipelineDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MedialiveMultiplexprogramPipelineDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>[]

---


### MedialiveMultiplexprogramPipelineDetailsOutputReference <a name="MedialiveMultiplexprogramPipelineDetailsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer"></a>

```typescript
import { medialiveMultiplexprogram } from '@cdktn/provider-awscc'

new medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resetActiveChannelPipeline">resetActiveChannelPipeline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resetPipelineId">resetPipelineId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveChannelPipeline` <a name="resetActiveChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resetActiveChannelPipeline"></a>

```typescript
public resetActiveChannelPipeline(): void
```

##### `resetPipelineId` <a name="resetPipelineId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resetPipelineId"></a>

```typescript
public resetPipelineId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipelineInput">activeChannelPipelineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineIdInput">pipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipeline">activeChannelPipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeChannelPipelineInput`<sup>Optional</sup> <a name="activeChannelPipelineInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipelineInput"></a>

```typescript
public readonly activeChannelPipelineInput: string;
```

- *Type:* string

---

##### `pipelineIdInput`<sup>Optional</sup> <a name="pipelineIdInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineIdInput"></a>

```typescript
public readonly pipelineIdInput: string;
```

- *Type:* string

---

##### `activeChannelPipeline`<sup>Required</sup> <a name="activeChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipeline"></a>

```typescript
public readonly activeChannelPipeline: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MedialiveMultiplexprogramPipelineDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>

---



