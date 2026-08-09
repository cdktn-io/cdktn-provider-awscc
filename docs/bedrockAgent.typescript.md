# `bedrockAgent` Submodule <a name="`bedrockAgent` Submodule" id="@cdktn/provider-awscc.bedrockAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockAgent <a name="BedrockAgent" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent awscc_bedrock_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgent(scope: Construct, id: string, config: BedrockAgentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig">BedrockAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig">BedrockAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putActionGroups">putActionGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putAgentCollaborators">putAgentCollaborators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putCustomOrchestration">putCustomOrchestration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putGuardrailConfiguration">putGuardrailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putKnowledgeBases">putKnowledgeBases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putMemoryConfiguration">putMemoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putPromptOverrideConfiguration">putPromptOverrideConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetActionGroups">resetActionGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentCollaboration">resetAgentCollaboration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentCollaborators">resetAgentCollaborators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentResourceRoleArn">resetAgentResourceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAutoPrepare">resetAutoPrepare</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetCustomerEncryptionKeyArn">resetCustomerEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetCustomOrchestration">resetCustomOrchestration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetFoundationModel">resetFoundationModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetGuardrailConfiguration">resetGuardrailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetIdleSessionTtlInSeconds">resetIdleSessionTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetKnowledgeBases">resetKnowledgeBases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetMemoryConfiguration">resetMemoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetOrchestrationType">resetOrchestrationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetPromptOverrideConfiguration">resetPromptOverrideConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetSkipResourceInUseCheckOnDelete">resetSkipResourceInUseCheckOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetTestAliasTags">resetTestAliasTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActionGroups` <a name="putActionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putActionGroups"></a>

