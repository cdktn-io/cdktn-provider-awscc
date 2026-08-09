# `bedrockagentcoreHarness` Submodule <a name="`bedrockagentcoreHarness` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreHarness"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreHarness <a name="BedrockagentcoreHarness" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness awscc_bedrockagentcore_harness}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarness(scope: Construct, id: string, config: BedrockagentcoreHarnessConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig">BedrockagentcoreHarnessConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig">BedrockagentcoreHarnessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putAuthorizerConfiguration">putAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putEnvironmentArtifact">putEnvironmentArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putMemory">putMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putModel">putModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putSkills">putSkills</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putSystemPrompt">putSystemPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTools">putTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTruncation">putTruncation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetAllowedTools">resetAllowedTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetAuthorizerConfiguration">resetAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetEnvironmentArtifact">resetEnvironmentArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetMaxIterations">resetMaxIterations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetMaxTokens">resetMaxTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetSkills">resetSkills</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetSystemPrompt">resetSystemPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTools">resetTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTruncation">resetTruncation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorizerConfiguration` <a name="putAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putAuthorizerConfiguration"></a>

```typescript
public putAuthorizerConfiguration(value: BedrockagentcoreHarnessAuthorizerConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putAuthorizerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration">BedrockagentcoreHarnessAuthorizerConfiguration</a>

---

##### `putEnvironment` <a name="putEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putEnvironment"></a>

```typescript
public putEnvironment(value: BedrockagentcoreHarnessEnvironment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment">BedrockagentcoreHarnessEnvironment</a>

---

##### `putEnvironmentArtifact` <a name="putEnvironmentArtifact" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putEnvironmentArtifact"></a>

```typescript
public putEnvironmentArtifact(value: BedrockagentcoreHarnessEnvironmentArtifact): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putEnvironmentArtifact.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact">BedrockagentcoreHarnessEnvironmentArtifact</a>

---

##### `putMemory` <a name="putMemory" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putMemory"></a>

```typescript
public putMemory(value: BedrockagentcoreHarnessMemory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putMemory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory">BedrockagentcoreHarnessMemory</a>

---

##### `putModel` <a name="putModel" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putModel"></a>

```typescript
public putModel(value: BedrockagentcoreHarnessModel): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putModel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel">BedrockagentcoreHarnessModel</a>

---

##### `putSkills` <a name="putSkills" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putSkills"></a>

```typescript
public putSkills(value: IResolvable | BedrockagentcoreHarnessSkills[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putSkills.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills">BedrockagentcoreHarnessSkills</a>[]

---

##### `putSystemPrompt` <a name="putSystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putSystemPrompt"></a>

```typescript
public putSystemPrompt(value: IResolvable | BedrockagentcoreHarnessSystemPrompt[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putSystemPrompt.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt">BedrockagentcoreHarnessSystemPrompt</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTags"></a>

```typescript
public putTags(value: IResolvable | BedrockagentcoreHarnessTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags">BedrockagentcoreHarnessTags</a>[]

---

##### `putTools` <a name="putTools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTools"></a>

```typescript
public putTools(value: IResolvable | BedrockagentcoreHarnessTools[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTools.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools">BedrockagentcoreHarnessTools</a>[]

---

##### `putTruncation` <a name="putTruncation" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTruncation"></a>

```typescript
public putTruncation(value: BedrockagentcoreHarnessTruncation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTruncation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation">BedrockagentcoreHarnessTruncation</a>

---

##### `resetAllowedTools` <a name="resetAllowedTools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetAllowedTools"></a>

```typescript
public resetAllowedTools(): void
```

##### `resetAuthorizerConfiguration` <a name="resetAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetAuthorizerConfiguration"></a>

```typescript
public resetAuthorizerConfiguration(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetEnvironmentArtifact` <a name="resetEnvironmentArtifact" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetEnvironmentArtifact"></a>

```typescript
public resetEnvironmentArtifact(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetMaxIterations` <a name="resetMaxIterations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetMaxIterations"></a>

```typescript
public resetMaxIterations(): void
```

##### `resetMaxTokens` <a name="resetMaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetMaxTokens"></a>

```typescript
public resetMaxTokens(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetMemory"></a>

```typescript
public resetMemory(): void
```

##### `resetSkills` <a name="resetSkills" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetSkills"></a>

```typescript
public resetSkills(): void
```

##### `resetSystemPrompt` <a name="resetSystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetSystemPrompt"></a>

```typescript
public resetSystemPrompt(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```

##### `resetTools` <a name="resetTools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTools"></a>

```typescript
public resetTools(): void
```

##### `resetTruncation` <a name="resetTruncation" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTruncation"></a>

```typescript
public resetTruncation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreHarness resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isConstruct"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

bedrockagentcoreHarness.BedrockagentcoreHarness.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isTerraformElement"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

bedrockagentcoreHarness.BedrockagentcoreHarness.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isTerraformResource"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

bedrockagentcoreHarness.BedrockagentcoreHarness.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.generateConfigForImport"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

bedrockagentcoreHarness.BedrockagentcoreHarness.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BedrockagentcoreHarness resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreHarness to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreHarness that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreHarness to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.authorizerConfiguration">authorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference">BedrockagentcoreHarnessEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentArtifact">environmentArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference">BedrockagentcoreHarnessEnvironmentArtifactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.harnessId">harnessId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.memory">memory</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference">BedrockagentcoreHarnessMemoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.model">model</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference">BedrockagentcoreHarnessModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.skills">skills</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList">BedrockagentcoreHarnessSkillsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.systemPrompt">systemPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList">BedrockagentcoreHarnessSystemPromptList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList">BedrockagentcoreHarnessTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tools">tools</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList">BedrockagentcoreHarnessToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.truncation">truncation</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference">BedrockagentcoreHarnessTruncationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.allowedToolsInput">allowedToolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.authorizerConfigurationInput">authorizerConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration">BedrockagentcoreHarnessAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentArtifactInput">environmentArtifactInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact">BedrockagentcoreHarnessEnvironmentArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentInput">environmentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment">BedrockagentcoreHarnessEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.harnessNameInput">harnessNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxIterationsInput">maxIterationsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxTokensInput">maxTokensInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.memoryInput">memoryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory">BedrockagentcoreHarnessMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.modelInput">modelInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel">BedrockagentcoreHarnessModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.skillsInput">skillsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills">BedrockagentcoreHarnessSkills</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.systemPromptInput">systemPromptInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt">BedrockagentcoreHarnessSystemPrompt</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags">BedrockagentcoreHarnessTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.toolsInput">toolsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools">BedrockagentcoreHarnessTools</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.truncationInput">truncationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation">BedrockagentcoreHarnessTruncation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.allowedTools">allowedTools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.harnessName">harnessName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxIterations">maxIterations</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxTokens">maxTokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `authorizerConfiguration`<sup>Required</sup> <a name="authorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.authorizerConfiguration"></a>

```typescript
public readonly authorizerConfiguration: BedrockagentcoreHarnessAuthorizerConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environment"></a>

```typescript
public readonly environment: BedrockagentcoreHarnessEnvironmentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference">BedrockagentcoreHarnessEnvironmentOutputReference</a>

---

##### `environmentArtifact`<sup>Required</sup> <a name="environmentArtifact" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentArtifact"></a>

```typescript
public readonly environmentArtifact: BedrockagentcoreHarnessEnvironmentArtifactOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference">BedrockagentcoreHarnessEnvironmentArtifactOutputReference</a>

---

##### `harnessId`<sup>Required</sup> <a name="harnessId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.harnessId"></a>

```typescript
public readonly harnessId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.memory"></a>

```typescript
public readonly memory: BedrockagentcoreHarnessMemoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference">BedrockagentcoreHarnessMemoryOutputReference</a>

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.model"></a>

```typescript
public readonly model: BedrockagentcoreHarnessModelOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference">BedrockagentcoreHarnessModelOutputReference</a>

---

##### `skills`<sup>Required</sup> <a name="skills" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.skills"></a>

```typescript
public readonly skills: BedrockagentcoreHarnessSkillsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList">BedrockagentcoreHarnessSkillsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `systemPrompt`<sup>Required</sup> <a name="systemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.systemPrompt"></a>

```typescript
public readonly systemPrompt: BedrockagentcoreHarnessSystemPromptList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList">BedrockagentcoreHarnessSystemPromptList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tags"></a>

```typescript
public readonly tags: BedrockagentcoreHarnessTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList">BedrockagentcoreHarnessTagsList</a>

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tools"></a>

```typescript
public readonly tools: BedrockagentcoreHarnessToolsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList">BedrockagentcoreHarnessToolsList</a>

---

##### `truncation`<sup>Required</sup> <a name="truncation" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.truncation"></a>

```typescript
public readonly truncation: BedrockagentcoreHarnessTruncationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference">BedrockagentcoreHarnessTruncationOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `allowedToolsInput`<sup>Optional</sup> <a name="allowedToolsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.allowedToolsInput"></a>

```typescript
public readonly allowedToolsInput: string[];
```

- *Type:* string[]

---

##### `authorizerConfigurationInput`<sup>Optional</sup> <a name="authorizerConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.authorizerConfigurationInput"></a>

```typescript
public readonly authorizerConfigurationInput: IResolvable | BedrockagentcoreHarnessAuthorizerConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration">BedrockagentcoreHarnessAuthorizerConfiguration</a>

---

##### `environmentArtifactInput`<sup>Optional</sup> <a name="environmentArtifactInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentArtifactInput"></a>

```typescript
public readonly environmentArtifactInput: IResolvable | BedrockagentcoreHarnessEnvironmentArtifact;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact">BedrockagentcoreHarnessEnvironmentArtifact</a>

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentInput"></a>

```typescript
public readonly environmentInput: IResolvable | BedrockagentcoreHarnessEnvironment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment">BedrockagentcoreHarnessEnvironment</a>

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `harnessNameInput`<sup>Optional</sup> <a name="harnessNameInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.harnessNameInput"></a>

```typescript
public readonly harnessNameInput: string;
```

- *Type:* string

---

##### `maxIterationsInput`<sup>Optional</sup> <a name="maxIterationsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxIterationsInput"></a>

```typescript
public readonly maxIterationsInput: number;
```

- *Type:* number

---

##### `maxTokensInput`<sup>Optional</sup> <a name="maxTokensInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxTokensInput"></a>

```typescript
public readonly maxTokensInput: number;
```

- *Type:* number

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.memoryInput"></a>

```typescript
public readonly memoryInput: IResolvable | BedrockagentcoreHarnessMemory;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory">BedrockagentcoreHarnessMemory</a>

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.modelInput"></a>

```typescript
public readonly modelInput: IResolvable | BedrockagentcoreHarnessModel;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel">BedrockagentcoreHarnessModel</a>

---

##### `skillsInput`<sup>Optional</sup> <a name="skillsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.skillsInput"></a>

```typescript
public readonly skillsInput: IResolvable | BedrockagentcoreHarnessSkills[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills">BedrockagentcoreHarnessSkills</a>[]

---

##### `systemPromptInput`<sup>Optional</sup> <a name="systemPromptInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.systemPromptInput"></a>

```typescript
public readonly systemPromptInput: IResolvable | BedrockagentcoreHarnessSystemPrompt[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt">BedrockagentcoreHarnessSystemPrompt</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | BedrockagentcoreHarnessTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags">BedrockagentcoreHarnessTags</a>[]

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `toolsInput`<sup>Optional</sup> <a name="toolsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.toolsInput"></a>

```typescript
public readonly toolsInput: IResolvable | BedrockagentcoreHarnessTools[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools">BedrockagentcoreHarnessTools</a>[]

---

##### `truncationInput`<sup>Optional</sup> <a name="truncationInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.truncationInput"></a>

```typescript
public readonly truncationInput: IResolvable | BedrockagentcoreHarnessTruncation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation">BedrockagentcoreHarnessTruncation</a>

---

##### `allowedTools`<sup>Required</sup> <a name="allowedTools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.allowedTools"></a>

```typescript
public readonly allowedTools: string[];
```

- *Type:* string[]

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `harnessName`<sup>Required</sup> <a name="harnessName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.harnessName"></a>

```typescript
public readonly harnessName: string;
```

- *Type:* string

---

##### `maxIterations`<sup>Required</sup> <a name="maxIterations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxIterations"></a>

```typescript
public readonly maxIterations: number;
```

- *Type:* number

---

##### `maxTokens`<sup>Required</sup> <a name="maxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxTokens"></a>

```typescript
public readonly maxTokens: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreHarnessAuthorizerConfiguration <a name="BedrockagentcoreHarnessAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessAuthorizerConfiguration: bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration.property.customJwtAuthorizer">customJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#custom_jwt_authorizer BedrockagentcoreHarness#custom_jwt_authorizer}. |

---

##### `customJwtAuthorizer`<sup>Optional</sup> <a name="customJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration.property.customJwtAuthorizer"></a>

```typescript
public readonly customJwtAuthorizer: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#custom_jwt_authorizer BedrockagentcoreHarness#custom_jwt_authorizer}.

---

### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer: bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience">allowedAudience</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#allowed_audience BedrockagentcoreHarness#allowed_audience}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients">allowedClients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#allowed_clients BedrockagentcoreHarness#allowed_clients}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes">allowedScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#allowed_scopes BedrockagentcoreHarness#allowed_scopes}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.customClaims">customClaims</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#custom_claims BedrockagentcoreHarness#custom_claims}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl">discoveryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#discovery_url BedrockagentcoreHarness#discovery_url}. |

---

##### `allowedAudience`<sup>Optional</sup> <a name="allowedAudience" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience"></a>

```typescript
public readonly allowedAudience: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#allowed_audience BedrockagentcoreHarness#allowed_audience}.

---

##### `allowedClients`<sup>Optional</sup> <a name="allowedClients" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients"></a>

```typescript
public readonly allowedClients: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#allowed_clients BedrockagentcoreHarness#allowed_clients}.

---

##### `allowedScopes`<sup>Optional</sup> <a name="allowedScopes" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes"></a>

```typescript
public readonly allowedScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#allowed_scopes BedrockagentcoreHarness#allowed_scopes}.

---

##### `customClaims`<sup>Optional</sup> <a name="customClaims" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.customClaims"></a>

```typescript
public readonly customClaims: IResolvable | BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#custom_claims BedrockagentcoreHarness#custom_claims}.

---

##### `discoveryUrl`<sup>Optional</sup> <a name="discoveryUrl" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl"></a>

```typescript
public readonly discoveryUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#discovery_url BedrockagentcoreHarness#discovery_url}.

---

### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims: bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.authorizingClaimMatchValue">authorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#authorizing_claim_match_value BedrockagentcoreHarness#authorizing_claim_match_value}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimName">inboundTokenClaimName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#inbound_token_claim_name BedrockagentcoreHarness#inbound_token_claim_name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimValueType">inboundTokenClaimValueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#inbound_token_claim_value_type BedrockagentcoreHarness#inbound_token_claim_value_type}. |

---

##### `authorizingClaimMatchValue`<sup>Optional</sup> <a name="authorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.authorizingClaimMatchValue"></a>

```typescript
public readonly authorizingClaimMatchValue: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#authorizing_claim_match_value BedrockagentcoreHarness#authorizing_claim_match_value}.

---

##### `inboundTokenClaimName`<sup>Optional</sup> <a name="inboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimName"></a>

```typescript
public readonly inboundTokenClaimName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#inbound_token_claim_name BedrockagentcoreHarness#inbound_token_claim_name}.

---

##### `inboundTokenClaimValueType`<sup>Optional</sup> <a name="inboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimValueType"></a>

```typescript
public readonly inboundTokenClaimValueType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#inbound_token_claim_value_type BedrockagentcoreHarness#inbound_token_claim_value_type}.

---

### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue: bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchOperator">claimMatchOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#claim_match_operator BedrockagentcoreHarness#claim_match_operator}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchValue">claimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#claim_match_value BedrockagentcoreHarness#claim_match_value}. |

---

##### `claimMatchOperator`<sup>Optional</sup> <a name="claimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchOperator"></a>

```typescript
public readonly claimMatchOperator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#claim_match_operator BedrockagentcoreHarness#claim_match_operator}.

---

##### `claimMatchValue`<sup>Optional</sup> <a name="claimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchValue"></a>

```typescript
public readonly claimMatchValue: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#claim_match_value BedrockagentcoreHarness#claim_match_value}.

---

### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue: bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString">matchValueString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#match_value_string BedrockagentcoreHarness#match_value_string}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList">matchValueStringList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#match_value_string_list BedrockagentcoreHarness#match_value_string_list}. |

---

##### `matchValueString`<sup>Optional</sup> <a name="matchValueString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString"></a>

```typescript
public readonly matchValueString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#match_value_string BedrockagentcoreHarness#match_value_string}.

---

##### `matchValueStringList`<sup>Optional</sup> <a name="matchValueStringList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList"></a>

```typescript
public readonly matchValueStringList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#match_value_string_list BedrockagentcoreHarness#match_value_string_list}.

---

### BedrockagentcoreHarnessConfig <a name="BedrockagentcoreHarnessConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessConfig: bedrockagentcoreHarness.BedrockagentcoreHarnessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | The ARN of the IAM role that the harness assumes when running. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.harnessName">harnessName</a></code> | <code>string</code> | The name of the harness. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.model">model</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel">BedrockagentcoreHarnessModel</a></code> | The model configuration for the harness. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.allowedTools">allowedTools</a></code> | <code>string[]</code> | The tools that the agent is allowed to use. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.authorizerConfiguration">authorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration">BedrockagentcoreHarnessAuthorizerConfiguration</a></code> | The inbound authorization configuration for authenticating incoming requests. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment">BedrockagentcoreHarnessEnvironment</a></code> | The compute environment configuration for the harness, including underlying runtime information. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.environmentArtifact">environmentArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact">BedrockagentcoreHarnessEnvironmentArtifact</a></code> | The environment artifact for the harness, such as a custom container image. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Environment variables to set in the harness runtime environment. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.maxIterations">maxIterations</a></code> | <code>number</code> | The maximum number of iterations the agent loop can execute per invocation. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.maxTokens">maxTokens</a></code> | <code>number</code> | The maximum number of tokens the agent can generate per iteration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.memory">memory</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory">BedrockagentcoreHarnessMemory</a></code> | The AgentCore Memory configuration for persisting conversation context. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.skills">skills</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills">BedrockagentcoreHarnessSkills</a>[]</code> | The skills available to the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.systemPrompt">systemPrompt</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt">BedrockagentcoreHarnessSystemPrompt</a>[]</code> | The system prompt that defines the agent's behavior. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags">BedrockagentcoreHarnessTags</a>[]</code> | Tags to apply to the harness resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | The maximum duration in seconds for the agent loop execution per invocation. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.tools">tools</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools">BedrockagentcoreHarnessTools</a>[]</code> | The tools available to the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.truncation">truncation</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation">BedrockagentcoreHarnessTruncation</a></code> | The truncation configuration for managing conversation context. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

The ARN of the IAM role that the harness assumes when running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#execution_role_arn BedrockagentcoreHarness#execution_role_arn}

---

##### `harnessName`<sup>Required</sup> <a name="harnessName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.harnessName"></a>

```typescript
public readonly harnessName: string;
```

- *Type:* string

The name of the harness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#harness_name BedrockagentcoreHarness#harness_name}

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.model"></a>

```typescript
public readonly model: BedrockagentcoreHarnessModel;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel">BedrockagentcoreHarnessModel</a>

The model configuration for the harness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#model BedrockagentcoreHarness#model}

---

##### `allowedTools`<sup>Optional</sup> <a name="allowedTools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.allowedTools"></a>

```typescript
public readonly allowedTools: string[];
```

- *Type:* string[]

The tools that the agent is allowed to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#allowed_tools BedrockagentcoreHarness#allowed_tools}

---

##### `authorizerConfiguration`<sup>Optional</sup> <a name="authorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.authorizerConfiguration"></a>

```typescript
public readonly authorizerConfiguration: BedrockagentcoreHarnessAuthorizerConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration">BedrockagentcoreHarnessAuthorizerConfiguration</a>

The inbound authorization configuration for authenticating incoming requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#authorizer_configuration BedrockagentcoreHarness#authorizer_configuration}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.environment"></a>

```typescript
public readonly environment: BedrockagentcoreHarnessEnvironment;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment">BedrockagentcoreHarnessEnvironment</a>

The compute environment configuration for the harness, including underlying runtime information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#environment BedrockagentcoreHarness#environment}

---

##### `environmentArtifact`<sup>Optional</sup> <a name="environmentArtifact" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.environmentArtifact"></a>

```typescript
public readonly environmentArtifact: BedrockagentcoreHarnessEnvironmentArtifact;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact">BedrockagentcoreHarnessEnvironmentArtifact</a>

The environment artifact for the harness, such as a custom container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#environment_artifact BedrockagentcoreHarness#environment_artifact}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables to set in the harness runtime environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#environment_variables BedrockagentcoreHarness#environment_variables}

---

##### `maxIterations`<sup>Optional</sup> <a name="maxIterations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.maxIterations"></a>

```typescript
public readonly maxIterations: number;
```

- *Type:* number

The maximum number of iterations the agent loop can execute per invocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#max_iterations BedrockagentcoreHarness#max_iterations}

---

##### `maxTokens`<sup>Optional</sup> <a name="maxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.maxTokens"></a>

```typescript
public readonly maxTokens: number;
```

- *Type:* number

The maximum number of tokens the agent can generate per iteration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.memory"></a>

```typescript
public readonly memory: BedrockagentcoreHarnessMemory;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory">BedrockagentcoreHarnessMemory</a>

The AgentCore Memory configuration for persisting conversation context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#memory BedrockagentcoreHarness#memory}

---

##### `skills`<sup>Optional</sup> <a name="skills" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.skills"></a>

```typescript
public readonly skills: IResolvable | BedrockagentcoreHarnessSkills[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills">BedrockagentcoreHarnessSkills</a>[]

The skills available to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#skills BedrockagentcoreHarness#skills}

---

##### `systemPrompt`<sup>Optional</sup> <a name="systemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.systemPrompt"></a>

```typescript
public readonly systemPrompt: IResolvable | BedrockagentcoreHarnessSystemPrompt[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt">BedrockagentcoreHarnessSystemPrompt</a>[]

The system prompt that defines the agent's behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#system_prompt BedrockagentcoreHarness#system_prompt}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | BedrockagentcoreHarnessTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags">BedrockagentcoreHarnessTags</a>[]

Tags to apply to the harness resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#tags BedrockagentcoreHarness#tags}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

The maximum duration in seconds for the agent loop execution per invocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#timeout_seconds BedrockagentcoreHarness#timeout_seconds}

---

##### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.tools"></a>

```typescript
public readonly tools: IResolvable | BedrockagentcoreHarnessTools[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools">BedrockagentcoreHarnessTools</a>[]

The tools available to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#tools BedrockagentcoreHarness#tools}

---

##### `truncation`<sup>Optional</sup> <a name="truncation" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.truncation"></a>

```typescript
public readonly truncation: BedrockagentcoreHarnessTruncation;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation">BedrockagentcoreHarnessTruncation</a>

The truncation configuration for managing conversation context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#truncation BedrockagentcoreHarness#truncation}

---

### BedrockagentcoreHarnessEnvironment <a name="BedrockagentcoreHarnessEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessEnvironment: bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment.property.agentCoreRuntimeEnvironment">agentCoreRuntimeEnvironment</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#agent_core_runtime_environment BedrockagentcoreHarness#agent_core_runtime_environment}. |

---

##### `agentCoreRuntimeEnvironment`<sup>Optional</sup> <a name="agentCoreRuntimeEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment.property.agentCoreRuntimeEnvironment"></a>

```typescript
public readonly agentCoreRuntimeEnvironment: BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#agent_core_runtime_environment BedrockagentcoreHarness#agent_core_runtime_environment}.

---

### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment: bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.property.filesystemConfigurations">filesystemConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#filesystem_configurations BedrockagentcoreHarness#filesystem_configurations}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#lifecycle_configuration BedrockagentcoreHarness#lifecycle_configuration}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#network_configuration BedrockagentcoreHarness#network_configuration}. |

---

##### `filesystemConfigurations`<sup>Optional</sup> <a name="filesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.property.filesystemConfigurations"></a>

```typescript
public readonly filesystemConfigurations: IResolvable | BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#filesystem_configurations BedrockagentcoreHarness#filesystem_configurations}.

---

##### `lifecycleConfiguration`<sup>Optional</sup> <a name="lifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.property.lifecycleConfiguration"></a>

```typescript
public readonly lifecycleConfiguration: BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#lifecycle_configuration BedrockagentcoreHarness#lifecycle_configuration}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#network_configuration BedrockagentcoreHarness#network_configuration}.

---

### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations: bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations.property.sessionStorage">sessionStorage</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#session_storage BedrockagentcoreHarness#session_storage}. |

---

##### `sessionStorage`<sup>Optional</sup> <a name="sessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations.property.sessionStorage"></a>

```typescript
public readonly sessionStorage: BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#session_storage BedrockagentcoreHarness#session_storage}.

---

### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage: bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage.property.mountPath">mountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#mount_path BedrockagentcoreHarness#mount_path}. |

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#mount_path BedrockagentcoreHarness#mount_path}.

---

### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration: bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration.property.idleRuntimeSessionTimeout">idleRuntimeSessionTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#idle_runtime_session_timeout BedrockagentcoreHarness#idle_runtime_session_timeout}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration.property.maxLifetime">maxLifetime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#max_lifetime BedrockagentcoreHarness#max_lifetime}. |

---

##### `idleRuntimeSessionTimeout`<sup>Optional</sup> <a name="idleRuntimeSessionTimeout" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration.property.idleRuntimeSessionTimeout"></a>

```typescript
public readonly idleRuntimeSessionTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#idle_runtime_session_timeout BedrockagentcoreHarness#idle_runtime_session_timeout}.

---

##### `maxLifetime`<sup>Optional</sup> <a name="maxLifetime" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration.property.maxLifetime"></a>

```typescript
public readonly maxLifetime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#max_lifetime BedrockagentcoreHarness#max_lifetime}.

---

### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration: bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration.property.networkMode">networkMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#network_mode BedrockagentcoreHarness#network_mode}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration.property.networkModeConfig">networkModeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#network_mode_config BedrockagentcoreHarness#network_mode_config}. |

---

##### `networkMode`<sup>Optional</sup> <a name="networkMode" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration.property.networkMode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#network_mode BedrockagentcoreHarness#network_mode}.

---

##### `networkModeConfig`<sup>Optional</sup> <a name="networkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration.property.networkModeConfig"></a>

```typescript
public readonly networkModeConfig: BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#network_mode_config BedrockagentcoreHarness#network_mode_config}.

---

### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig: bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#security_groups BedrockagentcoreHarness#security_groups}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig.property.subnets">subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#subnets BedrockagentcoreHarness#subnets}. |

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#security_groups BedrockagentcoreHarness#security_groups}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#subnets BedrockagentcoreHarness#subnets}.

---

### BedrockagentcoreHarnessEnvironmentArtifact <a name="BedrockagentcoreHarnessEnvironmentArtifact" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessEnvironmentArtifact: bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact.property.containerConfiguration">containerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration">BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#container_configuration BedrockagentcoreHarness#container_configuration}. |

---

##### `containerConfiguration`<sup>Optional</sup> <a name="containerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact.property.containerConfiguration"></a>

```typescript
public readonly containerConfiguration: BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration">BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#container_configuration BedrockagentcoreHarness#container_configuration}.

---

### BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration <a name="BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration: bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration.property.containerUri">containerUri</a></code> | <code>string</code> | The ECR URI of the container. |

---

##### `containerUri`<sup>Optional</sup> <a name="containerUri" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration.property.containerUri"></a>

```typescript
public readonly containerUri: string;
```

- *Type:* string

The ECR URI of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#container_uri BedrockagentcoreHarness#container_uri}

---

### BedrockagentcoreHarnessMemory <a name="BedrockagentcoreHarnessMemory" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessMemory: bedrockagentcoreHarness.BedrockagentcoreHarnessMemory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory.property.agentCoreMemoryConfiguration">agentCoreMemoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#agent_core_memory_configuration BedrockagentcoreHarness#agent_core_memory_configuration}. |

---

##### `agentCoreMemoryConfiguration`<sup>Optional</sup> <a name="agentCoreMemoryConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory.property.agentCoreMemoryConfiguration"></a>

```typescript
public readonly agentCoreMemoryConfiguration: BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#agent_core_memory_configuration BedrockagentcoreHarness#agent_core_memory_configuration}.

---

### BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration <a name="BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration: bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.actorId">actorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#actor_id BedrockagentcoreHarness#actor_id}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#arn BedrockagentcoreHarness#arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.messagesCount">messagesCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#messages_count BedrockagentcoreHarness#messages_count}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.retrievalConfig">retrievalConfig</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a>}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#retrieval_config BedrockagentcoreHarness#retrieval_config}. |

---

##### `actorId`<sup>Optional</sup> <a name="actorId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.actorId"></a>

```typescript
public readonly actorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#actor_id BedrockagentcoreHarness#actor_id}.

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#arn BedrockagentcoreHarness#arn}.

---

##### `messagesCount`<sup>Optional</sup> <a name="messagesCount" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.messagesCount"></a>

```typescript
public readonly messagesCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#messages_count BedrockagentcoreHarness#messages_count}.

---

##### `retrievalConfig`<sup>Optional</sup> <a name="retrievalConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.retrievalConfig"></a>

```typescript
public readonly retrievalConfig: IResolvable | {[ key: string ]: BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a>}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#retrieval_config BedrockagentcoreHarness#retrieval_config}.

---

### BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig <a name="BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig: bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.property.relevanceScore">relevanceScore</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#relevance_score BedrockagentcoreHarness#relevance_score}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.property.strategyId">strategyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#strategy_id BedrockagentcoreHarness#strategy_id}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.property.topK">topK</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#top_k BedrockagentcoreHarness#top_k}. |

---

##### `relevanceScore`<sup>Optional</sup> <a name="relevanceScore" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.property.relevanceScore"></a>

```typescript
public readonly relevanceScore: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#relevance_score BedrockagentcoreHarness#relevance_score}.

---

##### `strategyId`<sup>Optional</sup> <a name="strategyId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.property.strategyId"></a>

```typescript
public readonly strategyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#strategy_id BedrockagentcoreHarness#strategy_id}.

---

##### `topK`<sup>Optional</sup> <a name="topK" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.property.topK"></a>

```typescript
public readonly topK: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#top_k BedrockagentcoreHarness#top_k}.

---

### BedrockagentcoreHarnessModel <a name="BedrockagentcoreHarnessModel" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessModel: bedrockagentcoreHarness.BedrockagentcoreHarnessModel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel.property.bedrockModelConfig">bedrockModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig">BedrockagentcoreHarnessModelBedrockModelConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#bedrock_model_config BedrockagentcoreHarness#bedrock_model_config}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel.property.geminiModelConfig">geminiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig">BedrockagentcoreHarnessModelGeminiModelConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#gemini_model_config BedrockagentcoreHarness#gemini_model_config}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel.property.openAiModelConfig">openAiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig">BedrockagentcoreHarnessModelOpenAiModelConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#open_ai_model_config BedrockagentcoreHarness#open_ai_model_config}. |

---

##### `bedrockModelConfig`<sup>Optional</sup> <a name="bedrockModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel.property.bedrockModelConfig"></a>

```typescript
public readonly bedrockModelConfig: BedrockagentcoreHarnessModelBedrockModelConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig">BedrockagentcoreHarnessModelBedrockModelConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#bedrock_model_config BedrockagentcoreHarness#bedrock_model_config}.

---

##### `geminiModelConfig`<sup>Optional</sup> <a name="geminiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel.property.geminiModelConfig"></a>

```typescript
public readonly geminiModelConfig: BedrockagentcoreHarnessModelGeminiModelConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig">BedrockagentcoreHarnessModelGeminiModelConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#gemini_model_config BedrockagentcoreHarness#gemini_model_config}.

---

##### `openAiModelConfig`<sup>Optional</sup> <a name="openAiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel.property.openAiModelConfig"></a>

```typescript
public readonly openAiModelConfig: BedrockagentcoreHarnessModelOpenAiModelConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig">BedrockagentcoreHarnessModelOpenAiModelConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#open_ai_model_config BedrockagentcoreHarness#open_ai_model_config}.

---

### BedrockagentcoreHarnessModelBedrockModelConfig <a name="BedrockagentcoreHarnessModelBedrockModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessModelBedrockModelConfig: bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.maxTokens">maxTokens</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.modelId">modelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#model_id BedrockagentcoreHarness#model_id}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.temperature">temperature</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#temperature BedrockagentcoreHarness#temperature}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.topP">topP</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#top_p BedrockagentcoreHarness#top_p}. |

---

##### `maxTokens`<sup>Optional</sup> <a name="maxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.maxTokens"></a>

```typescript
public readonly maxTokens: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}.

---

##### `modelId`<sup>Optional</sup> <a name="modelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#model_id BedrockagentcoreHarness#model_id}.

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#temperature BedrockagentcoreHarness#temperature}.

---

##### `topP`<sup>Optional</sup> <a name="topP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.topP"></a>

```typescript
public readonly topP: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#top_p BedrockagentcoreHarness#top_p}.

---

### BedrockagentcoreHarnessModelGeminiModelConfig <a name="BedrockagentcoreHarnessModelGeminiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessModelGeminiModelConfig: bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.apiKeyArn">apiKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#api_key_arn BedrockagentcoreHarness#api_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.maxTokens">maxTokens</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.modelId">modelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#model_id BedrockagentcoreHarness#model_id}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.temperature">temperature</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#temperature BedrockagentcoreHarness#temperature}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.topK">topK</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#top_k BedrockagentcoreHarness#top_k}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.topP">topP</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#top_p BedrockagentcoreHarness#top_p}. |

---

##### `apiKeyArn`<sup>Optional</sup> <a name="apiKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.apiKeyArn"></a>

```typescript
public readonly apiKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#api_key_arn BedrockagentcoreHarness#api_key_arn}.

---

##### `maxTokens`<sup>Optional</sup> <a name="maxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.maxTokens"></a>

```typescript
public readonly maxTokens: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}.

---

##### `modelId`<sup>Optional</sup> <a name="modelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#model_id BedrockagentcoreHarness#model_id}.

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#temperature BedrockagentcoreHarness#temperature}.

---

##### `topK`<sup>Optional</sup> <a name="topK" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.topK"></a>

```typescript
public readonly topK: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#top_k BedrockagentcoreHarness#top_k}.

---

##### `topP`<sup>Optional</sup> <a name="topP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.topP"></a>

```typescript
public readonly topP: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#top_p BedrockagentcoreHarness#top_p}.

---

### BedrockagentcoreHarnessModelOpenAiModelConfig <a name="BedrockagentcoreHarnessModelOpenAiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessModelOpenAiModelConfig: bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.apiKeyArn">apiKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#api_key_arn BedrockagentcoreHarness#api_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.maxTokens">maxTokens</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.modelId">modelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#model_id BedrockagentcoreHarness#model_id}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.temperature">temperature</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#temperature BedrockagentcoreHarness#temperature}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.topP">topP</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#top_p BedrockagentcoreHarness#top_p}. |

---

##### `apiKeyArn`<sup>Optional</sup> <a name="apiKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.apiKeyArn"></a>

```typescript
public readonly apiKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#api_key_arn BedrockagentcoreHarness#api_key_arn}.

---

##### `maxTokens`<sup>Optional</sup> <a name="maxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.maxTokens"></a>

```typescript
public readonly maxTokens: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}.

---

##### `modelId`<sup>Optional</sup> <a name="modelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#model_id BedrockagentcoreHarness#model_id}.

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#temperature BedrockagentcoreHarness#temperature}.

---

##### `topP`<sup>Optional</sup> <a name="topP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.topP"></a>

```typescript
public readonly topP: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#top_p BedrockagentcoreHarness#top_p}.

---

### BedrockagentcoreHarnessSkills <a name="BedrockagentcoreHarnessSkills" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessSkills: bedrockagentcoreHarness.BedrockagentcoreHarnessSkills = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills.property.path">path</a></code> | <code>string</code> | The filesystem path to the skill definition. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The filesystem path to the skill definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#path BedrockagentcoreHarness#path}

---

### BedrockagentcoreHarnessSystemPrompt <a name="BedrockagentcoreHarnessSystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessSystemPrompt: bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt.property.text">text</a></code> | <code>string</code> | The text content of the system prompt block. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

The text content of the system prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#text BedrockagentcoreHarness#text}

---

### BedrockagentcoreHarnessTags <a name="BedrockagentcoreHarnessTags" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessTags: bedrockagentcoreHarness.BedrockagentcoreHarnessTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#key BedrockagentcoreHarness#key}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#value BedrockagentcoreHarness#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#key BedrockagentcoreHarness#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#value BedrockagentcoreHarness#value}.

---

### BedrockagentcoreHarnessTools <a name="BedrockagentcoreHarnessTools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessTools: bedrockagentcoreHarness.BedrockagentcoreHarnessTools = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools.property.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig">BedrockagentcoreHarnessToolsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#config BedrockagentcoreHarness#config}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#name BedrockagentcoreHarness#name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#type BedrockagentcoreHarness#type}. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools.property.config"></a>

```typescript
public readonly config: BedrockagentcoreHarnessToolsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig">BedrockagentcoreHarnessToolsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#config BedrockagentcoreHarness#config}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#name BedrockagentcoreHarness#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#type BedrockagentcoreHarness#type}.

---

### BedrockagentcoreHarnessToolsConfig <a name="BedrockagentcoreHarnessToolsConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessToolsConfig: bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.agentCoreBrowser">agentCoreBrowser</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser">BedrockagentcoreHarnessToolsConfigAgentCoreBrowser</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#agent_core_browser BedrockagentcoreHarness#agent_core_browser}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.agentCoreCodeInterpreter">agentCoreCodeInterpreter</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#agent_core_code_interpreter BedrockagentcoreHarness#agent_core_code_interpreter}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.agentCoreGateway">agentCoreGateway</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway">BedrockagentcoreHarnessToolsConfigAgentCoreGateway</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#agent_core_gateway BedrockagentcoreHarness#agent_core_gateway}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.inlineFunction">inlineFunction</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction">BedrockagentcoreHarnessToolsConfigInlineFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#inline_function BedrockagentcoreHarness#inline_function}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.remoteMcp">remoteMcp</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp">BedrockagentcoreHarnessToolsConfigRemoteMcp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#remote_mcp BedrockagentcoreHarness#remote_mcp}. |

---

##### `agentCoreBrowser`<sup>Optional</sup> <a name="agentCoreBrowser" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.agentCoreBrowser"></a>

```typescript
public readonly agentCoreBrowser: BedrockagentcoreHarnessToolsConfigAgentCoreBrowser;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser">BedrockagentcoreHarnessToolsConfigAgentCoreBrowser</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#agent_core_browser BedrockagentcoreHarness#agent_core_browser}.

---

##### `agentCoreCodeInterpreter`<sup>Optional</sup> <a name="agentCoreCodeInterpreter" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.agentCoreCodeInterpreter"></a>

```typescript
public readonly agentCoreCodeInterpreter: BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#agent_core_code_interpreter BedrockagentcoreHarness#agent_core_code_interpreter}.

---

##### `agentCoreGateway`<sup>Optional</sup> <a name="agentCoreGateway" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.agentCoreGateway"></a>

```typescript
public readonly agentCoreGateway: BedrockagentcoreHarnessToolsConfigAgentCoreGateway;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway">BedrockagentcoreHarnessToolsConfigAgentCoreGateway</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#agent_core_gateway BedrockagentcoreHarness#agent_core_gateway}.

---

##### `inlineFunction`<sup>Optional</sup> <a name="inlineFunction" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.inlineFunction"></a>

```typescript
public readonly inlineFunction: BedrockagentcoreHarnessToolsConfigInlineFunction;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction">BedrockagentcoreHarnessToolsConfigInlineFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#inline_function BedrockagentcoreHarness#inline_function}.

---

##### `remoteMcp`<sup>Optional</sup> <a name="remoteMcp" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.remoteMcp"></a>

```typescript
public readonly remoteMcp: BedrockagentcoreHarnessToolsConfigRemoteMcp;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp">BedrockagentcoreHarnessToolsConfigRemoteMcp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#remote_mcp BedrockagentcoreHarness#remote_mcp}.

---

### BedrockagentcoreHarnessToolsConfigAgentCoreBrowser <a name="BedrockagentcoreHarnessToolsConfigAgentCoreBrowser" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessToolsConfigAgentCoreBrowser: bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser.property.browserArn">browserArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#browser_arn BedrockagentcoreHarness#browser_arn}. |

---

##### `browserArn`<sup>Optional</sup> <a name="browserArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser.property.browserArn"></a>

```typescript
public readonly browserArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#browser_arn BedrockagentcoreHarness#browser_arn}.

---

### BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter <a name="BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter: bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter.property.codeInterpreterArn">codeInterpreterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#code_interpreter_arn BedrockagentcoreHarness#code_interpreter_arn}. |

---

##### `codeInterpreterArn`<sup>Optional</sup> <a name="codeInterpreterArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter.property.codeInterpreterArn"></a>

```typescript
public readonly codeInterpreterArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#code_interpreter_arn BedrockagentcoreHarness#code_interpreter_arn}.

---

### BedrockagentcoreHarnessToolsConfigAgentCoreGateway <a name="BedrockagentcoreHarnessToolsConfigAgentCoreGateway" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessToolsConfigAgentCoreGateway: bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway.property.gatewayArn">gatewayArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#gateway_arn BedrockagentcoreHarness#gateway_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway.property.outboundAuth">outboundAuth</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#outbound_auth BedrockagentcoreHarness#outbound_auth}. |

---

##### `gatewayArn`<sup>Optional</sup> <a name="gatewayArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway.property.gatewayArn"></a>

```typescript
public readonly gatewayArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#gateway_arn BedrockagentcoreHarness#gateway_arn}.

---

##### `outboundAuth`<sup>Optional</sup> <a name="outboundAuth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway.property.outboundAuth"></a>

```typescript
public readonly outboundAuth: BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#outbound_auth BedrockagentcoreHarness#outbound_auth}.

---

### BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth <a name="BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth: bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.property.awsIam">awsIam</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#aws_iam BedrockagentcoreHarness#aws_iam}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.property.none">none</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#none BedrockagentcoreHarness#none}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.property.oauth">oauth</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#oauth BedrockagentcoreHarness#oauth}. |

---

##### `awsIam`<sup>Optional</sup> <a name="awsIam" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.property.awsIam"></a>

```typescript
public readonly awsIam: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#aws_iam BedrockagentcoreHarness#aws_iam}.

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.property.none"></a>

```typescript
public readonly none: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#none BedrockagentcoreHarness#none}.

---

##### `oauth`<sup>Optional</sup> <a name="oauth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.property.oauth"></a>

```typescript
public readonly oauth: BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#oauth BedrockagentcoreHarness#oauth}.

---

### BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth <a name="BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth: bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.customParameters">customParameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#custom_parameters BedrockagentcoreHarness#custom_parameters}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.defaultReturnUrl">defaultReturnUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#default_return_url BedrockagentcoreHarness#default_return_url}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.grantType">grantType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#grant_type BedrockagentcoreHarness#grant_type}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.providerArn">providerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#provider_arn BedrockagentcoreHarness#provider_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.scopes">scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#scopes BedrockagentcoreHarness#scopes}. |

---

##### `customParameters`<sup>Optional</sup> <a name="customParameters" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.customParameters"></a>

```typescript
public readonly customParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#custom_parameters BedrockagentcoreHarness#custom_parameters}.

---

##### `defaultReturnUrl`<sup>Optional</sup> <a name="defaultReturnUrl" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.defaultReturnUrl"></a>

```typescript
public readonly defaultReturnUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#default_return_url BedrockagentcoreHarness#default_return_url}.

---

##### `grantType`<sup>Optional</sup> <a name="grantType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.grantType"></a>

```typescript
public readonly grantType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#grant_type BedrockagentcoreHarness#grant_type}.

---

##### `providerArn`<sup>Optional</sup> <a name="providerArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.providerArn"></a>

```typescript
public readonly providerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#provider_arn BedrockagentcoreHarness#provider_arn}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#scopes BedrockagentcoreHarness#scopes}.

---

### BedrockagentcoreHarnessToolsConfigInlineFunction <a name="BedrockagentcoreHarnessToolsConfigInlineFunction" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessToolsConfigInlineFunction: bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#description BedrockagentcoreHarness#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction.property.inputSchema">inputSchema</a></code> | <code>string</code> | JSON Schema describing the tool's input parameters. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#description BedrockagentcoreHarness#description}.

---

##### `inputSchema`<sup>Optional</sup> <a name="inputSchema" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction.property.inputSchema"></a>

```typescript
public readonly inputSchema: string;
```

- *Type:* string

JSON Schema describing the tool's input parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#input_schema BedrockagentcoreHarness#input_schema}

---

### BedrockagentcoreHarnessToolsConfigRemoteMcp <a name="BedrockagentcoreHarnessToolsConfigRemoteMcp" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessToolsConfigRemoteMcp: bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#headers BedrockagentcoreHarness#headers}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#url BedrockagentcoreHarness#url}. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#headers BedrockagentcoreHarness#headers}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#url BedrockagentcoreHarness#url}.

---

### BedrockagentcoreHarnessTruncation <a name="BedrockagentcoreHarnessTruncation" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessTruncation: bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation.property.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig">BedrockagentcoreHarnessTruncationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#config BedrockagentcoreHarness#config}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation.property.strategy">strategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#strategy BedrockagentcoreHarness#strategy}. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation.property.config"></a>

```typescript
public readonly config: BedrockagentcoreHarnessTruncationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig">BedrockagentcoreHarnessTruncationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#config BedrockagentcoreHarness#config}.

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#strategy BedrockagentcoreHarness#strategy}.

---

### BedrockagentcoreHarnessTruncationConfig <a name="BedrockagentcoreHarnessTruncationConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessTruncationConfig: bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig.property.slidingWindow">slidingWindow</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow">BedrockagentcoreHarnessTruncationConfigSlidingWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#sliding_window BedrockagentcoreHarness#sliding_window}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig.property.summarization">summarization</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization">BedrockagentcoreHarnessTruncationConfigSummarization</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#summarization BedrockagentcoreHarness#summarization}. |

---

##### `slidingWindow`<sup>Optional</sup> <a name="slidingWindow" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig.property.slidingWindow"></a>

```typescript
public readonly slidingWindow: BedrockagentcoreHarnessTruncationConfigSlidingWindow;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow">BedrockagentcoreHarnessTruncationConfigSlidingWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#sliding_window BedrockagentcoreHarness#sliding_window}.

---

##### `summarization`<sup>Optional</sup> <a name="summarization" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig.property.summarization"></a>

```typescript
public readonly summarization: BedrockagentcoreHarnessTruncationConfigSummarization;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization">BedrockagentcoreHarnessTruncationConfigSummarization</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#summarization BedrockagentcoreHarness#summarization}.

---

### BedrockagentcoreHarnessTruncationConfigSlidingWindow <a name="BedrockagentcoreHarnessTruncationConfigSlidingWindow" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessTruncationConfigSlidingWindow: bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow.property.messagesCount">messagesCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#messages_count BedrockagentcoreHarness#messages_count}. |

---

##### `messagesCount`<sup>Optional</sup> <a name="messagesCount" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow.property.messagesCount"></a>

```typescript
public readonly messagesCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#messages_count BedrockagentcoreHarness#messages_count}.

---

### BedrockagentcoreHarnessTruncationConfigSummarization <a name="BedrockagentcoreHarnessTruncationConfigSummarization" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

const bedrockagentcoreHarnessTruncationConfigSummarization: bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization.property.preserveRecentMessages">preserveRecentMessages</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#preserve_recent_messages BedrockagentcoreHarness#preserve_recent_messages}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization.property.summarizationSystemPrompt">summarizationSystemPrompt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#summarization_system_prompt BedrockagentcoreHarness#summarization_system_prompt}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization.property.summaryRatio">summaryRatio</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#summary_ratio BedrockagentcoreHarness#summary_ratio}. |

---

##### `preserveRecentMessages`<sup>Optional</sup> <a name="preserveRecentMessages" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization.property.preserveRecentMessages"></a>

```typescript
public readonly preserveRecentMessages: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#preserve_recent_messages BedrockagentcoreHarness#preserve_recent_messages}.

---

##### `summarizationSystemPrompt`<sup>Optional</sup> <a name="summarizationSystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization.property.summarizationSystemPrompt"></a>

```typescript
public readonly summarizationSystemPrompt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#summarization_system_prompt BedrockagentcoreHarness#summarization_system_prompt}.

---

##### `summaryRatio`<sup>Optional</sup> <a name="summaryRatio" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization.property.summaryRatio"></a>

```typescript
public readonly summaryRatio: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_harness#summary_ratio BedrockagentcoreHarness#summary_ratio}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString">resetMatchValueString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList">resetMatchValueStringList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValueString` <a name="resetMatchValueString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString"></a>

```typescript
public resetMatchValueString(): void
```

##### `resetMatchValueStringList` <a name="resetMatchValueStringList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList"></a>

```typescript
public resetMatchValueStringList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput">matchValueStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput">matchValueStringListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString">matchValueString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList">matchValueStringList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchValueStringInput`<sup>Optional</sup> <a name="matchValueStringInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput"></a>

```typescript
public readonly matchValueStringInput: string;
```

- *Type:* string

---

##### `matchValueStringListInput`<sup>Optional</sup> <a name="matchValueStringListInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput"></a>

```typescript
public readonly matchValueStringListInput: string[];
```

- *Type:* string[]

---

##### `matchValueString`<sup>Required</sup> <a name="matchValueString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString"></a>

```typescript
public readonly matchValueString: string;
```

- *Type:* string

---

##### `matchValueStringList`<sup>Required</sup> <a name="matchValueStringList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList"></a>

```typescript
public readonly matchValueStringList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---


### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue">putClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchOperator">resetClaimMatchOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue">resetClaimMatchValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClaimMatchValue` <a name="putClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue"></a>

```typescript
public putClaimMatchValue(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---

##### `resetClaimMatchOperator` <a name="resetClaimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchOperator"></a>

```typescript
public resetClaimMatchOperator(): void
```

##### `resetClaimMatchValue` <a name="resetClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue"></a>

```typescript
public resetClaimMatchValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue">claimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput">claimMatchOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput">claimMatchValueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator">claimMatchOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `claimMatchValue`<sup>Required</sup> <a name="claimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue"></a>

```typescript
public readonly claimMatchValue: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a>

---

##### `claimMatchOperatorInput`<sup>Optional</sup> <a name="claimMatchOperatorInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput"></a>

```typescript
public readonly claimMatchOperatorInput: string;
```

- *Type:* string

---

##### `claimMatchValueInput`<sup>Optional</sup> <a name="claimMatchValueInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput"></a>

```typescript
public readonly claimMatchValueInput: IResolvable | BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---

##### `claimMatchOperator`<sup>Required</sup> <a name="claimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator"></a>

```typescript
public readonly claimMatchOperator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---


### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get"></a>

```typescript
public get(index: number): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]

---


### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue">putAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetAuthorizingClaimMatchValue">resetAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimName">resetInboundTokenClaimName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimValueType">resetInboundTokenClaimValueType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizingClaimMatchValue` <a name="putAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue"></a>

```typescript
public putAuthorizingClaimMatchValue(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---

##### `resetAuthorizingClaimMatchValue` <a name="resetAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetAuthorizingClaimMatchValue"></a>

```typescript
public resetAuthorizingClaimMatchValue(): void
```

##### `resetInboundTokenClaimName` <a name="resetInboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimName"></a>

```typescript
public resetInboundTokenClaimName(): void
```

##### `resetInboundTokenClaimValueType` <a name="resetInboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimValueType"></a>

```typescript
public resetInboundTokenClaimValueType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue">authorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValueInput">authorizingClaimMatchValueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimNameInput">inboundTokenClaimNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueTypeInput">inboundTokenClaimValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName">inboundTokenClaimName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType">inboundTokenClaimValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizingClaimMatchValue`<sup>Required</sup> <a name="authorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue"></a>

```typescript
public readonly authorizingClaimMatchValue: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a>

---

##### `authorizingClaimMatchValueInput`<sup>Optional</sup> <a name="authorizingClaimMatchValueInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValueInput"></a>

```typescript
public readonly authorizingClaimMatchValueInput: IResolvable | BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---

##### `inboundTokenClaimNameInput`<sup>Optional</sup> <a name="inboundTokenClaimNameInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimNameInput"></a>

```typescript
public readonly inboundTokenClaimNameInput: string;
```

- *Type:* string

---

##### `inboundTokenClaimValueTypeInput`<sup>Optional</sup> <a name="inboundTokenClaimValueTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueTypeInput"></a>

```typescript
public readonly inboundTokenClaimValueTypeInput: string;
```

- *Type:* string

---

##### `inboundTokenClaimName`<sup>Required</sup> <a name="inboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName"></a>

```typescript
public readonly inboundTokenClaimName: string;
```

- *Type:* string

---

##### `inboundTokenClaimValueType`<sup>Required</sup> <a name="inboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType"></a>

```typescript
public readonly inboundTokenClaimValueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>

---


### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims">putCustomClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience">resetAllowedAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients">resetAllowedClients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes">resetAllowedScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaims">resetCustomClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetDiscoveryUrl">resetDiscoveryUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomClaims` <a name="putCustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims"></a>

```typescript
public putCustomClaims(value: IResolvable | BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]

---

##### `resetAllowedAudience` <a name="resetAllowedAudience" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience"></a>

```typescript
public resetAllowedAudience(): void
```

##### `resetAllowedClients` <a name="resetAllowedClients" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients"></a>

```typescript
public resetAllowedClients(): void
```

##### `resetAllowedScopes` <a name="resetAllowedScopes" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes"></a>

```typescript
public resetAllowedScopes(): void
```

##### `resetCustomClaims` <a name="resetCustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaims"></a>

```typescript
public resetCustomClaims(): void
```

##### `resetDiscoveryUrl` <a name="resetDiscoveryUrl" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetDiscoveryUrl"></a>

```typescript
public resetDiscoveryUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims">customClaims</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput">allowedAudienceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput">allowedClientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput">allowedScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimsInput">customClaimsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput">discoveryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience">allowedAudience</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients">allowedClients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes">allowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl">discoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customClaims`<sup>Required</sup> <a name="customClaims" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims"></a>

```typescript
public readonly customClaims: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a>

---

##### `allowedAudienceInput`<sup>Optional</sup> <a name="allowedAudienceInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput"></a>

```typescript
public readonly allowedAudienceInput: string[];
```

- *Type:* string[]

---

##### `allowedClientsInput`<sup>Optional</sup> <a name="allowedClientsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput"></a>

```typescript
public readonly allowedClientsInput: string[];
```

- *Type:* string[]

---

##### `allowedScopesInput`<sup>Optional</sup> <a name="allowedScopesInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput"></a>

```typescript
public readonly allowedScopesInput: string[];
```

- *Type:* string[]

---

##### `customClaimsInput`<sup>Optional</sup> <a name="customClaimsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimsInput"></a>

```typescript
public readonly customClaimsInput: IResolvable | BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]

---

##### `discoveryUrlInput`<sup>Optional</sup> <a name="discoveryUrlInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput"></a>

```typescript
public readonly discoveryUrlInput: string;
```

- *Type:* string

---

##### `allowedAudience`<sup>Required</sup> <a name="allowedAudience" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience"></a>

```typescript
public readonly allowedAudience: string[];
```

- *Type:* string[]

---

##### `allowedClients`<sup>Required</sup> <a name="allowedClients" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients"></a>

```typescript
public readonly allowedClients: string[];
```

- *Type:* string[]

---

##### `allowedScopes`<sup>Required</sup> <a name="allowedScopes" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes"></a>

```typescript
public readonly allowedScopes: string[];
```

- *Type:* string[]

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl"></a>

```typescript
public readonly discoveryUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer</a>

---


### BedrockagentcoreHarnessAuthorizerConfigurationOutputReference <a name="BedrockagentcoreHarnessAuthorizerConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer">putCustomJwtAuthorizer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer">resetCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomJwtAuthorizer` <a name="putCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer"></a>

```typescript
public putCustomJwtAuthorizer(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer</a>

---

##### `resetCustomJwtAuthorizer` <a name="resetCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer"></a>

```typescript
public resetCustomJwtAuthorizer(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.customJwtAuthorizer">customJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput">customJwtAuthorizerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration">BedrockagentcoreHarnessAuthorizerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customJwtAuthorizer`<sup>Required</sup> <a name="customJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.customJwtAuthorizer"></a>

```typescript
public readonly customJwtAuthorizer: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a>

---

##### `customJwtAuthorizerInput`<sup>Optional</sup> <a name="customJwtAuthorizerInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput"></a>

```typescript
public readonly customJwtAuthorizerInput: IResolvable | BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessAuthorizerConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration">BedrockagentcoreHarnessAuthorizerConfiguration</a>

---


### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.get"></a>

```typescript
public get(index: number): BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a>[]

---


### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.putSessionStorage">putSessionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.resetSessionStorage">resetSessionStorage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSessionStorage` <a name="putSessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.putSessionStorage"></a>

```typescript
public putSessionStorage(value: BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.putSessionStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage</a>

---

##### `resetSessionStorage` <a name="resetSessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.resetSessionStorage"></a>

```typescript
public resetSessionStorage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.sessionStorage">sessionStorage</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.sessionStorageInput">sessionStorageInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sessionStorage`<sup>Required</sup> <a name="sessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.sessionStorage"></a>

```typescript
public readonly sessionStorage: BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference</a>

---

##### `sessionStorageInput`<sup>Optional</sup> <a name="sessionStorageInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.sessionStorageInput"></a>

```typescript
public readonly sessionStorageInput: IResolvable | BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a>

---


### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountPath` <a name="resetMountPath" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.resetMountPath"></a>

```typescript
public resetMountPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage</a>

---


### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resetIdleRuntimeSessionTimeout">resetIdleRuntimeSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resetMaxLifetime">resetMaxLifetime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleRuntimeSessionTimeout` <a name="resetIdleRuntimeSessionTimeout" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resetIdleRuntimeSessionTimeout"></a>

```typescript
public resetIdleRuntimeSessionTimeout(): void
```

##### `resetMaxLifetime` <a name="resetMaxLifetime" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resetMaxLifetime"></a>

```typescript
public resetMaxLifetime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeoutInput">idleRuntimeSessionTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.maxLifetimeInput">maxLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeout">idleRuntimeSessionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.maxLifetime">maxLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleRuntimeSessionTimeoutInput`<sup>Optional</sup> <a name="idleRuntimeSessionTimeoutInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeoutInput"></a>

```typescript
public readonly idleRuntimeSessionTimeoutInput: number;
```

- *Type:* number

---

##### `maxLifetimeInput`<sup>Optional</sup> <a name="maxLifetimeInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.maxLifetimeInput"></a>

```typescript
public readonly maxLifetimeInput: number;
```

- *Type:* number

---

##### `idleRuntimeSessionTimeout`<sup>Required</sup> <a name="idleRuntimeSessionTimeout" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeout"></a>

```typescript
public readonly idleRuntimeSessionTimeout: number;
```

- *Type:* number

---

##### `maxLifetime`<sup>Required</sup> <a name="maxLifetime" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.maxLifetime"></a>

```typescript
public readonly maxLifetime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration</a>

---


### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resetSubnets"></a>

```typescript
public resetSubnets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig</a>

---


### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.putNetworkModeConfig">putNetworkModeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resetNetworkMode">resetNetworkMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resetNetworkModeConfig">resetNetworkModeConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkModeConfig` <a name="putNetworkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.putNetworkModeConfig"></a>

```typescript
public putNetworkModeConfig(value: BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.putNetworkModeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig</a>

---

##### `resetNetworkMode` <a name="resetNetworkMode" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resetNetworkMode"></a>

```typescript
public resetNetworkMode(): void
```

##### `resetNetworkModeConfig` <a name="resetNetworkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resetNetworkModeConfig"></a>

```typescript
public resetNetworkModeConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeConfig">networkModeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeConfigInput">networkModeConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeInput">networkModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkMode">networkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkModeConfig`<sup>Required</sup> <a name="networkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeConfig"></a>

```typescript
public readonly networkModeConfig: BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference</a>

---

##### `networkModeConfigInput`<sup>Optional</sup> <a name="networkModeConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeConfigInput"></a>

```typescript
public readonly networkModeConfigInput: IResolvable | BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig</a>

---

##### `networkModeInput`<sup>Optional</sup> <a name="networkModeInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeInput"></a>

```typescript
public readonly networkModeInput: string;
```

- *Type:* string

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkMode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration</a>

---


### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putFilesystemConfigurations">putFilesystemConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putLifecycleConfiguration">putLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resetFilesystemConfigurations">resetFilesystemConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resetLifecycleConfiguration">resetLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilesystemConfigurations` <a name="putFilesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putFilesystemConfigurations"></a>

```typescript
public putFilesystemConfigurations(value: IResolvable | BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putFilesystemConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a>[]

---

##### `putLifecycleConfiguration` <a name="putLifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putLifecycleConfiguration"></a>

```typescript
public putLifecycleConfiguration(value: BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putLifecycleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration</a>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putNetworkConfiguration"></a>

```typescript
public putNetworkConfiguration(value: BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration</a>

---

##### `resetFilesystemConfigurations` <a name="resetFilesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resetFilesystemConfigurations"></a>

```typescript
public resetFilesystemConfigurations(): void
```

##### `resetLifecycleConfiguration` <a name="resetLifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resetLifecycleConfiguration"></a>

```typescript
public resetLifecycleConfiguration(): void
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resetNetworkConfiguration"></a>

```typescript
public resetNetworkConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeArn">agentRuntimeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeId">agentRuntimeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeName">agentRuntimeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.filesystemConfigurations">filesystemConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.filesystemConfigurationsInput">filesystemConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.lifecycleConfigurationInput">lifecycleConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentRuntimeArn`<sup>Required</sup> <a name="agentRuntimeArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeArn"></a>

```typescript
public readonly agentRuntimeArn: string;
```

- *Type:* string

---

##### `agentRuntimeId`<sup>Required</sup> <a name="agentRuntimeId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeId"></a>

```typescript
public readonly agentRuntimeId: string;
```

- *Type:* string

---

##### `agentRuntimeName`<sup>Required</sup> <a name="agentRuntimeName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeName"></a>

```typescript
public readonly agentRuntimeName: string;
```

- *Type:* string

---

##### `filesystemConfigurations`<sup>Required</sup> <a name="filesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.filesystemConfigurations"></a>

```typescript
public readonly filesystemConfigurations: BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList</a>

---

##### `lifecycleConfiguration`<sup>Required</sup> <a name="lifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.lifecycleConfiguration"></a>

```typescript
public readonly lifecycleConfiguration: BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference</a>

---

##### `filesystemConfigurationsInput`<sup>Optional</sup> <a name="filesystemConfigurationsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.filesystemConfigurationsInput"></a>

```typescript
public readonly filesystemConfigurationsInput: IResolvable | BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a>[]

---

##### `lifecycleConfigurationInput`<sup>Optional</sup> <a name="lifecycleConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.lifecycleConfigurationInput"></a>

```typescript
public readonly lifecycleConfigurationInput: IResolvable | BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration</a>

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.networkConfigurationInput"></a>

```typescript
public readonly networkConfigurationInput: IResolvable | BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment</a>

---


### BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference <a name="BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.resetContainerUri">resetContainerUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerUri` <a name="resetContainerUri" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.resetContainerUri"></a>

```typescript
public resetContainerUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.containerUriInput">containerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.containerUri">containerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration">BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerUriInput`<sup>Optional</sup> <a name="containerUriInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.containerUriInput"></a>

```typescript
public readonly containerUriInput: string;
```

- *Type:* string

---

##### `containerUri`<sup>Required</sup> <a name="containerUri" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.containerUri"></a>

```typescript
public readonly containerUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration">BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration</a>

---


### BedrockagentcoreHarnessEnvironmentArtifactOutputReference <a name="BedrockagentcoreHarnessEnvironmentArtifactOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.putContainerConfiguration">putContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.resetContainerConfiguration">resetContainerConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerConfiguration` <a name="putContainerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.putContainerConfiguration"></a>

```typescript
public putContainerConfiguration(value: BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.putContainerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration">BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration</a>

---

##### `resetContainerConfiguration` <a name="resetContainerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.resetContainerConfiguration"></a>

```typescript
public resetContainerConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.containerConfiguration">containerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference">BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.containerConfigurationInput">containerConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration">BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact">BedrockagentcoreHarnessEnvironmentArtifact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerConfiguration`<sup>Required</sup> <a name="containerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.containerConfiguration"></a>

```typescript
public readonly containerConfiguration: BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference">BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference</a>

---

##### `containerConfigurationInput`<sup>Optional</sup> <a name="containerConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.containerConfigurationInput"></a>

```typescript
public readonly containerConfigurationInput: IResolvable | BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration">BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessEnvironmentArtifact;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact">BedrockagentcoreHarnessEnvironmentArtifact</a>

---


### BedrockagentcoreHarnessEnvironmentOutputReference <a name="BedrockagentcoreHarnessEnvironmentOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.putAgentCoreRuntimeEnvironment">putAgentCoreRuntimeEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.resetAgentCoreRuntimeEnvironment">resetAgentCoreRuntimeEnvironment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentCoreRuntimeEnvironment` <a name="putAgentCoreRuntimeEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.putAgentCoreRuntimeEnvironment"></a>

```typescript
public putAgentCoreRuntimeEnvironment(value: BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.putAgentCoreRuntimeEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment</a>

---

##### `resetAgentCoreRuntimeEnvironment` <a name="resetAgentCoreRuntimeEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.resetAgentCoreRuntimeEnvironment"></a>

```typescript
public resetAgentCoreRuntimeEnvironment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.agentCoreRuntimeEnvironment">agentCoreRuntimeEnvironment</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.agentCoreRuntimeEnvironmentInput">agentCoreRuntimeEnvironmentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment">BedrockagentcoreHarnessEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentCoreRuntimeEnvironment`<sup>Required</sup> <a name="agentCoreRuntimeEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.agentCoreRuntimeEnvironment"></a>

```typescript
public readonly agentCoreRuntimeEnvironment: BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference</a>

---

##### `agentCoreRuntimeEnvironmentInput`<sup>Optional</sup> <a name="agentCoreRuntimeEnvironmentInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.agentCoreRuntimeEnvironmentInput"></a>

```typescript
public readonly agentCoreRuntimeEnvironmentInput: IResolvable | BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessEnvironment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment">BedrockagentcoreHarnessEnvironment</a>

---


### BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference <a name="BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.putRetrievalConfig">putRetrievalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetActorId">resetActorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetMessagesCount">resetMessagesCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetRetrievalConfig">resetRetrievalConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRetrievalConfig` <a name="putRetrievalConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.putRetrievalConfig"></a>

```typescript
public putRetrievalConfig(value: IResolvable | {[ key: string ]: BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.putRetrievalConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a>}

---

##### `resetActorId` <a name="resetActorId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetActorId"></a>

```typescript
public resetActorId(): void
```

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetMessagesCount` <a name="resetMessagesCount" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetMessagesCount"></a>

```typescript
public resetMessagesCount(): void
```

##### `resetRetrievalConfig` <a name="resetRetrievalConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetRetrievalConfig"></a>

```typescript
public resetRetrievalConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.retrievalConfig">retrievalConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.actorIdInput">actorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.messagesCountInput">messagesCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.retrievalConfigInput">retrievalConfigInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a>}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.actorId">actorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.messagesCount">messagesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retrievalConfig`<sup>Required</sup> <a name="retrievalConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.retrievalConfig"></a>

```typescript
public readonly retrievalConfig: BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap</a>

---

##### `actorIdInput`<sup>Optional</sup> <a name="actorIdInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.actorIdInput"></a>

```typescript
public readonly actorIdInput: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `messagesCountInput`<sup>Optional</sup> <a name="messagesCountInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.messagesCountInput"></a>

```typescript
public readonly messagesCountInput: number;
```

- *Type:* number

---

##### `retrievalConfigInput`<sup>Optional</sup> <a name="retrievalConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.retrievalConfigInput"></a>

```typescript
public readonly retrievalConfigInput: IResolvable | {[ key: string ]: BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a>}

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.actorId"></a>

```typescript
public readonly actorId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `messagesCount`<sup>Required</sup> <a name="messagesCount" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.messagesCount"></a>

```typescript
public readonly messagesCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration</a>

---


### BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap <a name="BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.get"></a>

```typescript
public get(key: string): BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a>}

---


### BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference <a name="BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resetRelevanceScore">resetRelevanceScore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resetStrategyId">resetStrategyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resetTopK">resetTopK</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRelevanceScore` <a name="resetRelevanceScore" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resetRelevanceScore"></a>

```typescript
public resetRelevanceScore(): void
```

##### `resetStrategyId` <a name="resetStrategyId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resetStrategyId"></a>

```typescript
public resetStrategyId(): void
```

##### `resetTopK` <a name="resetTopK" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resetTopK"></a>

```typescript
public resetTopK(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.relevanceScoreInput">relevanceScoreInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.strategyIdInput">strategyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.topKInput">topKInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.relevanceScore">relevanceScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.strategyId">strategyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.topK">topK</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `relevanceScoreInput`<sup>Optional</sup> <a name="relevanceScoreInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.relevanceScoreInput"></a>

```typescript
public readonly relevanceScoreInput: number;
```

- *Type:* number

---

##### `strategyIdInput`<sup>Optional</sup> <a name="strategyIdInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.strategyIdInput"></a>

```typescript
public readonly strategyIdInput: string;
```

- *Type:* string

---

##### `topKInput`<sup>Optional</sup> <a name="topKInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.topKInput"></a>

```typescript
public readonly topKInput: number;
```

- *Type:* number

---

##### `relevanceScore`<sup>Required</sup> <a name="relevanceScore" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.relevanceScore"></a>

```typescript
public readonly relevanceScore: number;
```

- *Type:* number

---

##### `strategyId`<sup>Required</sup> <a name="strategyId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.strategyId"></a>

```typescript
public readonly strategyId: string;
```

- *Type:* string

---

##### `topK`<sup>Required</sup> <a name="topK" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.topK"></a>

```typescript
public readonly topK: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a>

---


### BedrockagentcoreHarnessMemoryOutputReference <a name="BedrockagentcoreHarnessMemoryOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.putAgentCoreMemoryConfiguration">putAgentCoreMemoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.resetAgentCoreMemoryConfiguration">resetAgentCoreMemoryConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentCoreMemoryConfiguration` <a name="putAgentCoreMemoryConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.putAgentCoreMemoryConfiguration"></a>

```typescript
public putAgentCoreMemoryConfiguration(value: BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.putAgentCoreMemoryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration</a>

---

##### `resetAgentCoreMemoryConfiguration` <a name="resetAgentCoreMemoryConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.resetAgentCoreMemoryConfiguration"></a>

```typescript
public resetAgentCoreMemoryConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.agentCoreMemoryConfiguration">agentCoreMemoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.agentCoreMemoryConfigurationInput">agentCoreMemoryConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory">BedrockagentcoreHarnessMemory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentCoreMemoryConfiguration`<sup>Required</sup> <a name="agentCoreMemoryConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.agentCoreMemoryConfiguration"></a>

```typescript
public readonly agentCoreMemoryConfiguration: BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference</a>

---

##### `agentCoreMemoryConfigurationInput`<sup>Optional</sup> <a name="agentCoreMemoryConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.agentCoreMemoryConfigurationInput"></a>

```typescript
public readonly agentCoreMemoryConfigurationInput: IResolvable | BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessMemory;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory">BedrockagentcoreHarnessMemory</a>

---


### BedrockagentcoreHarnessModelBedrockModelConfigOutputReference <a name="BedrockagentcoreHarnessModelBedrockModelConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetMaxTokens">resetMaxTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetModelId">resetModelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetTopP">resetTopP</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxTokens` <a name="resetMaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetMaxTokens"></a>

```typescript
public resetMaxTokens(): void
```

##### `resetModelId` <a name="resetModelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetModelId"></a>

```typescript
public resetModelId(): void
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetTemperature"></a>

```typescript
public resetTemperature(): void
```

##### `resetTopP` <a name="resetTopP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetTopP"></a>

```typescript
public resetTopP(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.maxTokensInput">maxTokensInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.modelIdInput">modelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.topPInput">topPInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.maxTokens">maxTokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.temperature">temperature</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.topP">topP</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig">BedrockagentcoreHarnessModelBedrockModelConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxTokensInput`<sup>Optional</sup> <a name="maxTokensInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.maxTokensInput"></a>

```typescript
public readonly maxTokensInput: number;
```

- *Type:* number

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.modelIdInput"></a>

```typescript
public readonly modelIdInput: string;
```

- *Type:* string

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.temperatureInput"></a>

```typescript
public readonly temperatureInput: number;
```

- *Type:* number

---

##### `topPInput`<sup>Optional</sup> <a name="topPInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.topPInput"></a>

```typescript
public readonly topPInput: number;
```

- *Type:* number

---

##### `maxTokens`<sup>Required</sup> <a name="maxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.maxTokens"></a>

```typescript
public readonly maxTokens: number;
```

- *Type:* number

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

---

##### `topP`<sup>Required</sup> <a name="topP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.topP"></a>

```typescript
public readonly topP: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessModelBedrockModelConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig">BedrockagentcoreHarnessModelBedrockModelConfig</a>

---


### BedrockagentcoreHarnessModelGeminiModelConfigOutputReference <a name="BedrockagentcoreHarnessModelGeminiModelConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetApiKeyArn">resetApiKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetMaxTokens">resetMaxTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetModelId">resetModelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetTopK">resetTopK</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetTopP">resetTopP</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiKeyArn` <a name="resetApiKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetApiKeyArn"></a>

```typescript
public resetApiKeyArn(): void
```

##### `resetMaxTokens` <a name="resetMaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetMaxTokens"></a>

```typescript
public resetMaxTokens(): void
```

##### `resetModelId` <a name="resetModelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetModelId"></a>

```typescript
public resetModelId(): void
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetTemperature"></a>

```typescript
public resetTemperature(): void
```

##### `resetTopK` <a name="resetTopK" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetTopK"></a>

```typescript
public resetTopK(): void
```

##### `resetTopP` <a name="resetTopP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetTopP"></a>

```typescript
public resetTopP(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.apiKeyArnInput">apiKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.maxTokensInput">maxTokensInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.modelIdInput">modelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topKInput">topKInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topPInput">topPInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.apiKeyArn">apiKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.maxTokens">maxTokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.temperature">temperature</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topK">topK</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topP">topP</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig">BedrockagentcoreHarnessModelGeminiModelConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyArnInput`<sup>Optional</sup> <a name="apiKeyArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.apiKeyArnInput"></a>

```typescript
public readonly apiKeyArnInput: string;
```

- *Type:* string

---

##### `maxTokensInput`<sup>Optional</sup> <a name="maxTokensInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.maxTokensInput"></a>

```typescript
public readonly maxTokensInput: number;
```

- *Type:* number

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.modelIdInput"></a>

```typescript
public readonly modelIdInput: string;
```

- *Type:* string

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.temperatureInput"></a>

```typescript
public readonly temperatureInput: number;
```

- *Type:* number

---

##### `topKInput`<sup>Optional</sup> <a name="topKInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topKInput"></a>

```typescript
public readonly topKInput: number;
```

- *Type:* number

---

##### `topPInput`<sup>Optional</sup> <a name="topPInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topPInput"></a>

```typescript
public readonly topPInput: number;
```

- *Type:* number

---

##### `apiKeyArn`<sup>Required</sup> <a name="apiKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.apiKeyArn"></a>

```typescript
public readonly apiKeyArn: string;
```

- *Type:* string

---

##### `maxTokens`<sup>Required</sup> <a name="maxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.maxTokens"></a>

```typescript
public readonly maxTokens: number;
```

- *Type:* number

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

---

##### `topK`<sup>Required</sup> <a name="topK" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topK"></a>

```typescript
public readonly topK: number;
```

- *Type:* number

---

##### `topP`<sup>Required</sup> <a name="topP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topP"></a>

```typescript
public readonly topP: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessModelGeminiModelConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig">BedrockagentcoreHarnessModelGeminiModelConfig</a>

---


### BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference <a name="BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetApiKeyArn">resetApiKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetMaxTokens">resetMaxTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetModelId">resetModelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetTopP">resetTopP</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiKeyArn` <a name="resetApiKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetApiKeyArn"></a>

```typescript
public resetApiKeyArn(): void
```

##### `resetMaxTokens` <a name="resetMaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetMaxTokens"></a>

```typescript
public resetMaxTokens(): void
```

##### `resetModelId` <a name="resetModelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetModelId"></a>

```typescript
public resetModelId(): void
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetTemperature"></a>

```typescript
public resetTemperature(): void
```

##### `resetTopP` <a name="resetTopP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetTopP"></a>

```typescript
public resetTopP(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.apiKeyArnInput">apiKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.maxTokensInput">maxTokensInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.modelIdInput">modelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.topPInput">topPInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.apiKeyArn">apiKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.maxTokens">maxTokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.temperature">temperature</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.topP">topP</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig">BedrockagentcoreHarnessModelOpenAiModelConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyArnInput`<sup>Optional</sup> <a name="apiKeyArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.apiKeyArnInput"></a>

```typescript
public readonly apiKeyArnInput: string;
```

- *Type:* string

---

##### `maxTokensInput`<sup>Optional</sup> <a name="maxTokensInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.maxTokensInput"></a>

```typescript
public readonly maxTokensInput: number;
```

- *Type:* number

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.modelIdInput"></a>

```typescript
public readonly modelIdInput: string;
```

- *Type:* string

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.temperatureInput"></a>

```typescript
public readonly temperatureInput: number;
```

- *Type:* number

---

##### `topPInput`<sup>Optional</sup> <a name="topPInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.topPInput"></a>

```typescript
public readonly topPInput: number;
```

- *Type:* number

---

##### `apiKeyArn`<sup>Required</sup> <a name="apiKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.apiKeyArn"></a>

```typescript
public readonly apiKeyArn: string;
```

- *Type:* string

---

##### `maxTokens`<sup>Required</sup> <a name="maxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.maxTokens"></a>

```typescript
public readonly maxTokens: number;
```

- *Type:* number

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

---

##### `topP`<sup>Required</sup> <a name="topP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.topP"></a>

```typescript
public readonly topP: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessModelOpenAiModelConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig">BedrockagentcoreHarnessModelOpenAiModelConfig</a>

---


### BedrockagentcoreHarnessModelOutputReference <a name="BedrockagentcoreHarnessModelOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putBedrockModelConfig">putBedrockModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putGeminiModelConfig">putGeminiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putOpenAiModelConfig">putOpenAiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resetBedrockModelConfig">resetBedrockModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resetGeminiModelConfig">resetGeminiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resetOpenAiModelConfig">resetOpenAiModelConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBedrockModelConfig` <a name="putBedrockModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putBedrockModelConfig"></a>

```typescript
public putBedrockModelConfig(value: BedrockagentcoreHarnessModelBedrockModelConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putBedrockModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig">BedrockagentcoreHarnessModelBedrockModelConfig</a>

---

##### `putGeminiModelConfig` <a name="putGeminiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putGeminiModelConfig"></a>

```typescript
public putGeminiModelConfig(value: BedrockagentcoreHarnessModelGeminiModelConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putGeminiModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig">BedrockagentcoreHarnessModelGeminiModelConfig</a>

---

##### `putOpenAiModelConfig` <a name="putOpenAiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putOpenAiModelConfig"></a>

```typescript
public putOpenAiModelConfig(value: BedrockagentcoreHarnessModelOpenAiModelConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putOpenAiModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig">BedrockagentcoreHarnessModelOpenAiModelConfig</a>

---

##### `resetBedrockModelConfig` <a name="resetBedrockModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resetBedrockModelConfig"></a>

```typescript
public resetBedrockModelConfig(): void
```

##### `resetGeminiModelConfig` <a name="resetGeminiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resetGeminiModelConfig"></a>

```typescript
public resetGeminiModelConfig(): void
```

##### `resetOpenAiModelConfig` <a name="resetOpenAiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resetOpenAiModelConfig"></a>

```typescript
public resetOpenAiModelConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.bedrockModelConfig">bedrockModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference">BedrockagentcoreHarnessModelBedrockModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.geminiModelConfig">geminiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference">BedrockagentcoreHarnessModelGeminiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.openAiModelConfig">openAiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference">BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.bedrockModelConfigInput">bedrockModelConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig">BedrockagentcoreHarnessModelBedrockModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.geminiModelConfigInput">geminiModelConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig">BedrockagentcoreHarnessModelGeminiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.openAiModelConfigInput">openAiModelConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig">BedrockagentcoreHarnessModelOpenAiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel">BedrockagentcoreHarnessModel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bedrockModelConfig`<sup>Required</sup> <a name="bedrockModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.bedrockModelConfig"></a>

```typescript
public readonly bedrockModelConfig: BedrockagentcoreHarnessModelBedrockModelConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference">BedrockagentcoreHarnessModelBedrockModelConfigOutputReference</a>

---

##### `geminiModelConfig`<sup>Required</sup> <a name="geminiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.geminiModelConfig"></a>

```typescript
public readonly geminiModelConfig: BedrockagentcoreHarnessModelGeminiModelConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference">BedrockagentcoreHarnessModelGeminiModelConfigOutputReference</a>

---

##### `openAiModelConfig`<sup>Required</sup> <a name="openAiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.openAiModelConfig"></a>

```typescript
public readonly openAiModelConfig: BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference">BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference</a>

---

##### `bedrockModelConfigInput`<sup>Optional</sup> <a name="bedrockModelConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.bedrockModelConfigInput"></a>

```typescript
public readonly bedrockModelConfigInput: IResolvable | BedrockagentcoreHarnessModelBedrockModelConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig">BedrockagentcoreHarnessModelBedrockModelConfig</a>

---

##### `geminiModelConfigInput`<sup>Optional</sup> <a name="geminiModelConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.geminiModelConfigInput"></a>

```typescript
public readonly geminiModelConfigInput: IResolvable | BedrockagentcoreHarnessModelGeminiModelConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig">BedrockagentcoreHarnessModelGeminiModelConfig</a>

---

##### `openAiModelConfigInput`<sup>Optional</sup> <a name="openAiModelConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.openAiModelConfigInput"></a>

```typescript
public readonly openAiModelConfigInput: IResolvable | BedrockagentcoreHarnessModelOpenAiModelConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig">BedrockagentcoreHarnessModelOpenAiModelConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessModel;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel">BedrockagentcoreHarnessModel</a>

---


### BedrockagentcoreHarnessSkillsList <a name="BedrockagentcoreHarnessSkillsList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.get"></a>

```typescript
public get(index: number): BedrockagentcoreHarnessSkillsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills">BedrockagentcoreHarnessSkills</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessSkills[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills">BedrockagentcoreHarnessSkills</a>[]

---


### BedrockagentcoreHarnessSkillsOutputReference <a name="BedrockagentcoreHarnessSkillsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills">BedrockagentcoreHarnessSkills</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessSkills;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills">BedrockagentcoreHarnessSkills</a>

---


### BedrockagentcoreHarnessSystemPromptList <a name="BedrockagentcoreHarnessSystemPromptList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.get"></a>

```typescript
public get(index: number): BedrockagentcoreHarnessSystemPromptOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt">BedrockagentcoreHarnessSystemPrompt</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessSystemPrompt[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt">BedrockagentcoreHarnessSystemPrompt</a>[]

---


### BedrockagentcoreHarnessSystemPromptOutputReference <a name="BedrockagentcoreHarnessSystemPromptOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt">BedrockagentcoreHarnessSystemPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessSystemPrompt;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt">BedrockagentcoreHarnessSystemPrompt</a>

---


### BedrockagentcoreHarnessTagsList <a name="BedrockagentcoreHarnessTagsList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.get"></a>

```typescript
public get(index: number): BedrockagentcoreHarnessTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags">BedrockagentcoreHarnessTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags">BedrockagentcoreHarnessTags</a>[]

---


### BedrockagentcoreHarnessTagsOutputReference <a name="BedrockagentcoreHarnessTagsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags">BedrockagentcoreHarnessTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags">BedrockagentcoreHarnessTags</a>

---


### BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference <a name="BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.resetBrowserArn">resetBrowserArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBrowserArn` <a name="resetBrowserArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.resetBrowserArn"></a>

```typescript
public resetBrowserArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.browserArnInput">browserArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.browserArn">browserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser">BedrockagentcoreHarnessToolsConfigAgentCoreBrowser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `browserArnInput`<sup>Optional</sup> <a name="browserArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.browserArnInput"></a>

```typescript
public readonly browserArnInput: string;
```

- *Type:* string

---

##### `browserArn`<sup>Required</sup> <a name="browserArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.browserArn"></a>

```typescript
public readonly browserArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessToolsConfigAgentCoreBrowser;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser">BedrockagentcoreHarnessToolsConfigAgentCoreBrowser</a>

---


### BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference <a name="BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.resetCodeInterpreterArn">resetCodeInterpreterArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCodeInterpreterArn` <a name="resetCodeInterpreterArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.resetCodeInterpreterArn"></a>

```typescript
public resetCodeInterpreterArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.codeInterpreterArnInput">codeInterpreterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.codeInterpreterArn">codeInterpreterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeInterpreterArnInput`<sup>Optional</sup> <a name="codeInterpreterArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.codeInterpreterArnInput"></a>

```typescript
public readonly codeInterpreterArnInput: string;
```

- *Type:* string

---

##### `codeInterpreterArn`<sup>Required</sup> <a name="codeInterpreterArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.codeInterpreterArn"></a>

```typescript
public readonly codeInterpreterArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter</a>

---


### BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference <a name="BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetCustomParameters">resetCustomParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetDefaultReturnUrl">resetDefaultReturnUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetGrantType">resetGrantType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetProviderArn">resetProviderArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomParameters` <a name="resetCustomParameters" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetCustomParameters"></a>

```typescript
public resetCustomParameters(): void
```

##### `resetDefaultReturnUrl` <a name="resetDefaultReturnUrl" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetDefaultReturnUrl"></a>

```typescript
public resetDefaultReturnUrl(): void
```

##### `resetGrantType` <a name="resetGrantType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetGrantType"></a>

```typescript
public resetGrantType(): void
```

##### `resetProviderArn` <a name="resetProviderArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetProviderArn"></a>

```typescript
public resetProviderArn(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.customParametersInput">customParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.defaultReturnUrlInput">defaultReturnUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.grantTypeInput">grantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.providerArnInput">providerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.customParameters">customParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.defaultReturnUrl">defaultReturnUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.grantType">grantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.providerArn">providerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customParametersInput`<sup>Optional</sup> <a name="customParametersInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.customParametersInput"></a>

```typescript
public readonly customParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultReturnUrlInput`<sup>Optional</sup> <a name="defaultReturnUrlInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.defaultReturnUrlInput"></a>

```typescript
public readonly defaultReturnUrlInput: string;
```

- *Type:* string

---

##### `grantTypeInput`<sup>Optional</sup> <a name="grantTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.grantTypeInput"></a>

```typescript
public readonly grantTypeInput: string;
```

- *Type:* string

---

##### `providerArnInput`<sup>Optional</sup> <a name="providerArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.providerArnInput"></a>

```typescript
public readonly providerArnInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `customParameters`<sup>Required</sup> <a name="customParameters" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.customParameters"></a>

```typescript
public readonly customParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultReturnUrl`<sup>Required</sup> <a name="defaultReturnUrl" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.defaultReturnUrl"></a>

```typescript
public readonly defaultReturnUrl: string;
```

- *Type:* string

---

##### `grantType`<sup>Required</sup> <a name="grantType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.grantType"></a>

```typescript
public readonly grantType: string;
```

- *Type:* string

---

##### `providerArn`<sup>Required</sup> <a name="providerArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.providerArn"></a>

```typescript
public readonly providerArn: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth</a>

---


### BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference <a name="BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.putOauth">putOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resetAwsIam">resetAwsIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resetNone">resetNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resetOauth">resetOauth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOauth` <a name="putOauth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.putOauth"></a>

```typescript
public putOauth(value: BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.putOauth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth</a>

---

##### `resetAwsIam` <a name="resetAwsIam" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resetAwsIam"></a>

```typescript
public resetAwsIam(): void
```

##### `resetNone` <a name="resetNone" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resetNone"></a>

```typescript
public resetNone(): void
```

##### `resetOauth` <a name="resetOauth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resetOauth"></a>

```typescript
public resetOauth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.oauth">oauth</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.awsIamInput">awsIamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.noneInput">noneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.oauthInput">oauthInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.awsIam">awsIam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.none">none</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oauth`<sup>Required</sup> <a name="oauth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.oauth"></a>

```typescript
public readonly oauth: BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference</a>

---

##### `awsIamInput`<sup>Optional</sup> <a name="awsIamInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.awsIamInput"></a>

```typescript
public readonly awsIamInput: string;
```

- *Type:* string

---

##### `noneInput`<sup>Optional</sup> <a name="noneInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.noneInput"></a>

```typescript
public readonly noneInput: string;
```

- *Type:* string

---

##### `oauthInput`<sup>Optional</sup> <a name="oauthInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.oauthInput"></a>

```typescript
public readonly oauthInput: IResolvable | BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth</a>

---

##### `awsIam`<sup>Required</sup> <a name="awsIam" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.awsIam"></a>

```typescript
public readonly awsIam: string;
```

- *Type:* string

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.none"></a>

```typescript
public readonly none: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth</a>

---


### BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference <a name="BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.putOutboundAuth">putOutboundAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resetGatewayArn">resetGatewayArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resetOutboundAuth">resetOutboundAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOutboundAuth` <a name="putOutboundAuth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.putOutboundAuth"></a>

```typescript
public putOutboundAuth(value: BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.putOutboundAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth</a>

---

##### `resetGatewayArn` <a name="resetGatewayArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resetGatewayArn"></a>

```typescript
public resetGatewayArn(): void
```

##### `resetOutboundAuth` <a name="resetOutboundAuth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resetOutboundAuth"></a>

```typescript
public resetOutboundAuth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.outboundAuth">outboundAuth</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.gatewayArnInput">gatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.outboundAuthInput">outboundAuthInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.gatewayArn">gatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway">BedrockagentcoreHarnessToolsConfigAgentCoreGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outboundAuth`<sup>Required</sup> <a name="outboundAuth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.outboundAuth"></a>

```typescript
public readonly outboundAuth: BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference</a>

---

##### `gatewayArnInput`<sup>Optional</sup> <a name="gatewayArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.gatewayArnInput"></a>

```typescript
public readonly gatewayArnInput: string;
```

- *Type:* string

---

##### `outboundAuthInput`<sup>Optional</sup> <a name="outboundAuthInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.outboundAuthInput"></a>

```typescript
public readonly outboundAuthInput: IResolvable | BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth</a>

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.gatewayArn"></a>

```typescript
public readonly gatewayArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessToolsConfigAgentCoreGateway;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway">BedrockagentcoreHarnessToolsConfigAgentCoreGateway</a>

---


### BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference <a name="BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resetInputSchema">resetInputSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInputSchema` <a name="resetInputSchema" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resetInputSchema"></a>

```typescript
public resetInputSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.inputSchemaInput">inputSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.inputSchema">inputSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction">BedrockagentcoreHarnessToolsConfigInlineFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `inputSchemaInput`<sup>Optional</sup> <a name="inputSchemaInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.inputSchemaInput"></a>

```typescript
public readonly inputSchemaInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `inputSchema`<sup>Required</sup> <a name="inputSchema" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.inputSchema"></a>

```typescript
public readonly inputSchema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessToolsConfigInlineFunction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction">BedrockagentcoreHarnessToolsConfigInlineFunction</a>

---


### BedrockagentcoreHarnessToolsConfigOutputReference <a name="BedrockagentcoreHarnessToolsConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreBrowser">putAgentCoreBrowser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreCodeInterpreter">putAgentCoreCodeInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreGateway">putAgentCoreGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putInlineFunction">putInlineFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putRemoteMcp">putRemoteMcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetAgentCoreBrowser">resetAgentCoreBrowser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetAgentCoreCodeInterpreter">resetAgentCoreCodeInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetAgentCoreGateway">resetAgentCoreGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetInlineFunction">resetInlineFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetRemoteMcp">resetRemoteMcp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentCoreBrowser` <a name="putAgentCoreBrowser" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreBrowser"></a>

```typescript
public putAgentCoreBrowser(value: BedrockagentcoreHarnessToolsConfigAgentCoreBrowser): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreBrowser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser">BedrockagentcoreHarnessToolsConfigAgentCoreBrowser</a>

---

##### `putAgentCoreCodeInterpreter` <a name="putAgentCoreCodeInterpreter" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreCodeInterpreter"></a>

```typescript
public putAgentCoreCodeInterpreter(value: BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreCodeInterpreter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter</a>

---

##### `putAgentCoreGateway` <a name="putAgentCoreGateway" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreGateway"></a>

```typescript
public putAgentCoreGateway(value: BedrockagentcoreHarnessToolsConfigAgentCoreGateway): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreGateway.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway">BedrockagentcoreHarnessToolsConfigAgentCoreGateway</a>

---

##### `putInlineFunction` <a name="putInlineFunction" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putInlineFunction"></a>

```typescript
public putInlineFunction(value: BedrockagentcoreHarnessToolsConfigInlineFunction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putInlineFunction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction">BedrockagentcoreHarnessToolsConfigInlineFunction</a>

---

##### `putRemoteMcp` <a name="putRemoteMcp" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putRemoteMcp"></a>

```typescript
public putRemoteMcp(value: BedrockagentcoreHarnessToolsConfigRemoteMcp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putRemoteMcp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp">BedrockagentcoreHarnessToolsConfigRemoteMcp</a>

---

##### `resetAgentCoreBrowser` <a name="resetAgentCoreBrowser" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetAgentCoreBrowser"></a>

```typescript
public resetAgentCoreBrowser(): void
```

##### `resetAgentCoreCodeInterpreter` <a name="resetAgentCoreCodeInterpreter" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetAgentCoreCodeInterpreter"></a>

```typescript
public resetAgentCoreCodeInterpreter(): void
```

##### `resetAgentCoreGateway` <a name="resetAgentCoreGateway" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetAgentCoreGateway"></a>

```typescript
public resetAgentCoreGateway(): void
```

##### `resetInlineFunction` <a name="resetInlineFunction" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetInlineFunction"></a>

```typescript
public resetInlineFunction(): void
```

##### `resetRemoteMcp` <a name="resetRemoteMcp" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetRemoteMcp"></a>

```typescript
public resetRemoteMcp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreBrowser">agentCoreBrowser</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreCodeInterpreter">agentCoreCodeInterpreter</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreGateway">agentCoreGateway</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.inlineFunction">inlineFunction</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference">BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.remoteMcp">remoteMcp</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference">BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreBrowserInput">agentCoreBrowserInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser">BedrockagentcoreHarnessToolsConfigAgentCoreBrowser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreCodeInterpreterInput">agentCoreCodeInterpreterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreGatewayInput">agentCoreGatewayInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway">BedrockagentcoreHarnessToolsConfigAgentCoreGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.inlineFunctionInput">inlineFunctionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction">BedrockagentcoreHarnessToolsConfigInlineFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.remoteMcpInput">remoteMcpInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp">BedrockagentcoreHarnessToolsConfigRemoteMcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig">BedrockagentcoreHarnessToolsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentCoreBrowser`<sup>Required</sup> <a name="agentCoreBrowser" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreBrowser"></a>

```typescript
public readonly agentCoreBrowser: BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference</a>

---

##### `agentCoreCodeInterpreter`<sup>Required</sup> <a name="agentCoreCodeInterpreter" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreCodeInterpreter"></a>

```typescript
public readonly agentCoreCodeInterpreter: BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference</a>

---

##### `agentCoreGateway`<sup>Required</sup> <a name="agentCoreGateway" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreGateway"></a>

```typescript
public readonly agentCoreGateway: BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference</a>

---

##### `inlineFunction`<sup>Required</sup> <a name="inlineFunction" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.inlineFunction"></a>

```typescript
public readonly inlineFunction: BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference">BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference</a>

---

##### `remoteMcp`<sup>Required</sup> <a name="remoteMcp" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.remoteMcp"></a>

```typescript
public readonly remoteMcp: BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference">BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference</a>

---

##### `agentCoreBrowserInput`<sup>Optional</sup> <a name="agentCoreBrowserInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreBrowserInput"></a>

```typescript
public readonly agentCoreBrowserInput: IResolvable | BedrockagentcoreHarnessToolsConfigAgentCoreBrowser;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser">BedrockagentcoreHarnessToolsConfigAgentCoreBrowser</a>

---

##### `agentCoreCodeInterpreterInput`<sup>Optional</sup> <a name="agentCoreCodeInterpreterInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreCodeInterpreterInput"></a>

```typescript
public readonly agentCoreCodeInterpreterInput: IResolvable | BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter</a>

---

##### `agentCoreGatewayInput`<sup>Optional</sup> <a name="agentCoreGatewayInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreGatewayInput"></a>

```typescript
public readonly agentCoreGatewayInput: IResolvable | BedrockagentcoreHarnessToolsConfigAgentCoreGateway;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway">BedrockagentcoreHarnessToolsConfigAgentCoreGateway</a>

---

##### `inlineFunctionInput`<sup>Optional</sup> <a name="inlineFunctionInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.inlineFunctionInput"></a>

```typescript
public readonly inlineFunctionInput: IResolvable | BedrockagentcoreHarnessToolsConfigInlineFunction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction">BedrockagentcoreHarnessToolsConfigInlineFunction</a>

---

##### `remoteMcpInput`<sup>Optional</sup> <a name="remoteMcpInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.remoteMcpInput"></a>

```typescript
public readonly remoteMcpInput: IResolvable | BedrockagentcoreHarnessToolsConfigRemoteMcp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp">BedrockagentcoreHarnessToolsConfigRemoteMcp</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessToolsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig">BedrockagentcoreHarnessToolsConfig</a>

---


### BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference <a name="BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaders` <a name="resetHeaders" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.headersInput">headersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp">BedrockagentcoreHarnessToolsConfigRemoteMcp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessToolsConfigRemoteMcp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp">BedrockagentcoreHarnessToolsConfigRemoteMcp</a>

---


### BedrockagentcoreHarnessToolsList <a name="BedrockagentcoreHarnessToolsList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.get"></a>

```typescript
public get(index: number): BedrockagentcoreHarnessToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools">BedrockagentcoreHarnessTools</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessTools[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools">BedrockagentcoreHarnessTools</a>[]

---


### BedrockagentcoreHarnessToolsOutputReference <a name="BedrockagentcoreHarnessToolsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.putConfig"></a>

```typescript
public putConfig(value: BedrockagentcoreHarnessToolsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig">BedrockagentcoreHarnessToolsConfig</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference">BedrockagentcoreHarnessToolsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.configInput">configInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig">BedrockagentcoreHarnessToolsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools">BedrockagentcoreHarnessTools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.config"></a>

```typescript
public readonly config: BedrockagentcoreHarnessToolsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference">BedrockagentcoreHarnessToolsConfigOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | BedrockagentcoreHarnessToolsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig">BedrockagentcoreHarnessToolsConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessTools;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools">BedrockagentcoreHarnessTools</a>

---


### BedrockagentcoreHarnessTruncationConfigOutputReference <a name="BedrockagentcoreHarnessTruncationConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.putSlidingWindow">putSlidingWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.putSummarization">putSummarization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.resetSlidingWindow">resetSlidingWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.resetSummarization">resetSummarization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSlidingWindow` <a name="putSlidingWindow" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.putSlidingWindow"></a>

```typescript
public putSlidingWindow(value: BedrockagentcoreHarnessTruncationConfigSlidingWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.putSlidingWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow">BedrockagentcoreHarnessTruncationConfigSlidingWindow</a>

---

##### `putSummarization` <a name="putSummarization" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.putSummarization"></a>

```typescript
public putSummarization(value: BedrockagentcoreHarnessTruncationConfigSummarization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.putSummarization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization">BedrockagentcoreHarnessTruncationConfigSummarization</a>

---

##### `resetSlidingWindow` <a name="resetSlidingWindow" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.resetSlidingWindow"></a>

```typescript
public resetSlidingWindow(): void
```

##### `resetSummarization` <a name="resetSummarization" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.resetSummarization"></a>

```typescript
public resetSummarization(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.slidingWindow">slidingWindow</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference">BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.summarization">summarization</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference">BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.slidingWindowInput">slidingWindowInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow">BedrockagentcoreHarnessTruncationConfigSlidingWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.summarizationInput">summarizationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization">BedrockagentcoreHarnessTruncationConfigSummarization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig">BedrockagentcoreHarnessTruncationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `slidingWindow`<sup>Required</sup> <a name="slidingWindow" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.slidingWindow"></a>

```typescript
public readonly slidingWindow: BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference">BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference</a>

---

##### `summarization`<sup>Required</sup> <a name="summarization" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.summarization"></a>

```typescript
public readonly summarization: BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference">BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference</a>

---

##### `slidingWindowInput`<sup>Optional</sup> <a name="slidingWindowInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.slidingWindowInput"></a>

```typescript
public readonly slidingWindowInput: IResolvable | BedrockagentcoreHarnessTruncationConfigSlidingWindow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow">BedrockagentcoreHarnessTruncationConfigSlidingWindow</a>

---

##### `summarizationInput`<sup>Optional</sup> <a name="summarizationInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.summarizationInput"></a>

```typescript
public readonly summarizationInput: IResolvable | BedrockagentcoreHarnessTruncationConfigSummarization;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization">BedrockagentcoreHarnessTruncationConfigSummarization</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessTruncationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig">BedrockagentcoreHarnessTruncationConfig</a>

---


### BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference <a name="BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.resetMessagesCount">resetMessagesCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessagesCount` <a name="resetMessagesCount" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.resetMessagesCount"></a>

```typescript
public resetMessagesCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.messagesCountInput">messagesCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.messagesCount">messagesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow">BedrockagentcoreHarnessTruncationConfigSlidingWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messagesCountInput`<sup>Optional</sup> <a name="messagesCountInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.messagesCountInput"></a>

```typescript
public readonly messagesCountInput: number;
```

- *Type:* number

---

##### `messagesCount`<sup>Required</sup> <a name="messagesCount" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.messagesCount"></a>

```typescript
public readonly messagesCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessTruncationConfigSlidingWindow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow">BedrockagentcoreHarnessTruncationConfigSlidingWindow</a>

---


### BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference <a name="BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resetPreserveRecentMessages">resetPreserveRecentMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resetSummarizationSystemPrompt">resetSummarizationSystemPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resetSummaryRatio">resetSummaryRatio</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreserveRecentMessages` <a name="resetPreserveRecentMessages" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resetPreserveRecentMessages"></a>

```typescript
public resetPreserveRecentMessages(): void
```

##### `resetSummarizationSystemPrompt` <a name="resetSummarizationSystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resetSummarizationSystemPrompt"></a>

```typescript
public resetSummarizationSystemPrompt(): void
```

##### `resetSummaryRatio` <a name="resetSummaryRatio" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resetSummaryRatio"></a>

```typescript
public resetSummaryRatio(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.preserveRecentMessagesInput">preserveRecentMessagesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summarizationSystemPromptInput">summarizationSystemPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summaryRatioInput">summaryRatioInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.preserveRecentMessages">preserveRecentMessages</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summarizationSystemPrompt">summarizationSystemPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summaryRatio">summaryRatio</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization">BedrockagentcoreHarnessTruncationConfigSummarization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preserveRecentMessagesInput`<sup>Optional</sup> <a name="preserveRecentMessagesInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.preserveRecentMessagesInput"></a>

```typescript
public readonly preserveRecentMessagesInput: number;
```

- *Type:* number

---

##### `summarizationSystemPromptInput`<sup>Optional</sup> <a name="summarizationSystemPromptInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summarizationSystemPromptInput"></a>

```typescript
public readonly summarizationSystemPromptInput: string;
```

- *Type:* string

---

##### `summaryRatioInput`<sup>Optional</sup> <a name="summaryRatioInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summaryRatioInput"></a>

```typescript
public readonly summaryRatioInput: number;
```

- *Type:* number

---

##### `preserveRecentMessages`<sup>Required</sup> <a name="preserveRecentMessages" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.preserveRecentMessages"></a>

```typescript
public readonly preserveRecentMessages: number;
```

- *Type:* number

---

##### `summarizationSystemPrompt`<sup>Required</sup> <a name="summarizationSystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summarizationSystemPrompt"></a>

```typescript
public readonly summarizationSystemPrompt: string;
```

- *Type:* string

---

##### `summaryRatio`<sup>Required</sup> <a name="summaryRatio" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summaryRatio"></a>

```typescript
public readonly summaryRatio: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessTruncationConfigSummarization;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization">BedrockagentcoreHarnessTruncationConfigSummarization</a>

---


### BedrockagentcoreHarnessTruncationOutputReference <a name="BedrockagentcoreHarnessTruncationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreHarness } from '@cdktn/provider-awscc'

new bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.resetStrategy">resetStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.putConfig"></a>

```typescript
public putConfig(value: BedrockagentcoreHarnessTruncationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig">BedrockagentcoreHarnessTruncationConfig</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.resetStrategy"></a>

```typescript
public resetStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference">BedrockagentcoreHarnessTruncationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.configInput">configInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig">BedrockagentcoreHarnessTruncationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.strategyInput">strategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation">BedrockagentcoreHarnessTruncation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.config"></a>

```typescript
public readonly config: BedrockagentcoreHarnessTruncationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference">BedrockagentcoreHarnessTruncationConfigOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | BedrockagentcoreHarnessTruncationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig">BedrockagentcoreHarnessTruncationConfig</a>

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.strategyInput"></a>

```typescript
public readonly strategyInput: string;
```

- *Type:* string

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreHarnessTruncation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation">BedrockagentcoreHarnessTruncation</a>

---



