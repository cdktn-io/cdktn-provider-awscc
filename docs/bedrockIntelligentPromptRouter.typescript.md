# `bedrockIntelligentPromptRouter` Submodule <a name="`bedrockIntelligentPromptRouter` Submodule" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockIntelligentPromptRouter <a name="BedrockIntelligentPromptRouter" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router awscc_bedrock_intelligent_prompt_router}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer"></a>

```typescript
import { bedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

new bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter(scope: Construct, id: string, config: BedrockIntelligentPromptRouterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig">BedrockIntelligentPromptRouterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig">BedrockIntelligentPromptRouterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putFallbackModel">putFallbackModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putModels">putModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putRoutingCriteria">putRoutingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFallbackModel` <a name="putFallbackModel" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putFallbackModel"></a>

```typescript
public putFallbackModel(value: BedrockIntelligentPromptRouterFallbackModel): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putFallbackModel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a>

---

##### `putModels` <a name="putModels" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putModels"></a>

```typescript
public putModels(value: IResolvable | BedrockIntelligentPromptRouterModels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putModels.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>[]

---

##### `putRoutingCriteria` <a name="putRoutingCriteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putRoutingCriteria"></a>

```typescript
public putRoutingCriteria(value: BedrockIntelligentPromptRouterRoutingCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putRoutingCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putTags"></a>

```typescript
public putTags(value: IResolvable | BedrockIntelligentPromptRouterTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockIntelligentPromptRouter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isConstruct"></a>

```typescript
import { bedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformElement"></a>

```typescript
import { bedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformResource"></a>

```typescript
import { bedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport"></a>

```typescript
import { bedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BedrockIntelligentPromptRouter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockIntelligentPromptRouter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockIntelligentPromptRouter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockIntelligentPromptRouter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fallbackModel">fallbackModel</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference">BedrockIntelligentPromptRouterFallbackModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.models">models</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList">BedrockIntelligentPromptRouterModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterArn">promptRouterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.routingCriteria">routingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference">BedrockIntelligentPromptRouterRoutingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList">BedrockIntelligentPromptRouterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fallbackModelInput">fallbackModelInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.modelsInput">modelsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterNameInput">promptRouterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.routingCriteriaInput">routingCriteriaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterName">promptRouterName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `fallbackModel`<sup>Required</sup> <a name="fallbackModel" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fallbackModel"></a>

```typescript
public readonly fallbackModel: BedrockIntelligentPromptRouterFallbackModelOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference">BedrockIntelligentPromptRouterFallbackModelOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.models"></a>

```typescript
public readonly models: BedrockIntelligentPromptRouterModelsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList">BedrockIntelligentPromptRouterModelsList</a>

---

##### `promptRouterArn`<sup>Required</sup> <a name="promptRouterArn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterArn"></a>

```typescript
public readonly promptRouterArn: string;
```

- *Type:* string

---

##### `routingCriteria`<sup>Required</sup> <a name="routingCriteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.routingCriteria"></a>

```typescript
public readonly routingCriteria: BedrockIntelligentPromptRouterRoutingCriteriaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference">BedrockIntelligentPromptRouterRoutingCriteriaOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tags"></a>

```typescript
public readonly tags: BedrockIntelligentPromptRouterTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList">BedrockIntelligentPromptRouterTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fallbackModelInput`<sup>Optional</sup> <a name="fallbackModelInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fallbackModelInput"></a>

```typescript
public readonly fallbackModelInput: IResolvable | BedrockIntelligentPromptRouterFallbackModel;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a>

---

##### `modelsInput`<sup>Optional</sup> <a name="modelsInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.modelsInput"></a>

```typescript
public readonly modelsInput: IResolvable | BedrockIntelligentPromptRouterModels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>[]

---

##### `promptRouterNameInput`<sup>Optional</sup> <a name="promptRouterNameInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterNameInput"></a>

```typescript
public readonly promptRouterNameInput: string;
```

- *Type:* string

---

##### `routingCriteriaInput`<sup>Optional</sup> <a name="routingCriteriaInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.routingCriteriaInput"></a>

```typescript
public readonly routingCriteriaInput: IResolvable | BedrockIntelligentPromptRouterRoutingCriteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | BedrockIntelligentPromptRouterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `promptRouterName`<sup>Required</sup> <a name="promptRouterName" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterName"></a>

```typescript
public readonly promptRouterName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockIntelligentPromptRouterConfig <a name="BedrockIntelligentPromptRouterConfig" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.Initializer"></a>

```typescript
import { bedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

const bedrockIntelligentPromptRouterConfig: bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.fallbackModel">fallbackModel</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a></code> | Model configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.models">models</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>[]</code> | List of model configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.promptRouterName">promptRouterName</a></code> | <code>string</code> | Name of the Prompt Router. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.routingCriteria">routingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a></code> | Represents the criteria used for routing requests. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.description">description</a></code> | <code>string</code> | Description of the Prompt Router. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>[]</code> | List of Tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `fallbackModel`<sup>Required</sup> <a name="fallbackModel" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.fallbackModel"></a>

```typescript
public readonly fallbackModel: BedrockIntelligentPromptRouterFallbackModel;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a>

Model configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#fallback_model BedrockIntelligentPromptRouter#fallback_model}

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.models"></a>

```typescript
public readonly models: IResolvable | BedrockIntelligentPromptRouterModels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>[]

List of model configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#models BedrockIntelligentPromptRouter#models}

---

##### `promptRouterName`<sup>Required</sup> <a name="promptRouterName" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.promptRouterName"></a>

```typescript
public readonly promptRouterName: string;
```

- *Type:* string

Name of the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#prompt_router_name BedrockIntelligentPromptRouter#prompt_router_name}

---

##### `routingCriteria`<sup>Required</sup> <a name="routingCriteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.routingCriteria"></a>

```typescript
public readonly routingCriteria: BedrockIntelligentPromptRouterRoutingCriteria;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a>

Represents the criteria used for routing requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#routing_criteria BedrockIntelligentPromptRouter#routing_criteria}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#description BedrockIntelligentPromptRouter#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | BedrockIntelligentPromptRouterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>[]

List of Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#tags BedrockIntelligentPromptRouter#tags}

---

### BedrockIntelligentPromptRouterFallbackModel <a name="BedrockIntelligentPromptRouterFallbackModel" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel.Initializer"></a>

```typescript
import { bedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

const bedrockIntelligentPromptRouterFallbackModel: bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel.property.modelArn">modelArn</a></code> | <code>string</code> | Arn of underlying model which are added in the Prompt Router. |

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel.property.modelArn"></a>

```typescript
public readonly modelArn: string;
```

- *Type:* string

Arn of underlying model which are added in the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#model_arn BedrockIntelligentPromptRouter#model_arn}

---

### BedrockIntelligentPromptRouterModels <a name="BedrockIntelligentPromptRouterModels" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels.Initializer"></a>

```typescript
import { bedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

const bedrockIntelligentPromptRouterModels: bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels.property.modelArn">modelArn</a></code> | <code>string</code> | Arn of underlying model which are added in the Prompt Router. |

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels.property.modelArn"></a>

```typescript
public readonly modelArn: string;
```

- *Type:* string

Arn of underlying model which are added in the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#model_arn BedrockIntelligentPromptRouter#model_arn}

---

### BedrockIntelligentPromptRouterRoutingCriteria <a name="BedrockIntelligentPromptRouterRoutingCriteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria.Initializer"></a>

```typescript
import { bedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

const bedrockIntelligentPromptRouterRoutingCriteria: bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria.property.responseQualityDifference">responseQualityDifference</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#response_quality_difference BedrockIntelligentPromptRouter#response_quality_difference}. |

---

##### `responseQualityDifference`<sup>Required</sup> <a name="responseQualityDifference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria.property.responseQualityDifference"></a>

```typescript
public readonly responseQualityDifference: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#response_quality_difference BedrockIntelligentPromptRouter#response_quality_difference}.

---

### BedrockIntelligentPromptRouterTags <a name="BedrockIntelligentPromptRouterTags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.Initializer"></a>

```typescript
import { bedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

const bedrockIntelligentPromptRouterTags: bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.property.key">key</a></code> | <code>string</code> | Tag Key. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.property.value">value</a></code> | <code>string</code> | Tag Value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Tag Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#key BedrockIntelligentPromptRouter#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Tag Value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#value BedrockIntelligentPromptRouter#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockIntelligentPromptRouterFallbackModelOutputReference <a name="BedrockIntelligentPromptRouterFallbackModelOutputReference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer"></a>

```typescript
import { bedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

new bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArnInput">modelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArn">modelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelArnInput`<sup>Optional</sup> <a name="modelArnInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArnInput"></a>

```typescript
public readonly modelArnInput: string;
```

- *Type:* string

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArn"></a>

```typescript
public readonly modelArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockIntelligentPromptRouterFallbackModel;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a>

---


### BedrockIntelligentPromptRouterModelsList <a name="BedrockIntelligentPromptRouterModelsList" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer"></a>

```typescript
import { bedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

new bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.get"></a>

```typescript
public get(index: number): BedrockIntelligentPromptRouterModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockIntelligentPromptRouterModels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>[]

---


### BedrockIntelligentPromptRouterModelsOutputReference <a name="BedrockIntelligentPromptRouterModelsOutputReference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer"></a>

```typescript
import { bedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

new bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.modelArnInput">modelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.modelArn">modelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelArnInput`<sup>Optional</sup> <a name="modelArnInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.modelArnInput"></a>

```typescript
public readonly modelArnInput: string;
```

- *Type:* string

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.modelArn"></a>

```typescript
public readonly modelArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockIntelligentPromptRouterModels;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>

---


### BedrockIntelligentPromptRouterRoutingCriteriaOutputReference <a name="BedrockIntelligentPromptRouterRoutingCriteriaOutputReference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer"></a>

```typescript
import { bedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

new bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifferenceInput">responseQualityDifferenceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifference">responseQualityDifference</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `responseQualityDifferenceInput`<sup>Optional</sup> <a name="responseQualityDifferenceInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifferenceInput"></a>

```typescript
public readonly responseQualityDifferenceInput: number;
```

- *Type:* number

---

##### `responseQualityDifference`<sup>Required</sup> <a name="responseQualityDifference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifference"></a>

```typescript
public readonly responseQualityDifference: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockIntelligentPromptRouterRoutingCriteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a>

---


### BedrockIntelligentPromptRouterTagsList <a name="BedrockIntelligentPromptRouterTagsList" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer"></a>

```typescript
import { bedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

new bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.get"></a>

```typescript
public get(index: number): BedrockIntelligentPromptRouterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockIntelligentPromptRouterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>[]

---


### BedrockIntelligentPromptRouterTagsOutputReference <a name="BedrockIntelligentPromptRouterTagsOutputReference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer"></a>

```typescript
import { bedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

new bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockIntelligentPromptRouterTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>

---