```typescript
public putActionGroups(value: IResolvable | BedrockAgentActionGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putActionGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>[]

---

##### `putAgentCollaborators` <a name="putAgentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putAgentCollaborators"></a>

```typescript
public putAgentCollaborators(value: IResolvable | BedrockAgentAgentCollaborators[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putAgentCollaborators.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>[]

---

##### `putCustomOrchestration` <a name="putCustomOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putCustomOrchestration"></a>

```typescript
public putCustomOrchestration(value: BedrockAgentCustomOrchestration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putCustomOrchestration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a>

---

##### `putGuardrailConfiguration` <a name="putGuardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putGuardrailConfiguration"></a>

```typescript
public putGuardrailConfiguration(value: BedrockAgentGuardrailConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putGuardrailConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a>

---

##### `putKnowledgeBases` <a name="putKnowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putKnowledgeBases"></a>

```typescript
public putKnowledgeBases(value: IResolvable | BedrockAgentKnowledgeBases[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putKnowledgeBases.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>[]

---

##### `putMemoryConfiguration` <a name="putMemoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putMemoryConfiguration"></a>

```typescript
public putMemoryConfiguration(value: BedrockAgentMemoryConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putMemoryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a>

---

##### `putPromptOverrideConfiguration` <a name="putPromptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putPromptOverrideConfiguration"></a>

```typescript
public putPromptOverrideConfiguration(value: BedrockAgentPromptOverrideConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putPromptOverrideConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a>

---

##### `resetActionGroups` <a name="resetActionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetActionGroups"></a>

```typescript
public resetActionGroups(): void
```

##### `resetAgentCollaboration` <a name="resetAgentCollaboration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentCollaboration"></a>

```typescript
public resetAgentCollaboration(): void
```

##### `resetAgentCollaborators` <a name="resetAgentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentCollaborators"></a>

```typescript
public resetAgentCollaborators(): void
```

##### `resetAgentResourceRoleArn` <a name="resetAgentResourceRoleArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentResourceRoleArn"></a>

```typescript
public resetAgentResourceRoleArn(): void
```

##### `resetAutoPrepare` <a name="resetAutoPrepare" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAutoPrepare"></a>

```typescript
public resetAutoPrepare(): void
```

##### `resetCustomerEncryptionKeyArn` <a name="resetCustomerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetCustomerEncryptionKeyArn"></a>

```typescript
public resetCustomerEncryptionKeyArn(): void
```

##### `resetCustomOrchestration` <a name="resetCustomOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetCustomOrchestration"></a>

```typescript
public resetCustomOrchestration(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFoundationModel` <a name="resetFoundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetFoundationModel"></a>

```typescript
public resetFoundationModel(): void
```

##### `resetGuardrailConfiguration` <a name="resetGuardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetGuardrailConfiguration"></a>

```typescript
public resetGuardrailConfiguration(): void
```

##### `resetIdleSessionTtlInSeconds` <a name="resetIdleSessionTtlInSeconds" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetIdleSessionTtlInSeconds"></a>

```typescript
public resetIdleSessionTtlInSeconds(): void
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetInstruction"></a>

```typescript
public resetInstruction(): void
```

##### `resetKnowledgeBases` <a name="resetKnowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetKnowledgeBases"></a>

```typescript
public resetKnowledgeBases(): void
```

##### `resetMemoryConfiguration` <a name="resetMemoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetMemoryConfiguration"></a>

```typescript
public resetMemoryConfiguration(): void
```

##### `resetOrchestrationType` <a name="resetOrchestrationType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetOrchestrationType"></a>

```typescript
public resetOrchestrationType(): void
```

##### `resetPromptOverrideConfiguration` <a name="resetPromptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetPromptOverrideConfiguration"></a>

```typescript
public resetPromptOverrideConfiguration(): void
```

##### `resetSkipResourceInUseCheckOnDelete` <a name="resetSkipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetSkipResourceInUseCheckOnDelete"></a>

```typescript
public resetSkipResourceInUseCheckOnDelete(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTestAliasTags` <a name="resetTestAliasTags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetTestAliasTags"></a>

```typescript
public resetTestAliasTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockAgent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isConstruct"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

bedrockAgent.BedrockAgent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformElement"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

bedrockAgent.BedrockAgent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformResource"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

bedrockAgent.BedrockAgent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

bedrockAgent.BedrockAgent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BedrockAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.actionGroups">actionGroups</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList">BedrockAgentActionGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentArn">agentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaborators">agentCollaborators</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList">BedrockAgentAgentCollaboratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentStatus">agentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentVersion">agentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customOrchestration">customOrchestration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference">BedrockAgentCustomOrchestrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.failureReasons">failureReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.guardrailConfiguration">guardrailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference">BedrockAgentGuardrailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.knowledgeBases">knowledgeBases</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList">BedrockAgentKnowledgeBasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.memoryConfiguration">memoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference">BedrockAgentMemoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.preparedAt">preparedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.promptOverrideConfiguration">promptOverrideConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference">BedrockAgentPromptOverrideConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.recommendedActions">recommendedActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.actionGroupsInput">actionGroupsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaborationInput">agentCollaborationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaboratorsInput">agentCollaboratorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentNameInput">agentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentResourceRoleArnInput">agentResourceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.autoPrepareInput">autoPrepareInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customerEncryptionKeyArnInput">customerEncryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customOrchestrationInput">customOrchestrationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.foundationModelInput">foundationModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.guardrailConfigurationInput">guardrailConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.idleSessionTtlInSecondsInput">idleSessionTtlInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.instructionInput">instructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.knowledgeBasesInput">knowledgeBasesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.memoryConfigurationInput">memoryConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.orchestrationTypeInput">orchestrationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.promptOverrideConfigurationInput">promptOverrideConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.skipResourceInUseCheckOnDeleteInput">skipResourceInUseCheckOnDeleteInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.testAliasTagsInput">testAliasTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaboration">agentCollaboration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentName">agentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentResourceRoleArn">agentResourceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.autoPrepare">autoPrepare</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.foundationModel">foundationModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.idleSessionTtlInSeconds">idleSessionTtlInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.instruction">instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.orchestrationType">orchestrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.skipResourceInUseCheckOnDelete">skipResourceInUseCheckOnDelete</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.testAliasTags">testAliasTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actionGroups`<sup>Required</sup> <a name="actionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.actionGroups"></a>

```typescript
public readonly actionGroups: BedrockAgentActionGroupsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList">BedrockAgentActionGroupsList</a>

---

##### `agentArn`<sup>Required</sup> <a name="agentArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentArn"></a>

```typescript
public readonly agentArn: string;
```

- *Type:* string

---

##### `agentCollaborators`<sup>Required</sup> <a name="agentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaborators"></a>

```typescript
public readonly agentCollaborators: BedrockAgentAgentCollaboratorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList">BedrockAgentAgentCollaboratorsList</a>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `agentStatus`<sup>Required</sup> <a name="agentStatus" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentStatus"></a>

```typescript
public readonly agentStatus: string;
```

- *Type:* string

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `customOrchestration`<sup>Required</sup> <a name="customOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customOrchestration"></a>

```typescript
public readonly customOrchestration: BedrockAgentCustomOrchestrationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference">BedrockAgentCustomOrchestrationOutputReference</a>

---

##### `failureReasons`<sup>Required</sup> <a name="failureReasons" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.failureReasons"></a>

```typescript
public readonly failureReasons: string[];
```

- *Type:* string[]

---

##### `guardrailConfiguration`<sup>Required</sup> <a name="guardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.guardrailConfiguration"></a>

```typescript
public readonly guardrailConfiguration: BedrockAgentGuardrailConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference">BedrockAgentGuardrailConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `knowledgeBases`<sup>Required</sup> <a name="knowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.knowledgeBases"></a>

```typescript
public readonly knowledgeBases: BedrockAgentKnowledgeBasesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList">BedrockAgentKnowledgeBasesList</a>

---

##### `memoryConfiguration`<sup>Required</sup> <a name="memoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.memoryConfiguration"></a>

```typescript
public readonly memoryConfiguration: BedrockAgentMemoryConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference">BedrockAgentMemoryConfigurationOutputReference</a>

---

##### `preparedAt`<sup>Required</sup> <a name="preparedAt" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.preparedAt"></a>

```typescript
public readonly preparedAt: string;
```

- *Type:* string

---

##### `promptOverrideConfiguration`<sup>Required</sup> <a name="promptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.promptOverrideConfiguration"></a>

```typescript
public readonly promptOverrideConfiguration: BedrockAgentPromptOverrideConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference">BedrockAgentPromptOverrideConfigurationOutputReference</a>

---

##### `recommendedActions`<sup>Required</sup> <a name="recommendedActions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.recommendedActions"></a>

```typescript
public readonly recommendedActions: string[];
```

- *Type:* string[]

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `actionGroupsInput`<sup>Optional</sup> <a name="actionGroupsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.actionGroupsInput"></a>

```typescript
public readonly actionGroupsInput: IResolvable | BedrockAgentActionGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>[]

---

##### `agentCollaborationInput`<sup>Optional</sup> <a name="agentCollaborationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaborationInput"></a>

```typescript
public readonly agentCollaborationInput: string;
```

- *Type:* string

---

##### `agentCollaboratorsInput`<sup>Optional</sup> <a name="agentCollaboratorsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaboratorsInput"></a>

```typescript
public readonly agentCollaboratorsInput: IResolvable | BedrockAgentAgentCollaborators[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>[]

---

##### `agentNameInput`<sup>Optional</sup> <a name="agentNameInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentNameInput"></a>

```typescript
public readonly agentNameInput: string;
```

- *Type:* string

---

##### `agentResourceRoleArnInput`<sup>Optional</sup> <a name="agentResourceRoleArnInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentResourceRoleArnInput"></a>

```typescript
public readonly agentResourceRoleArnInput: string;
```

- *Type:* string

---

##### `autoPrepareInput`<sup>Optional</sup> <a name="autoPrepareInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.autoPrepareInput"></a>

```typescript
public readonly autoPrepareInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `customerEncryptionKeyArnInput`<sup>Optional</sup> <a name="customerEncryptionKeyArnInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customerEncryptionKeyArnInput"></a>

```typescript
public readonly customerEncryptionKeyArnInput: string;
```

- *Type:* string

---

##### `customOrchestrationInput`<sup>Optional</sup> <a name="customOrchestrationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customOrchestrationInput"></a>

```typescript
public readonly customOrchestrationInput: IResolvable | BedrockAgentCustomOrchestration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `foundationModelInput`<sup>Optional</sup> <a name="foundationModelInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.foundationModelInput"></a>

```typescript
public readonly foundationModelInput: string;
```

- *Type:* string

---

##### `guardrailConfigurationInput`<sup>Optional</sup> <a name="guardrailConfigurationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.guardrailConfigurationInput"></a>

```typescript
public readonly guardrailConfigurationInput: IResolvable | BedrockAgentGuardrailConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a>

---

##### `idleSessionTtlInSecondsInput`<sup>Optional</sup> <a name="idleSessionTtlInSecondsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.idleSessionTtlInSecondsInput"></a>

```typescript
public readonly idleSessionTtlInSecondsInput: number;
```

- *Type:* number

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.instructionInput"></a>

```typescript
public readonly instructionInput: string;
```

- *Type:* string

---

##### `knowledgeBasesInput`<sup>Optional</sup> <a name="knowledgeBasesInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.knowledgeBasesInput"></a>

```typescript
public readonly knowledgeBasesInput: IResolvable | BedrockAgentKnowledgeBases[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>[]

---

##### `memoryConfigurationInput`<sup>Optional</sup> <a name="memoryConfigurationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.memoryConfigurationInput"></a>

```typescript
public readonly memoryConfigurationInput: IResolvable | BedrockAgentMemoryConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a>

---

##### `orchestrationTypeInput`<sup>Optional</sup> <a name="orchestrationTypeInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.orchestrationTypeInput"></a>

```typescript
public readonly orchestrationTypeInput: string;
```

- *Type:* string

---

##### `promptOverrideConfigurationInput`<sup>Optional</sup> <a name="promptOverrideConfigurationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.promptOverrideConfigurationInput"></a>

```typescript
public readonly promptOverrideConfigurationInput: IResolvable | BedrockAgentPromptOverrideConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a>

---

##### `skipResourceInUseCheckOnDeleteInput`<sup>Optional</sup> <a name="skipResourceInUseCheckOnDeleteInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.skipResourceInUseCheckOnDeleteInput"></a>

```typescript
public readonly skipResourceInUseCheckOnDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `testAliasTagsInput`<sup>Optional</sup> <a name="testAliasTagsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.testAliasTagsInput"></a>

```typescript
public readonly testAliasTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `agentCollaboration`<sup>Required</sup> <a name="agentCollaboration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaboration"></a>

```typescript
public readonly agentCollaboration: string;
```

- *Type:* string

---

##### `agentName`<sup>Required</sup> <a name="agentName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentName"></a>

```typescript
public readonly agentName: string;
```

- *Type:* string

---

##### `agentResourceRoleArn`<sup>Required</sup> <a name="agentResourceRoleArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentResourceRoleArn"></a>

```typescript
public readonly agentResourceRoleArn: string;
```

- *Type:* string

---

##### `autoPrepare`<sup>Required</sup> <a name="autoPrepare" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.autoPrepare"></a>

```typescript
public readonly autoPrepare: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `customerEncryptionKeyArn`<sup>Required</sup> <a name="customerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customerEncryptionKeyArn"></a>

```typescript
public readonly customerEncryptionKeyArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `foundationModel`<sup>Required</sup> <a name="foundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.foundationModel"></a>

```typescript
public readonly foundationModel: string;
```

- *Type:* string

---

##### `idleSessionTtlInSeconds`<sup>Required</sup> <a name="idleSessionTtlInSeconds" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.idleSessionTtlInSeconds"></a>

```typescript
public readonly idleSessionTtlInSeconds: number;
```

- *Type:* number

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

---

##### `orchestrationType`<sup>Required</sup> <a name="orchestrationType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.orchestrationType"></a>

```typescript
public readonly orchestrationType: string;
```

- *Type:* string

---

##### `skipResourceInUseCheckOnDelete`<sup>Required</sup> <a name="skipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.skipResourceInUseCheckOnDelete"></a>

```typescript
public readonly skipResourceInUseCheckOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `testAliasTags`<sup>Required</sup> <a name="testAliasTags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.testAliasTags"></a>

```typescript
public readonly testAliasTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockAgentActionGroups <a name="BedrockAgentActionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

const bedrockAgentActionGroups: bedrockAgent.BedrockAgentActionGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupExecutor">actionGroupExecutor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a></code> | Type of Executors for an Action Group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupName">actionGroupName</a></code> | <code>string</code> | Name of the action group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupState">actionGroupState</a></code> | <code>string</code> | State of the action group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.apiSchema">apiSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a></code> | Contains information about the API Schema for the Action Group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.description">description</a></code> | <code>string</code> | Description of action group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.functionSchema">functionSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a></code> | Schema of Functions. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.parentActionGroupSignature">parentActionGroupSignature</a></code> | <code>string</code> | Action Group Signature for a BuiltIn Action. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.skipResourceInUseCheckOnDelete">skipResourceInUseCheckOnDelete</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to allow deleting action group while it is in use. |

---

##### `actionGroupExecutor`<sup>Optional</sup> <a name="actionGroupExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupExecutor"></a>

```typescript
public readonly actionGroupExecutor: BedrockAgentActionGroupsActionGroupExecutor;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a>

Type of Executors for an Action Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#action_group_executor BedrockAgent#action_group_executor}

---

##### `actionGroupName`<sup>Optional</sup> <a name="actionGroupName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupName"></a>

```typescript
public readonly actionGroupName: string;
```

- *Type:* string

Name of the action group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#action_group_name BedrockAgent#action_group_name}

---

##### `actionGroupState`<sup>Optional</sup> <a name="actionGroupState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupState"></a>

```typescript
public readonly actionGroupState: string;
```

- *Type:* string

State of the action group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#action_group_state BedrockAgent#action_group_state}

---

##### `apiSchema`<sup>Optional</sup> <a name="apiSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.apiSchema"></a>

```typescript
public readonly apiSchema: BedrockAgentActionGroupsApiSchema;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a>

Contains information about the API Schema for the Action Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#api_schema BedrockAgent#api_schema}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of action group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `functionSchema`<sup>Optional</sup> <a name="functionSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.functionSchema"></a>

```typescript
public readonly functionSchema: BedrockAgentActionGroupsFunctionSchema;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a>

Schema of Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#function_schema BedrockAgent#function_schema}

---

##### `parentActionGroupSignature`<sup>Optional</sup> <a name="parentActionGroupSignature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.parentActionGroupSignature"></a>

```typescript
public readonly parentActionGroupSignature: string;
```

- *Type:* string

Action Group Signature for a BuiltIn Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#parent_action_group_signature BedrockAgent#parent_action_group_signature}

---

##### `skipResourceInUseCheckOnDelete`<sup>Optional</sup> <a name="skipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.skipResourceInUseCheckOnDelete"></a>

```typescript
public readonly skipResourceInUseCheckOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to allow deleting action group while it is in use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#skip_resource_in_use_check_on_delete BedrockAgent#skip_resource_in_use_check_on_delete}

---

### BedrockAgentActionGroupsActionGroupExecutor <a name="BedrockAgentActionGroupsActionGroupExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

const bedrockAgentActionGroupsActionGroupExecutor: bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.property.customControl">customControl</a></code> | <code>string</code> | Custom control of action execution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.property.lambda">lambda</a></code> | <code>string</code> | ARN of a Lambda. |

---

##### `customControl`<sup>Optional</sup> <a name="customControl" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.property.customControl"></a>

```typescript
public readonly customControl: string;
```

- *Type:* string

Custom control of action execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#custom_control BedrockAgent#custom_control}

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.property.lambda"></a>

```typescript
public readonly lambda: string;
```

- *Type:* string

ARN of a Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#lambda BedrockAgent#lambda}

---

### BedrockAgentActionGroupsApiSchema <a name="BedrockAgentActionGroupsApiSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

const bedrockAgentActionGroupsApiSchema: bedrockAgent.BedrockAgentActionGroupsApiSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.property.payload">payload</a></code> | <code>string</code> | String OpenAPI Payload. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a></code> | The identifier for the S3 resource. |

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

String OpenAPI Payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#payload BedrockAgent#payload}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.property.s3"></a>

```typescript
public readonly s3: BedrockAgentActionGroupsApiSchemaS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a>

The identifier for the S3 resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#s3 BedrockAgent#s3}

---

### BedrockAgentActionGroupsApiSchemaS3 <a name="BedrockAgentActionGroupsApiSchemaS3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

const bedrockAgentActionGroupsApiSchemaS3: bedrockAgent.BedrockAgentActionGroupsApiSchemaS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | A bucket in S3. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.property.s3ObjectKey">s3ObjectKey</a></code> | <code>string</code> | A object key in S3. |

---

##### `s3BucketName`<sup>Optional</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

A bucket in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#s3_bucket_name BedrockAgent#s3_bucket_name}

---

##### `s3ObjectKey`<sup>Optional</sup> <a name="s3ObjectKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.property.s3ObjectKey"></a>

```typescript
public readonly s3ObjectKey: string;
```

- *Type:* string

A object key in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#s3_object_key BedrockAgent#s3_object_key}

---

### BedrockAgentActionGroupsFunctionSchema <a name="BedrockAgentActionGroupsFunctionSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

const bedrockAgentActionGroupsFunctionSchema: bedrockAgent.BedrockAgentActionGroupsFunctionSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema.property.functions">functions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>[]</code> | List of Function definitions. |

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema.property.functions"></a>

```typescript
public readonly functions: IResolvable | BedrockAgentActionGroupsFunctionSchemaFunctions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>[]

List of Function definitions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#functions BedrockAgent#functions}

---

### BedrockAgentActionGroupsFunctionSchemaFunctions <a name="BedrockAgentActionGroupsFunctionSchemaFunctions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

const bedrockAgentActionGroupsFunctionSchemaFunctions: bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.description">description</a></code> | <code>string</code> | Description of function. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.name">name</a></code> | <code>string</code> | Name for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>}</code> | A map of parameter name and detail. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.requireConfirmation">requireConfirmation</a></code> | <code>string</code> | ENUM to check if action requires user confirmation. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#name BedrockAgent#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | {[ key: string ]: BedrockAgentActionGroupsFunctionSchemaFunctionsParameters};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>}

A map of parameter name and detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#parameters BedrockAgent#parameters}

---

##### `requireConfirmation`<sup>Optional</sup> <a name="requireConfirmation" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.requireConfirmation"></a>

```typescript
public readonly requireConfirmation: string;
```

- *Type:* string

ENUM to check if action requires user confirmation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#require_confirmation BedrockAgent#require_confirmation}

---

### BedrockAgentActionGroupsFunctionSchemaFunctionsParameters <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsParameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

const bedrockAgentActionGroupsFunctionSchemaFunctionsParameters: bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.description">description</a></code> | <code>string</code> | Description of function parameter. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.required">required</a></code> | <code>boolean \| cdktn.IResolvable</code> | Information about if a parameter is required for function call. Default to false. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.type">type</a></code> | <code>string</code> | Parameter Type. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of function parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Information about if a parameter is required for function call. Default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#required BedrockAgent#required}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Parameter Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#type BedrockAgent#type}

---

### BedrockAgentAgentCollaborators <a name="BedrockAgentAgentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

const bedrockAgentAgentCollaborators: bedrockAgent.BedrockAgentAgentCollaborators = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.agentDescriptor">agentDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a></code> | Agent descriptor for agent collaborator. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.collaborationInstruction">collaborationInstruction</a></code> | <code>string</code> | Agent collaborator instruction. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.collaboratorName">collaboratorName</a></code> | <code>string</code> | Agent collaborator name. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.relayConversationHistory">relayConversationHistory</a></code> | <code>string</code> | Relay conversation history state. |

---

##### `agentDescriptor`<sup>Optional</sup> <a name="agentDescriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.agentDescriptor"></a>

```typescript
public readonly agentDescriptor: BedrockAgentAgentCollaboratorsAgentDescriptor;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a>

Agent descriptor for agent collaborator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#agent_descriptor BedrockAgent#agent_descriptor}

---

##### `collaborationInstruction`<sup>Optional</sup> <a name="collaborationInstruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.collaborationInstruction"></a>

```typescript
public readonly collaborationInstruction: string;
```

- *Type:* string

Agent collaborator instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#collaboration_instruction BedrockAgent#collaboration_instruction}

---

##### `collaboratorName`<sup>Optional</sup> <a name="collaboratorName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.collaboratorName"></a>

```typescript
public readonly collaboratorName: string;
```

- *Type:* string

Agent collaborator name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#collaborator_name BedrockAgent#collaborator_name}

---

##### `relayConversationHistory`<sup>Optional</sup> <a name="relayConversationHistory" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.relayConversationHistory"></a>

```typescript
public readonly relayConversationHistory: string;
```

- *Type:* string

Relay conversation history state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#relay_conversation_history BedrockAgent#relay_conversation_history}

---

### BedrockAgentAgentCollaboratorsAgentDescriptor <a name="BedrockAgentAgentCollaboratorsAgentDescriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

const bedrockAgentAgentCollaboratorsAgentDescriptor: bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor.property.aliasArn">aliasArn</a></code> | <code>string</code> | Alias ARN for agent descriptor. |

---

##### `aliasArn`<sup>Optional</sup> <a name="aliasArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor.property.aliasArn"></a>

```typescript
public readonly aliasArn: string;
```

- *Type:* string

Alias ARN for agent descriptor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#alias_arn BedrockAgent#alias_arn}

---

### BedrockAgentConfig <a name="BedrockAgentConfig" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

const bedrockAgentConfig: bedrockAgent.BedrockAgentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentName">agentName</a></code> | <code>string</code> | Name for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.actionGroups">actionGroups</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>[]</code> | List of ActionGroups. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentCollaboration">agentCollaboration</a></code> | <code>string</code> | Agent collaboration state. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentCollaborators">agentCollaborators</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>[]</code> | List of Agent Collaborators. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentResourceRoleArn">agentResourceRoleArn</a></code> | <code>string</code> | ARN of a IAM role. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.autoPrepare">autoPrepare</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to automatically prepare after creating or updating the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>string</code> | A KMS key ARN. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.customOrchestration">customOrchestration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a></code> | Structure for custom orchestration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.description">description</a></code> | <code>string</code> | Description of the Resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.foundationModel">foundationModel</a></code> | <code>string</code> | ARN or name of a Bedrock model. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.guardrailConfiguration">guardrailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a></code> | Configuration for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.idleSessionTtlInSeconds">idleSessionTtlInSeconds</a></code> | <code>number</code> | Max Session Time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.instruction">instruction</a></code> | <code>string</code> | Instruction for the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.knowledgeBases">knowledgeBases</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>[]</code> | List of Agent Knowledge Bases. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.memoryConfiguration">memoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a></code> | Configuration for memory storage. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.orchestrationType">orchestrationType</a></code> | <code>string</code> | Types of orchestration strategy for agents. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.promptOverrideConfiguration">promptOverrideConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a></code> | Configuration for prompt override. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.skipResourceInUseCheckOnDelete">skipResourceInUseCheckOnDelete</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to allow deleting agent while it is in use. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A map of tag keys and values. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.testAliasTags">testAliasTags</a></code> | <code>{[ key: string ]: string}</code> | A map of tag keys and values. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentName`<sup>Required</sup> <a name="agentName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentName"></a>

```typescript
public readonly agentName: string;
```

- *Type:* string

Name for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#agent_name BedrockAgent#agent_name}

---

##### `actionGroups`<sup>Optional</sup> <a name="actionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.actionGroups"></a>

```typescript
public readonly actionGroups: IResolvable | BedrockAgentActionGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>[]

List of ActionGroups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#action_groups BedrockAgent#action_groups}

---

##### `agentCollaboration`<sup>Optional</sup> <a name="agentCollaboration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentCollaboration"></a>

```typescript
public readonly agentCollaboration: string;
```

- *Type:* string

Agent collaboration state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#agent_collaboration BedrockAgent#agent_collaboration}

---

##### `agentCollaborators`<sup>Optional</sup> <a name="agentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentCollaborators"></a>

```typescript
public readonly agentCollaborators: IResolvable | BedrockAgentAgentCollaborators[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>[]

List of Agent Collaborators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#agent_collaborators BedrockAgent#agent_collaborators}

---

##### `agentResourceRoleArn`<sup>Optional</sup> <a name="agentResourceRoleArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentResourceRoleArn"></a>

```typescript
public readonly agentResourceRoleArn: string;
```

- *Type:* string

ARN of a IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#agent_resource_role_arn BedrockAgent#agent_resource_role_arn}

---

##### `autoPrepare`<sup>Optional</sup> <a name="autoPrepare" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.autoPrepare"></a>

```typescript
public readonly autoPrepare: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to automatically prepare after creating or updating the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#auto_prepare BedrockAgent#auto_prepare}

---

##### `customerEncryptionKeyArn`<sup>Optional</sup> <a name="customerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.customerEncryptionKeyArn"></a>

```typescript
public readonly customerEncryptionKeyArn: string;
```

- *Type:* string

A KMS key ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#customer_encryption_key_arn BedrockAgent#customer_encryption_key_arn}

---

##### `customOrchestration`<sup>Optional</sup> <a name="customOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.customOrchestration"></a>

```typescript
public readonly customOrchestration: BedrockAgentCustomOrchestration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a>

Structure for custom orchestration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#custom_orchestration BedrockAgent#custom_orchestration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `foundationModel`<sup>Optional</sup> <a name="foundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.foundationModel"></a>

```typescript
public readonly foundationModel: string;
```

- *Type:* string

ARN or name of a Bedrock model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#foundation_model BedrockAgent#foundation_model}

---

##### `guardrailConfiguration`<sup>Optional</sup> <a name="guardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.guardrailConfiguration"></a>

```typescript
public readonly guardrailConfiguration: BedrockAgentGuardrailConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a>

Configuration for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#guardrail_configuration BedrockAgent#guardrail_configuration}

---

##### `idleSessionTtlInSeconds`<sup>Optional</sup> <a name="idleSessionTtlInSeconds" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.idleSessionTtlInSeconds"></a>

```typescript
public readonly idleSessionTtlInSeconds: number;
```

- *Type:* number

Max Session Time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#idle_session_ttl_in_seconds BedrockAgent#idle_session_ttl_in_seconds}

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

Instruction for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#instruction BedrockAgent#instruction}

---

##### `knowledgeBases`<sup>Optional</sup> <a name="knowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.knowledgeBases"></a>

```typescript
public readonly knowledgeBases: IResolvable | BedrockAgentKnowledgeBases[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>[]

List of Agent Knowledge Bases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#knowledge_bases BedrockAgent#knowledge_bases}

---

##### `memoryConfiguration`<sup>Optional</sup> <a name="memoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.memoryConfiguration"></a>

```typescript
public readonly memoryConfiguration: BedrockAgentMemoryConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a>

Configuration for memory storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#memory_configuration BedrockAgent#memory_configuration}

---

##### `orchestrationType`<sup>Optional</sup> <a name="orchestrationType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.orchestrationType"></a>

```typescript
public readonly orchestrationType: string;
```

- *Type:* string

Types of orchestration strategy for agents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#orchestration_type BedrockAgent#orchestration_type}

---

##### `promptOverrideConfiguration`<sup>Optional</sup> <a name="promptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.promptOverrideConfiguration"></a>

```typescript
public readonly promptOverrideConfiguration: BedrockAgentPromptOverrideConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a>

Configuration for prompt override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#prompt_override_configuration BedrockAgent#prompt_override_configuration}

---

##### `skipResourceInUseCheckOnDelete`<sup>Optional</sup> <a name="skipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.skipResourceInUseCheckOnDelete"></a>

```typescript
public readonly skipResourceInUseCheckOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to allow deleting agent while it is in use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#skip_resource_in_use_check_on_delete BedrockAgent#skip_resource_in_use_check_on_delete}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#tags BedrockAgent#tags}

---

##### `testAliasTags`<sup>Optional</sup> <a name="testAliasTags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.testAliasTags"></a>

```typescript
public readonly testAliasTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#test_alias_tags BedrockAgent#test_alias_tags}

---

### BedrockAgentCustomOrchestration <a name="BedrockAgentCustomOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

const bedrockAgentCustomOrchestration: bedrockAgent.BedrockAgentCustomOrchestration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration.property.executor">executor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a></code> | Types of executors for custom orchestration strategy. |

---

##### `executor`<sup>Optional</sup> <a name="executor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration.property.executor"></a>

```typescript
public readonly executor: BedrockAgentCustomOrchestrationExecutor;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a>

Types of executors for custom orchestration strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#executor BedrockAgent#executor}

---

### BedrockAgentCustomOrchestrationExecutor <a name="BedrockAgentCustomOrchestrationExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

const bedrockAgentCustomOrchestrationExecutor: bedrockAgent.BedrockAgentCustomOrchestrationExecutor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor.property.lambda">lambda</a></code> | <code>string</code> | ARN of a Lambda. |

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor.property.lambda"></a>

```typescript
public readonly lambda: string;
```

- *Type:* string

ARN of a Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#lambda BedrockAgent#lambda}

---

### BedrockAgentGuardrailConfiguration <a name="BedrockAgentGuardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

const bedrockAgentGuardrailConfiguration: bedrockAgent.BedrockAgentGuardrailConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.property.guardrailIdentifier">guardrailIdentifier</a></code> | <code>string</code> | Identifier for the guardrail, could be the id or the arn. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.property.guardrailVersion">guardrailVersion</a></code> | <code>string</code> | Version of the guardrail. |

---

##### `guardrailIdentifier`<sup>Optional</sup> <a name="guardrailIdentifier" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.property.guardrailIdentifier"></a>

```typescript
public readonly guardrailIdentifier: string;
```

- *Type:* string

Identifier for the guardrail, could be the id or the arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#guardrail_identifier BedrockAgent#guardrail_identifier}

---

##### `guardrailVersion`<sup>Optional</sup> <a name="guardrailVersion" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.property.guardrailVersion"></a>

```typescript
public readonly guardrailVersion: string;
```

- *Type:* string

Version of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#guardrail_version BedrockAgent#guardrail_version}

---

### BedrockAgentKnowledgeBases <a name="BedrockAgentKnowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

const bedrockAgentKnowledgeBases: bedrockAgent.BedrockAgentKnowledgeBases = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.description">description</a></code> | <code>string</code> | Description of the Resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | Identifier for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.knowledgeBaseState">knowledgeBaseState</a></code> | <code>string</code> | State of the knowledge base; whether it is enabled or disabled. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `knowledgeBaseId`<sup>Optional</sup> <a name="knowledgeBaseId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

Identifier for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#knowledge_base_id BedrockAgent#knowledge_base_id}

---

##### `knowledgeBaseState`<sup>Optional</sup> <a name="knowledgeBaseState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.knowledgeBaseState"></a>

```typescript
public readonly knowledgeBaseState: string;
```

- *Type:* string

State of the knowledge base; whether it is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#knowledge_base_state BedrockAgent#knowledge_base_state}

---

### BedrockAgentMemoryConfiguration <a name="BedrockAgentMemoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

const bedrockAgentMemoryConfiguration: bedrockAgent.BedrockAgentMemoryConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.enabledMemoryTypes">enabledMemoryTypes</a></code> | <code>string[]</code> | Types of session storage persisted in memory. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.sessionSummaryConfiguration">sessionSummaryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a></code> | Configuration for Session Summarization. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.storageDays">storageDays</a></code> | <code>number</code> | Maximum number of days to store session details. |

---

##### `enabledMemoryTypes`<sup>Optional</sup> <a name="enabledMemoryTypes" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.enabledMemoryTypes"></a>

```typescript
public readonly enabledMemoryTypes: string[];
```

- *Type:* string[]

Types of session storage persisted in memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#enabled_memory_types BedrockAgent#enabled_memory_types}

---

##### `sessionSummaryConfiguration`<sup>Optional</sup> <a name="sessionSummaryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.sessionSummaryConfiguration"></a>

```typescript
public readonly sessionSummaryConfiguration: BedrockAgentMemoryConfigurationSessionSummaryConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a>

Configuration for Session Summarization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#session_summary_configuration BedrockAgent#session_summary_configuration}

---

##### `storageDays`<sup>Optional</sup> <a name="storageDays" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.storageDays"></a>

```typescript
public readonly storageDays: number;
```

- *Type:* number

Maximum number of days to store session details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#storage_days BedrockAgent#storage_days}

---

### BedrockAgentMemoryConfigurationSessionSummaryConfiguration <a name="BedrockAgentMemoryConfigurationSessionSummaryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

const bedrockAgentMemoryConfigurationSessionSummaryConfiguration: bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration.property.maxRecentSessions">maxRecentSessions</a></code> | <code>number</code> | Maximum number of Sessions to Summarize. |

---

##### `maxRecentSessions`<sup>Optional</sup> <a name="maxRecentSessions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration.property.maxRecentSessions"></a>

```typescript
public readonly maxRecentSessions: number;
```

- *Type:* number

Maximum number of Sessions to Summarize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#max_recent_sessions BedrockAgent#max_recent_sessions}

---

### BedrockAgentPromptOverrideConfiguration <a name="BedrockAgentPromptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

const bedrockAgentPromptOverrideConfiguration: bedrockAgent.BedrockAgentPromptOverrideConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.property.overrideLambda">overrideLambda</a></code> | <code>string</code> | ARN of a Lambda. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.property.promptConfigurations">promptConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>[]</code> | List of BasePromptConfiguration. |

---

##### `overrideLambda`<sup>Optional</sup> <a name="overrideLambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.property.overrideLambda"></a>

```typescript
public readonly overrideLambda: string;
```

- *Type:* string

ARN of a Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#override_lambda BedrockAgent#override_lambda}

---

##### `promptConfigurations`<sup>Optional</sup> <a name="promptConfigurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.property.promptConfigurations"></a>

```typescript
public readonly promptConfigurations: IResolvable | BedrockAgentPromptOverrideConfigurationPromptConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>[]

List of BasePromptConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#prompt_configurations BedrockAgent#prompt_configurations}

---

### BedrockAgentPromptOverrideConfigurationPromptConfigurations <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

const bedrockAgentPromptOverrideConfigurationPromptConfigurations: bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.additionalModelRequestFields">additionalModelRequestFields</a></code> | <code>string</code> | Additional Model Request Fields for Prompt Configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.basePromptTemplate">basePromptTemplate</a></code> | <code>string</code> | Base Prompt Template. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.foundationModel">foundationModel</a></code> | <code>string</code> | ARN or name of a Bedrock model. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.inferenceConfiguration">inferenceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a></code> | Configuration for inference in prompt configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.parserMode">parserMode</a></code> | <code>string</code> | Creation Mode for Prompt Configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptCreationMode">promptCreationMode</a></code> | <code>string</code> | Creation Mode for Prompt Configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptState">promptState</a></code> | <code>string</code> | Prompt State. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptType">promptType</a></code> | <code>string</code> | Prompt Type. |

---

##### `additionalModelRequestFields`<sup>Optional</sup> <a name="additionalModelRequestFields" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.additionalModelRequestFields"></a>

```typescript
public readonly additionalModelRequestFields: string;
```

- *Type:* string

Additional Model Request Fields for Prompt Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#additional_model_request_fields BedrockAgent#additional_model_request_fields}

---

##### `basePromptTemplate`<sup>Optional</sup> <a name="basePromptTemplate" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.basePromptTemplate"></a>

```typescript
public readonly basePromptTemplate: string;
```

- *Type:* string

Base Prompt Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#base_prompt_template BedrockAgent#base_prompt_template}

---

##### `foundationModel`<sup>Optional</sup> <a name="foundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.foundationModel"></a>

```typescript
public readonly foundationModel: string;
```

- *Type:* string

ARN or name of a Bedrock model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#foundation_model BedrockAgent#foundation_model}

---

##### `inferenceConfiguration`<sup>Optional</sup> <a name="inferenceConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.inferenceConfiguration"></a>

```typescript
public readonly inferenceConfiguration: BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>

Configuration for inference in prompt configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#inference_configuration BedrockAgent#inference_configuration}

---

##### `parserMode`<sup>Optional</sup> <a name="parserMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.parserMode"></a>

```typescript
public readonly parserMode: string;
```

- *Type:* string

Creation Mode for Prompt Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#parser_mode BedrockAgent#parser_mode}

---

##### `promptCreationMode`<sup>Optional</sup> <a name="promptCreationMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptCreationMode"></a>

```typescript
public readonly promptCreationMode: string;
```

- *Type:* string

Creation Mode for Prompt Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#prompt_creation_mode BedrockAgent#prompt_creation_mode}

---

##### `promptState`<sup>Optional</sup> <a name="promptState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptState"></a>

```typescript
public readonly promptState: string;
```

- *Type:* string

Prompt State.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#prompt_state BedrockAgent#prompt_state}

---

##### `promptType`<sup>Optional</sup> <a name="promptType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptType"></a>

```typescript
public readonly promptType: string;
```

- *Type:* string

Prompt Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#prompt_type BedrockAgent#prompt_type}

---

### BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

const bedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration: bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.maximumLength">maximumLength</a></code> | <code>number</code> | Maximum length of output. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.stopSequences">stopSequences</a></code> | <code>string[]</code> | List of stop sequences. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.temperature">temperature</a></code> | <code>number</code> | Controls randomness, higher values increase diversity. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topK">topK</a></code> | <code>number</code> | Sample from the k most likely next tokens. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topP">topP</a></code> | <code>number</code> | Cumulative probability cutoff for token selection. |

---

##### `maximumLength`<sup>Optional</sup> <a name="maximumLength" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.maximumLength"></a>

```typescript
public readonly maximumLength: number;
```

- *Type:* number

Maximum length of output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#maximum_length BedrockAgent#maximum_length}

---

##### `stopSequences`<sup>Optional</sup> <a name="stopSequences" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.stopSequences"></a>

```typescript
public readonly stopSequences: string[];
```

- *Type:* string[]

List of stop sequences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#stop_sequences BedrockAgent#stop_sequences}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

Controls randomness, higher values increase diversity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#temperature BedrockAgent#temperature}

---

##### `topK`<sup>Optional</sup> <a name="topK" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topK"></a>

```typescript
public readonly topK: number;
```

- *Type:* number

Sample from the k most likely next tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#top_k BedrockAgent#top_k}

---

##### `topP`<sup>Optional</sup> <a name="topP" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topP"></a>

```typescript
public readonly topP: number;
```

- *Type:* number

Cumulative probability cutoff for token selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent#top_p BedrockAgent#top_p}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockAgentActionGroupsActionGroupExecutorOutputReference <a name="BedrockAgentActionGroupsActionGroupExecutorOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resetCustomControl">resetCustomControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resetLambda">resetLambda</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomControl` <a name="resetCustomControl" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resetCustomControl"></a>

```typescript
public resetCustomControl(): void
```

##### `resetLambda` <a name="resetLambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resetLambda"></a>

```typescript
public resetLambda(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControlInput">customControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambdaInput">lambdaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControl">customControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambda">lambda</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customControlInput`<sup>Optional</sup> <a name="customControlInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControlInput"></a>

```typescript
public readonly customControlInput: string;
```

- *Type:* string

---

##### `lambdaInput`<sup>Optional</sup> <a name="lambdaInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambdaInput"></a>

```typescript
public readonly lambdaInput: string;
```

- *Type:* string

---

##### `customControl`<sup>Required</sup> <a name="customControl" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControl"></a>

```typescript
public readonly customControl: string;
```

- *Type:* string

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambda"></a>

```typescript
public readonly lambda: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentActionGroupsActionGroupExecutor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a>

---


### BedrockAgentActionGroupsApiSchemaOutputReference <a name="BedrockAgentActionGroupsApiSchemaOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.putS3"></a>

```typescript
public putS3(value: BedrockAgentActionGroupsApiSchemaS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a>

---

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resetPayload"></a>

```typescript
public resetPayload(): void
```

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference">BedrockAgentActionGroupsApiSchemaS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.payloadInput">payloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.s3Input">s3Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.payload">payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.s3"></a>

```typescript
public readonly s3: BedrockAgentActionGroupsApiSchemaS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference">BedrockAgentActionGroupsApiSchemaS3OutputReference</a>

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.payloadInput"></a>

```typescript
public readonly payloadInput: string;
```

- *Type:* string

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: IResolvable | BedrockAgentActionGroupsApiSchemaS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a>

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentActionGroupsApiSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a>

---


### BedrockAgentActionGroupsApiSchemaS3OutputReference <a name="BedrockAgentActionGroupsApiSchemaS3OutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resetS3BucketName">resetS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resetS3ObjectKey">resetS3ObjectKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3BucketName` <a name="resetS3BucketName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resetS3BucketName"></a>

```typescript
public resetS3BucketName(): void
```

##### `resetS3ObjectKey` <a name="resetS3ObjectKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resetS3ObjectKey"></a>

```typescript
public resetS3ObjectKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKeyInput">s3ObjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKey">s3ObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketNameInput"></a>

```typescript
public readonly s3BucketNameInput: string;
```

- *Type:* string

---

##### `s3ObjectKeyInput`<sup>Optional</sup> <a name="s3ObjectKeyInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKeyInput"></a>

```typescript
public readonly s3ObjectKeyInput: string;
```

- *Type:* string

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3ObjectKey`<sup>Required</sup> <a name="s3ObjectKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKey"></a>

```typescript
public readonly s3ObjectKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentActionGroupsApiSchemaS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a>

---


### BedrockAgentActionGroupsFunctionSchemaFunctionsList <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.get"></a>

```typescript
public get(index: number): BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentActionGroupsFunctionSchemaFunctions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>[]

---


### BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetRequireConfirmation">resetRequireConfirmation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.putParameters"></a>

```typescript
public putParameters(value: IResolvable | {[ key: string ]: BedrockAgentActionGroupsFunctionSchemaFunctionsParameters}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>}

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetRequireConfirmation` <a name="resetRequireConfirmation" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetRequireConfirmation"></a>

```typescript
public resetRequireConfirmation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap">BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmationInput">requireConfirmationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmation">requireConfirmation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap">BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | {[ key: string ]: BedrockAgentActionGroupsFunctionSchemaFunctionsParameters};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>}

---

##### `requireConfirmationInput`<sup>Optional</sup> <a name="requireConfirmationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmationInput"></a>

```typescript
public readonly requireConfirmationInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `requireConfirmation`<sup>Required</sup> <a name="requireConfirmation" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmation"></a>

```typescript
public readonly requireConfirmation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentActionGroupsFunctionSchemaFunctions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>

---


### BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.get"></a>

```typescript
public get(key: string): BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: BedrockAgentActionGroupsFunctionSchemaFunctionsParameters};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>}

---


### BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.required">required</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentActionGroupsFunctionSchemaFunctionsParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>

---


### BedrockAgentActionGroupsFunctionSchemaOutputReference <a name="BedrockAgentActionGroupsFunctionSchemaOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.putFunctions">putFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resetFunctions">resetFunctions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFunctions` <a name="putFunctions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.putFunctions"></a>

```typescript
public putFunctions(value: IResolvable | BedrockAgentActionGroupsFunctionSchemaFunctions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.putFunctions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>[]

---

##### `resetFunctions` <a name="resetFunctions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resetFunctions"></a>

```typescript
public resetFunctions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.functions">functions</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList">BedrockAgentActionGroupsFunctionSchemaFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.functionsInput">functionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.functions"></a>

```typescript
public readonly functions: BedrockAgentActionGroupsFunctionSchemaFunctionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList">BedrockAgentActionGroupsFunctionSchemaFunctionsList</a>

---

##### `functionsInput`<sup>Optional</sup> <a name="functionsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.functionsInput"></a>

```typescript
public readonly functionsInput: IResolvable | BedrockAgentActionGroupsFunctionSchemaFunctions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentActionGroupsFunctionSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a>

---


### BedrockAgentActionGroupsList <a name="BedrockAgentActionGroupsList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentActionGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.get"></a>

```typescript
public get(index: number): BedrockAgentActionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentActionGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>[]

---


### BedrockAgentActionGroupsOutputReference <a name="BedrockAgentActionGroupsOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentActionGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putActionGroupExecutor">putActionGroupExecutor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putApiSchema">putApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putFunctionSchema">putFunctionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupExecutor">resetActionGroupExecutor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupName">resetActionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupState">resetActionGroupState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetApiSchema">resetApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetFunctionSchema">resetFunctionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetParentActionGroupSignature">resetParentActionGroupSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetSkipResourceInUseCheckOnDelete">resetSkipResourceInUseCheckOnDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActionGroupExecutor` <a name="putActionGroupExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putActionGroupExecutor"></a>

```typescript
public putActionGroupExecutor(value: BedrockAgentActionGroupsActionGroupExecutor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putActionGroupExecutor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a>

---

##### `putApiSchema` <a name="putApiSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putApiSchema"></a>

```typescript
public putApiSchema(value: BedrockAgentActionGroupsApiSchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putApiSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a>

---

##### `putFunctionSchema` <a name="putFunctionSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putFunctionSchema"></a>

```typescript
public putFunctionSchema(value: BedrockAgentActionGroupsFunctionSchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putFunctionSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a>

---

##### `resetActionGroupExecutor` <a name="resetActionGroupExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupExecutor"></a>

```typescript
public resetActionGroupExecutor(): void
```

##### `resetActionGroupName` <a name="resetActionGroupName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupName"></a>

```typescript
public resetActionGroupName(): void
```

##### `resetActionGroupState` <a name="resetActionGroupState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupState"></a>

```typescript
public resetActionGroupState(): void
```

##### `resetApiSchema` <a name="resetApiSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetApiSchema"></a>

```typescript
public resetApiSchema(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFunctionSchema` <a name="resetFunctionSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetFunctionSchema"></a>

```typescript
public resetFunctionSchema(): void
```

##### `resetParentActionGroupSignature` <a name="resetParentActionGroupSignature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetParentActionGroupSignature"></a>

```typescript
public resetParentActionGroupSignature(): void
```

##### `resetSkipResourceInUseCheckOnDelete` <a name="resetSkipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetSkipResourceInUseCheckOnDelete"></a>

```typescript
public resetSkipResourceInUseCheckOnDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupExecutor">actionGroupExecutor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference">BedrockAgentActionGroupsActionGroupExecutorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.apiSchema">apiSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference">BedrockAgentActionGroupsApiSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.functionSchema">functionSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference">BedrockAgentActionGroupsFunctionSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupExecutorInput">actionGroupExecutorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupNameInput">actionGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupStateInput">actionGroupStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.apiSchemaInput">apiSchemaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.functionSchemaInput">functionSchemaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.parentActionGroupSignatureInput">parentActionGroupSignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDeleteInput">skipResourceInUseCheckOnDeleteInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupName">actionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupState">actionGroupState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.parentActionGroupSignature">parentActionGroupSignature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDelete">skipResourceInUseCheckOnDelete</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionGroupExecutor`<sup>Required</sup> <a name="actionGroupExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupExecutor"></a>

```typescript
public readonly actionGroupExecutor: BedrockAgentActionGroupsActionGroupExecutorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference">BedrockAgentActionGroupsActionGroupExecutorOutputReference</a>

---

##### `apiSchema`<sup>Required</sup> <a name="apiSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.apiSchema"></a>

```typescript
public readonly apiSchema: BedrockAgentActionGroupsApiSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference">BedrockAgentActionGroupsApiSchemaOutputReference</a>

---

##### `functionSchema`<sup>Required</sup> <a name="functionSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.functionSchema"></a>

```typescript
public readonly functionSchema: BedrockAgentActionGroupsFunctionSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference">BedrockAgentActionGroupsFunctionSchemaOutputReference</a>

---

##### `actionGroupExecutorInput`<sup>Optional</sup> <a name="actionGroupExecutorInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupExecutorInput"></a>

```typescript
public readonly actionGroupExecutorInput: IResolvable | BedrockAgentActionGroupsActionGroupExecutor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a>

---

##### `actionGroupNameInput`<sup>Optional</sup> <a name="actionGroupNameInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupNameInput"></a>

```typescript
public readonly actionGroupNameInput: string;
```

- *Type:* string

---

##### `actionGroupStateInput`<sup>Optional</sup> <a name="actionGroupStateInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupStateInput"></a>

```typescript
public readonly actionGroupStateInput: string;
```

- *Type:* string

---

##### `apiSchemaInput`<sup>Optional</sup> <a name="apiSchemaInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.apiSchemaInput"></a>

```typescript
public readonly apiSchemaInput: IResolvable | BedrockAgentActionGroupsApiSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `functionSchemaInput`<sup>Optional</sup> <a name="functionSchemaInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.functionSchemaInput"></a>

```typescript
public readonly functionSchemaInput: IResolvable | BedrockAgentActionGroupsFunctionSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a>

---

##### `parentActionGroupSignatureInput`<sup>Optional</sup> <a name="parentActionGroupSignatureInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.parentActionGroupSignatureInput"></a>

```typescript
public readonly parentActionGroupSignatureInput: string;
```

- *Type:* string

---

##### `skipResourceInUseCheckOnDeleteInput`<sup>Optional</sup> <a name="skipResourceInUseCheckOnDeleteInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDeleteInput"></a>

```typescript
public readonly skipResourceInUseCheckOnDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `actionGroupName`<sup>Required</sup> <a name="actionGroupName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupName"></a>

```typescript
public readonly actionGroupName: string;
```

- *Type:* string

---

##### `actionGroupState`<sup>Required</sup> <a name="actionGroupState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupState"></a>

```typescript
public readonly actionGroupState: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `parentActionGroupSignature`<sup>Required</sup> <a name="parentActionGroupSignature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.parentActionGroupSignature"></a>

```typescript
public readonly parentActionGroupSignature: string;
```

- *Type:* string

---

##### `skipResourceInUseCheckOnDelete`<sup>Required</sup> <a name="skipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDelete"></a>

```typescript
public readonly skipResourceInUseCheckOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentActionGroups;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>

---


### BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference <a name="BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resetAliasArn">resetAliasArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAliasArn` <a name="resetAliasArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resetAliasArn"></a>

```typescript
public resetAliasArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArnInput">aliasArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArn">aliasArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasArnInput`<sup>Optional</sup> <a name="aliasArnInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArnInput"></a>

```typescript
public readonly aliasArnInput: string;
```

- *Type:* string

---

##### `aliasArn`<sup>Required</sup> <a name="aliasArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArn"></a>

```typescript
public readonly aliasArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentAgentCollaboratorsAgentDescriptor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a>

---


### BedrockAgentAgentCollaboratorsList <a name="BedrockAgentAgentCollaboratorsList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentAgentCollaboratorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.get"></a>

```typescript
public get(index: number): BedrockAgentAgentCollaboratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentAgentCollaborators[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>[]

---


### BedrockAgentAgentCollaboratorsOutputReference <a name="BedrockAgentAgentCollaboratorsOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.putAgentDescriptor">putAgentDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetAgentDescriptor">resetAgentDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetCollaborationInstruction">resetCollaborationInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetCollaboratorName">resetCollaboratorName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetRelayConversationHistory">resetRelayConversationHistory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentDescriptor` <a name="putAgentDescriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.putAgentDescriptor"></a>

```typescript
public putAgentDescriptor(value: BedrockAgentAgentCollaboratorsAgentDescriptor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.putAgentDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a>

---

##### `resetAgentDescriptor` <a name="resetAgentDescriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetAgentDescriptor"></a>

```typescript
public resetAgentDescriptor(): void
```

##### `resetCollaborationInstruction` <a name="resetCollaborationInstruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetCollaborationInstruction"></a>

```typescript
public resetCollaborationInstruction(): void
```

##### `resetCollaboratorName` <a name="resetCollaboratorName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetCollaboratorName"></a>

```typescript
public resetCollaboratorName(): void
```

##### `resetRelayConversationHistory` <a name="resetRelayConversationHistory" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetRelayConversationHistory"></a>

```typescript
public resetRelayConversationHistory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptor">agentDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference">BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptorInput">agentDescriptorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstructionInput">collaborationInstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaboratorNameInput">collaboratorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistoryInput">relayConversationHistoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstruction">collaborationInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaboratorName">collaboratorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistory">relayConversationHistory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentDescriptor`<sup>Required</sup> <a name="agentDescriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptor"></a>

```typescript
public readonly agentDescriptor: BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference">BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference</a>

---

##### `agentDescriptorInput`<sup>Optional</sup> <a name="agentDescriptorInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptorInput"></a>

```typescript
public readonly agentDescriptorInput: IResolvable | BedrockAgentAgentCollaboratorsAgentDescriptor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a>

---

##### `collaborationInstructionInput`<sup>Optional</sup> <a name="collaborationInstructionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstructionInput"></a>

```typescript
public readonly collaborationInstructionInput: string;
```

- *Type:* string

---

##### `collaboratorNameInput`<sup>Optional</sup> <a name="collaboratorNameInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaboratorNameInput"></a>

```typescript
public readonly collaboratorNameInput: string;
```

- *Type:* string

---

##### `relayConversationHistoryInput`<sup>Optional</sup> <a name="relayConversationHistoryInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistoryInput"></a>

```typescript
public readonly relayConversationHistoryInput: string;
```

- *Type:* string

---

##### `collaborationInstruction`<sup>Required</sup> <a name="collaborationInstruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstruction"></a>

```typescript
public readonly collaborationInstruction: string;
```

- *Type:* string

---

##### `collaboratorName`<sup>Required</sup> <a name="collaboratorName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaboratorName"></a>

```typescript
public readonly collaboratorName: string;
```

- *Type:* string

---

##### `relayConversationHistory`<sup>Required</sup> <a name="relayConversationHistory" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistory"></a>

```typescript
public readonly relayConversationHistory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentAgentCollaborators;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>

---


### BedrockAgentCustomOrchestrationExecutorOutputReference <a name="BedrockAgentCustomOrchestrationExecutorOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resetLambda">resetLambda</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambda` <a name="resetLambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resetLambda"></a>

```typescript
public resetLambda(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.lambdaInput">lambdaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.lambda">lambda</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaInput`<sup>Optional</sup> <a name="lambdaInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.lambdaInput"></a>

```typescript
public readonly lambdaInput: string;
```

- *Type:* string

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.lambda"></a>

```typescript
public readonly lambda: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentCustomOrchestrationExecutor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a>

---


### BedrockAgentCustomOrchestrationOutputReference <a name="BedrockAgentCustomOrchestrationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentCustomOrchestrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.putExecutor">putExecutor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resetExecutor">resetExecutor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExecutor` <a name="putExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.putExecutor"></a>

```typescript
public putExecutor(value: BedrockAgentCustomOrchestrationExecutor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.putExecutor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a>

---

##### `resetExecutor` <a name="resetExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resetExecutor"></a>

```typescript
public resetExecutor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.executor">executor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference">BedrockAgentCustomOrchestrationExecutorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.executorInput">executorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executor`<sup>Required</sup> <a name="executor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.executor"></a>

```typescript
public readonly executor: BedrockAgentCustomOrchestrationExecutorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference">BedrockAgentCustomOrchestrationExecutorOutputReference</a>

---

##### `executorInput`<sup>Optional</sup> <a name="executorInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.executorInput"></a>

```typescript
public readonly executorInput: IResolvable | BedrockAgentCustomOrchestrationExecutor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentCustomOrchestration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a>

---


### BedrockAgentGuardrailConfigurationOutputReference <a name="BedrockAgentGuardrailConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resetGuardrailIdentifier">resetGuardrailIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resetGuardrailVersion">resetGuardrailVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGuardrailIdentifier` <a name="resetGuardrailIdentifier" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resetGuardrailIdentifier"></a>

```typescript
public resetGuardrailIdentifier(): void
```

##### `resetGuardrailVersion` <a name="resetGuardrailVersion" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resetGuardrailVersion"></a>

```typescript
public resetGuardrailVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifierInput">guardrailIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersionInput">guardrailVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifier">guardrailIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersion">guardrailVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `guardrailIdentifierInput`<sup>Optional</sup> <a name="guardrailIdentifierInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifierInput"></a>

```typescript
public readonly guardrailIdentifierInput: string;
```

- *Type:* string

---

##### `guardrailVersionInput`<sup>Optional</sup> <a name="guardrailVersionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersionInput"></a>

```typescript
public readonly guardrailVersionInput: string;
```

- *Type:* string

---

##### `guardrailIdentifier`<sup>Required</sup> <a name="guardrailIdentifier" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifier"></a>

```typescript
public readonly guardrailIdentifier: string;
```

- *Type:* string

---

##### `guardrailVersion`<sup>Required</sup> <a name="guardrailVersion" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersion"></a>

```typescript
public readonly guardrailVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentGuardrailConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a>

---


### BedrockAgentKnowledgeBasesList <a name="BedrockAgentKnowledgeBasesList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentKnowledgeBasesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.get"></a>

```typescript
public get(index: number): BedrockAgentKnowledgeBasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentKnowledgeBases[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>[]

---


### BedrockAgentKnowledgeBasesOutputReference <a name="BedrockAgentKnowledgeBasesOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentKnowledgeBasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetKnowledgeBaseId">resetKnowledgeBaseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetKnowledgeBaseState">resetKnowledgeBaseState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetKnowledgeBaseId` <a name="resetKnowledgeBaseId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetKnowledgeBaseId"></a>

```typescript
public resetKnowledgeBaseId(): void
```

##### `resetKnowledgeBaseState` <a name="resetKnowledgeBaseState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetKnowledgeBaseState"></a>

```typescript
public resetKnowledgeBaseState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseIdInput">knowledgeBaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseStateInput">knowledgeBaseStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseState">knowledgeBaseState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `knowledgeBaseIdInput`<sup>Optional</sup> <a name="knowledgeBaseIdInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseIdInput"></a>

```typescript
public readonly knowledgeBaseIdInput: string;
```

- *Type:* string

---

##### `knowledgeBaseStateInput`<sup>Optional</sup> <a name="knowledgeBaseStateInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseStateInput"></a>

```typescript
public readonly knowledgeBaseStateInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

---

##### `knowledgeBaseState`<sup>Required</sup> <a name="knowledgeBaseState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseState"></a>

```typescript
public readonly knowledgeBaseState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentKnowledgeBases;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>

---


### BedrockAgentMemoryConfigurationOutputReference <a name="BedrockAgentMemoryConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentMemoryConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.putSessionSummaryConfiguration">putSessionSummaryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetEnabledMemoryTypes">resetEnabledMemoryTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetSessionSummaryConfiguration">resetSessionSummaryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetStorageDays">resetStorageDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSessionSummaryConfiguration` <a name="putSessionSummaryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.putSessionSummaryConfiguration"></a>

```typescript
public putSessionSummaryConfiguration(value: BedrockAgentMemoryConfigurationSessionSummaryConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.putSessionSummaryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a>

---

##### `resetEnabledMemoryTypes` <a name="resetEnabledMemoryTypes" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetEnabledMemoryTypes"></a>

```typescript
public resetEnabledMemoryTypes(): void
```

##### `resetSessionSummaryConfiguration` <a name="resetSessionSummaryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetSessionSummaryConfiguration"></a>

```typescript
public resetSessionSummaryConfiguration(): void
```

##### `resetStorageDays` <a name="resetStorageDays" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetStorageDays"></a>

```typescript
public resetStorageDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfiguration">sessionSummaryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference">BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypesInput">enabledMemoryTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfigurationInput">sessionSummaryConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.storageDaysInput">storageDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypes">enabledMemoryTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.storageDays">storageDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sessionSummaryConfiguration`<sup>Required</sup> <a name="sessionSummaryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfiguration"></a>

```typescript
public readonly sessionSummaryConfiguration: BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference">BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference</a>

---

##### `enabledMemoryTypesInput`<sup>Optional</sup> <a name="enabledMemoryTypesInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypesInput"></a>

```typescript
public readonly enabledMemoryTypesInput: string[];
```

- *Type:* string[]

---

##### `sessionSummaryConfigurationInput`<sup>Optional</sup> <a name="sessionSummaryConfigurationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfigurationInput"></a>

```typescript
public readonly sessionSummaryConfigurationInput: IResolvable | BedrockAgentMemoryConfigurationSessionSummaryConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a>

---

##### `storageDaysInput`<sup>Optional</sup> <a name="storageDaysInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.storageDaysInput"></a>

```typescript
public readonly storageDaysInput: number;
```

- *Type:* number

---

##### `enabledMemoryTypes`<sup>Required</sup> <a name="enabledMemoryTypes" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypes"></a>

```typescript
public readonly enabledMemoryTypes: string[];
```

- *Type:* string[]

---

##### `storageDays`<sup>Required</sup> <a name="storageDays" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.storageDays"></a>

```typescript
public readonly storageDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentMemoryConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a>

---


### BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference <a name="BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resetMaxRecentSessions">resetMaxRecentSessions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxRecentSessions` <a name="resetMaxRecentSessions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resetMaxRecentSessions"></a>

```typescript
public resetMaxRecentSessions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessionsInput">maxRecentSessionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessions">maxRecentSessions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxRecentSessionsInput`<sup>Optional</sup> <a name="maxRecentSessionsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessionsInput"></a>

```typescript
public readonly maxRecentSessionsInput: number;
```

- *Type:* number

---

##### `maxRecentSessions`<sup>Required</sup> <a name="maxRecentSessions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessions"></a>

```typescript
public readonly maxRecentSessions: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentMemoryConfigurationSessionSummaryConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a>

---


### BedrockAgentPromptOverrideConfigurationOutputReference <a name="BedrockAgentPromptOverrideConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations">putPromptConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resetOverrideLambda">resetOverrideLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resetPromptConfigurations">resetPromptConfigurations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPromptConfigurations` <a name="putPromptConfigurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations"></a>

```typescript
public putPromptConfigurations(value: IResolvable | BedrockAgentPromptOverrideConfigurationPromptConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>[]

---

##### `resetOverrideLambda` <a name="resetOverrideLambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resetOverrideLambda"></a>

```typescript
public resetOverrideLambda(): void
```

##### `resetPromptConfigurations` <a name="resetPromptConfigurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resetPromptConfigurations"></a>

```typescript
public resetPromptConfigurations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurations">promptConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList">BedrockAgentPromptOverrideConfigurationPromptConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambdaInput">overrideLambdaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurationsInput">promptConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambda">overrideLambda</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `promptConfigurations`<sup>Required</sup> <a name="promptConfigurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurations"></a>

```typescript
public readonly promptConfigurations: BedrockAgentPromptOverrideConfigurationPromptConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList">BedrockAgentPromptOverrideConfigurationPromptConfigurationsList</a>

---

##### `overrideLambdaInput`<sup>Optional</sup> <a name="overrideLambdaInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambdaInput"></a>

```typescript
public readonly overrideLambdaInput: string;
```

- *Type:* string

---

##### `promptConfigurationsInput`<sup>Optional</sup> <a name="promptConfigurationsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurationsInput"></a>

```typescript
public readonly promptConfigurationsInput: IResolvable | BedrockAgentPromptOverrideConfigurationPromptConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>[]

---

##### `overrideLambda`<sup>Required</sup> <a name="overrideLambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambda"></a>

```typescript
public readonly overrideLambda: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentPromptOverrideConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a>

---


### BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetMaximumLength">resetMaximumLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetStopSequences">resetStopSequences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopK">resetTopK</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopP">resetTopP</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumLength` <a name="resetMaximumLength" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetMaximumLength"></a>

```typescript
public resetMaximumLength(): void
```

##### `resetStopSequences` <a name="resetStopSequences" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetStopSequences"></a>

```typescript
public resetStopSequences(): void
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTemperature"></a>

```typescript
public resetTemperature(): void
```

##### `resetTopK` <a name="resetTopK" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopK"></a>

```typescript
public resetTopK(): void
```

##### `resetTopP` <a name="resetTopP" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopP"></a>

```typescript
public resetTopP(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLengthInput">maximumLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequencesInput">stopSequencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topKInput">topKInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topPInput">topPInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLength">maximumLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequences">stopSequences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperature">temperature</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topK">topK</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topP">topP</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumLengthInput`<sup>Optional</sup> <a name="maximumLengthInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLengthInput"></a>

```typescript
public readonly maximumLengthInput: number;
```

- *Type:* number

---

##### `stopSequencesInput`<sup>Optional</sup> <a name="stopSequencesInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequencesInput"></a>

```typescript
public readonly stopSequencesInput: string[];
```

- *Type:* string[]

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperatureInput"></a>

```typescript
public readonly temperatureInput: number;
```

- *Type:* number

---

##### `topKInput`<sup>Optional</sup> <a name="topKInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topKInput"></a>

```typescript
public readonly topKInput: number;
```

- *Type:* number

---

##### `topPInput`<sup>Optional</sup> <a name="topPInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topPInput"></a>

```typescript
public readonly topPInput: number;
```

- *Type:* number

---

##### `maximumLength`<sup>Required</sup> <a name="maximumLength" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLength"></a>

```typescript
public readonly maximumLength: number;
```

- *Type:* number

---

##### `stopSequences`<sup>Required</sup> <a name="stopSequences" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequences"></a>

```typescript
public readonly stopSequences: string[];
```

- *Type:* string[]

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

---

##### `topK`<sup>Required</sup> <a name="topK" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topK"></a>

```typescript
public readonly topK: number;
```

- *Type:* number

---

##### `topP`<sup>Required</sup> <a name="topP" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topP"></a>

```typescript
public readonly topP: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>

---


### BedrockAgentPromptOverrideConfigurationPromptConfigurationsList <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurationsList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.get"></a>

```typescript
public get(index: number): BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentPromptOverrideConfigurationPromptConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>[]

---


### BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer"></a>

```typescript
import { bedrockAgent } from '@cdktn/provider-awscc'

new bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration">putInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetAdditionalModelRequestFields">resetAdditionalModelRequestFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetBasePromptTemplate">resetBasePromptTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetFoundationModel">resetFoundationModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetInferenceConfiguration">resetInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetParserMode">resetParserMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptCreationMode">resetPromptCreationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptState">resetPromptState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptType">resetPromptType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInferenceConfiguration` <a name="putInferenceConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration"></a>

```typescript
public putInferenceConfiguration(value: BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>

---

##### `resetAdditionalModelRequestFields` <a name="resetAdditionalModelRequestFields" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetAdditionalModelRequestFields"></a>

```typescript
public resetAdditionalModelRequestFields(): void
```

##### `resetBasePromptTemplate` <a name="resetBasePromptTemplate" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetBasePromptTemplate"></a>

```typescript
public resetBasePromptTemplate(): void
```

##### `resetFoundationModel` <a name="resetFoundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetFoundationModel"></a>

```typescript
public resetFoundationModel(): void
```

##### `resetInferenceConfiguration` <a name="resetInferenceConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetInferenceConfiguration"></a>

```typescript
public resetInferenceConfiguration(): void
```

##### `resetParserMode` <a name="resetParserMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetParserMode"></a>

```typescript
public resetParserMode(): void
```

##### `resetPromptCreationMode` <a name="resetPromptCreationMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptCreationMode"></a>

```typescript
public resetPromptCreationMode(): void
```

##### `resetPromptState` <a name="resetPromptState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptState"></a>

```typescript
public resetPromptState(): void
```

##### `resetPromptType` <a name="resetPromptType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptType"></a>

```typescript
public resetPromptType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfiguration">inferenceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFieldsInput">additionalModelRequestFieldsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplateInput">basePromptTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModelInput">foundationModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfigurationInput">inferenceConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserModeInput">parserModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationModeInput">promptCreationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptStateInput">promptStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptTypeInput">promptTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFields">additionalModelRequestFields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplate">basePromptTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModel">foundationModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserMode">parserMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationMode">promptCreationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptState">promptState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptType">promptType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inferenceConfiguration`<sup>Required</sup> <a name="inferenceConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfiguration"></a>

```typescript
public readonly inferenceConfiguration: BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference</a>

---

##### `additionalModelRequestFieldsInput`<sup>Optional</sup> <a name="additionalModelRequestFieldsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFieldsInput"></a>

```typescript
public readonly additionalModelRequestFieldsInput: string;
```

- *Type:* string

---

##### `basePromptTemplateInput`<sup>Optional</sup> <a name="basePromptTemplateInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplateInput"></a>

```typescript
public readonly basePromptTemplateInput: string;
```

- *Type:* string

---

##### `foundationModelInput`<sup>Optional</sup> <a name="foundationModelInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModelInput"></a>

```typescript
public readonly foundationModelInput: string;
```

- *Type:* string

---

##### `inferenceConfigurationInput`<sup>Optional</sup> <a name="inferenceConfigurationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfigurationInput"></a>

```typescript
public readonly inferenceConfigurationInput: IResolvable | BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>

---

##### `parserModeInput`<sup>Optional</sup> <a name="parserModeInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserModeInput"></a>

```typescript
public readonly parserModeInput: string;
```

- *Type:* string

---

##### `promptCreationModeInput`<sup>Optional</sup> <a name="promptCreationModeInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationModeInput"></a>

```typescript
public readonly promptCreationModeInput: string;
```

- *Type:* string

---

##### `promptStateInput`<sup>Optional</sup> <a name="promptStateInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptStateInput"></a>

```typescript
public readonly promptStateInput: string;
```

- *Type:* string

---

##### `promptTypeInput`<sup>Optional</sup> <a name="promptTypeInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptTypeInput"></a>

```typescript
public readonly promptTypeInput: string;
```

- *Type:* string

---

##### `additionalModelRequestFields`<sup>Required</sup> <a name="additionalModelRequestFields" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFields"></a>

```typescript
public readonly additionalModelRequestFields: string;
```

- *Type:* string

---

##### `basePromptTemplate`<sup>Required</sup> <a name="basePromptTemplate" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplate"></a>

```typescript
public readonly basePromptTemplate: string;
```

- *Type:* string

---

##### `foundationModel`<sup>Required</sup> <a name="foundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModel"></a>

```typescript
public readonly foundationModel: string;
```

- *Type:* string

---

##### `parserMode`<sup>Required</sup> <a name="parserMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserMode"></a>

```typescript
public readonly parserMode: string;
```

- *Type:* string

---

##### `promptCreationMode`<sup>Required</sup> <a name="promptCreationMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationMode"></a>

```typescript
public readonly promptCreationMode: string;
```

- *Type:* string

---

##### `promptState`<sup>Required</sup> <a name="promptState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptState"></a>

```typescript
public readonly promptState: string;
```

- *Type:* string

---

##### `promptType`<sup>Required</sup> <a name="promptType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptType"></a>

```typescript
public readonly promptType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentPromptOverrideConfigurationPromptConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>

---



