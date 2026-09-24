# `chimeMediaInsightsPipelineConfiguration` Submodule <a name="`chimeMediaInsightsPipelineConfiguration` Submodule" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeMediaInsightsPipelineConfiguration <a name="ChimeMediaInsightsPipelineConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration awscc_chime_media_insights_pipeline_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration(scope: Construct, id: string, config: ChimeMediaInsightsPipelineConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig">ChimeMediaInsightsPipelineConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig">ChimeMediaInsightsPipelineConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putElements">putElements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putRealTimeAlertConfiguration">putRealTimeAlertConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetRealTimeAlertConfiguration">resetRealTimeAlertConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putElements` <a name="putElements" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putElements"></a>

```typescript
public putElements(value: IResolvable | ChimeMediaInsightsPipelineConfigurationElements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putElements.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>[]

---

##### `putRealTimeAlertConfiguration` <a name="putRealTimeAlertConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putRealTimeAlertConfiguration"></a>

```typescript
public putRealTimeAlertConfiguration(value: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putRealTimeAlertConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putTags"></a>

```typescript
public putTags(value: IResolvable | ChimeMediaInsightsPipelineConfigurationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>[]

---

##### `resetRealTimeAlertConfiguration` <a name="resetRealTimeAlertConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetRealTimeAlertConfiguration"></a>

```typescript
public resetRealTimeAlertConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeMediaInsightsPipelineConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isConstruct"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformElement"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformResource"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ChimeMediaInsightsPipelineConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChimeMediaInsightsPipelineConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChimeMediaInsightsPipelineConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChimeMediaInsightsPipelineConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.elements">elements</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList">ChimeMediaInsightsPipelineConfigurationElementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationArn">mediaInsightsPipelineConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationId">mediaInsightsPipelineConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.realTimeAlertConfiguration">realTimeAlertConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList">ChimeMediaInsightsPipelineConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.updatedTimestamp">updatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.elementsInput">elementsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationNameInput">mediaInsightsPipelineConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.realTimeAlertConfigurationInput">realTimeAlertConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.resourceAccessRoleArnInput">resourceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationName">mediaInsightsPipelineConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.resourceAccessRoleArn">resourceAccessRoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.elements"></a>

```typescript
public readonly elements: ChimeMediaInsightsPipelineConfigurationElementsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList">ChimeMediaInsightsPipelineConfigurationElementsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mediaInsightsPipelineConfigurationArn`<sup>Required</sup> <a name="mediaInsightsPipelineConfigurationArn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationArn"></a>

```typescript
public readonly mediaInsightsPipelineConfigurationArn: string;
```

- *Type:* string

---

##### `mediaInsightsPipelineConfigurationId`<sup>Required</sup> <a name="mediaInsightsPipelineConfigurationId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationId"></a>

```typescript
public readonly mediaInsightsPipelineConfigurationId: string;
```

- *Type:* string

---

##### `realTimeAlertConfiguration`<sup>Required</sup> <a name="realTimeAlertConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.realTimeAlertConfiguration"></a>

```typescript
public readonly realTimeAlertConfiguration: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tags"></a>

```typescript
public readonly tags: ChimeMediaInsightsPipelineConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList">ChimeMediaInsightsPipelineConfigurationTagsList</a>

---

##### `updatedTimestamp`<sup>Required</sup> <a name="updatedTimestamp" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.updatedTimestamp"></a>

```typescript
public readonly updatedTimestamp: string;
```

- *Type:* string

---

##### `elementsInput`<sup>Optional</sup> <a name="elementsInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.elementsInput"></a>

```typescript
public readonly elementsInput: IResolvable | ChimeMediaInsightsPipelineConfigurationElements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>[]

---

##### `mediaInsightsPipelineConfigurationNameInput`<sup>Optional</sup> <a name="mediaInsightsPipelineConfigurationNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationNameInput"></a>

```typescript
public readonly mediaInsightsPipelineConfigurationNameInput: string;
```

- *Type:* string

---

##### `realTimeAlertConfigurationInput`<sup>Optional</sup> <a name="realTimeAlertConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.realTimeAlertConfigurationInput"></a>

```typescript
public readonly realTimeAlertConfigurationInput: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a>

---

##### `resourceAccessRoleArnInput`<sup>Optional</sup> <a name="resourceAccessRoleArnInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.resourceAccessRoleArnInput"></a>

```typescript
public readonly resourceAccessRoleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ChimeMediaInsightsPipelineConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>[]

---

##### `mediaInsightsPipelineConfigurationName`<sup>Required</sup> <a name="mediaInsightsPipelineConfigurationName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationName"></a>

```typescript
public readonly mediaInsightsPipelineConfigurationName: string;
```

- *Type:* string

---

##### `resourceAccessRoleArn`<sup>Required</sup> <a name="resourceAccessRoleArn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.resourceAccessRoleArn"></a>

```typescript
public readonly resourceAccessRoleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeMediaInsightsPipelineConfigurationConfig <a name="ChimeMediaInsightsPipelineConfigurationConfig" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const chimeMediaInsightsPipelineConfigurationConfig: chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.elements">elements</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>[]</code> | The elements in the configuration. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.mediaInsightsPipelineConfigurationName">mediaInsightsPipelineConfigurationName</a></code> | <code>string</code> | The name of the media insights pipeline configuration. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.resourceAccessRoleArn">resourceAccessRoleArn</a></code> | <code>string</code> | The ARN of the role used by the service to access Amazon Web Services resources. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.realTimeAlertConfiguration">realTimeAlertConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#real_time_alert_configuration ChimeMediaInsightsPipelineConfiguration#real_time_alert_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>[]</code> | The tags associated with the configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.elements"></a>

```typescript
public readonly elements: IResolvable | ChimeMediaInsightsPipelineConfigurationElements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>[]

The elements in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#elements ChimeMediaInsightsPipelineConfiguration#elements}

---

##### `mediaInsightsPipelineConfigurationName`<sup>Required</sup> <a name="mediaInsightsPipelineConfigurationName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.mediaInsightsPipelineConfigurationName"></a>

```typescript
public readonly mediaInsightsPipelineConfigurationName: string;
```

- *Type:* string

The name of the media insights pipeline configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#media_insights_pipeline_configuration_name ChimeMediaInsightsPipelineConfiguration#media_insights_pipeline_configuration_name}

---

##### `resourceAccessRoleArn`<sup>Required</sup> <a name="resourceAccessRoleArn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.resourceAccessRoleArn"></a>

```typescript
public readonly resourceAccessRoleArn: string;
```

- *Type:* string

The ARN of the role used by the service to access Amazon Web Services resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#resource_access_role_arn ChimeMediaInsightsPipelineConfiguration#resource_access_role_arn}

---

##### `realTimeAlertConfiguration`<sup>Optional</sup> <a name="realTimeAlertConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.realTimeAlertConfiguration"></a>

```typescript
public readonly realTimeAlertConfiguration: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#real_time_alert_configuration ChimeMediaInsightsPipelineConfiguration#real_time_alert_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ChimeMediaInsightsPipelineConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>[]

The tags associated with the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#tags ChimeMediaInsightsPipelineConfiguration#tags}

---

### ChimeMediaInsightsPipelineConfigurationElements <a name="ChimeMediaInsightsPipelineConfigurationElements" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const chimeMediaInsightsPipelineConfigurationElements: chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.type">type</a></code> | <code>string</code> | The element type. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.amazonTranscribeCallAnalyticsProcessorConfiguration">amazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#amazon_transcribe_call_analytics_processor_configuration ChimeMediaInsightsPipelineConfiguration#amazon_transcribe_call_analytics_processor_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.amazonTranscribeProcessorConfiguration">amazonTranscribeProcessorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#amazon_transcribe_processor_configuration ChimeMediaInsightsPipelineConfiguration#amazon_transcribe_processor_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.kinesisDataStreamSinkConfiguration">kinesisDataStreamSinkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#kinesis_data_stream_sink_configuration ChimeMediaInsightsPipelineConfiguration#kinesis_data_stream_sink_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.s3RecordingSinkConfiguration">s3RecordingSinkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#s3_recording_sink_configuration ChimeMediaInsightsPipelineConfiguration#s3_recording_sink_configuration}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The element type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#type ChimeMediaInsightsPipelineConfiguration#type}

---

##### `amazonTranscribeCallAnalyticsProcessorConfiguration`<sup>Optional</sup> <a name="amazonTranscribeCallAnalyticsProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.amazonTranscribeCallAnalyticsProcessorConfiguration"></a>

```typescript
public readonly amazonTranscribeCallAnalyticsProcessorConfiguration: ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#amazon_transcribe_call_analytics_processor_configuration ChimeMediaInsightsPipelineConfiguration#amazon_transcribe_call_analytics_processor_configuration}.

---

##### `amazonTranscribeProcessorConfiguration`<sup>Optional</sup> <a name="amazonTranscribeProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.amazonTranscribeProcessorConfiguration"></a>

```typescript
public readonly amazonTranscribeProcessorConfiguration: ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#amazon_transcribe_processor_configuration ChimeMediaInsightsPipelineConfiguration#amazon_transcribe_processor_configuration}.

---

##### `kinesisDataStreamSinkConfiguration`<sup>Optional</sup> <a name="kinesisDataStreamSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.kinesisDataStreamSinkConfiguration"></a>

```typescript
public readonly kinesisDataStreamSinkConfiguration: ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#kinesis_data_stream_sink_configuration ChimeMediaInsightsPipelineConfiguration#kinesis_data_stream_sink_configuration}.

---

##### `s3RecordingSinkConfiguration`<sup>Optional</sup> <a name="s3RecordingSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.s3RecordingSinkConfiguration"></a>

```typescript
public readonly s3RecordingSinkConfiguration: ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#s3_recording_sink_configuration ChimeMediaInsightsPipelineConfiguration#s3_recording_sink_configuration}.

---

### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const chimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration: chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.callAnalyticsStreamCategories">callAnalyticsStreamCategories</a></code> | <code>string[]</code> | The categories to send to the insights target. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentIdentificationType">contentIdentificationType</a></code> | <code>string</code> | Labels all PII identified in the transcript. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentRedactionType">contentRedactionType</a></code> | <code>string</code> | Redacts all PII identified in the transcript. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.enablePartialResultsStabilization">enablePartialResultsStabilization</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables partial result stabilization. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.filterPartialResults">filterPartialResults</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, partial results are filtered out. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageCode">languageCode</a></code> | <code>string</code> | The language code in the configuration. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageModelName">languageModelName</a></code> | <code>string</code> | The name of the custom language model. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.partialResultsStability">partialResultsStability</a></code> | <code>string</code> | The level of stability for partial results. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.piiEntityTypes">piiEntityTypes</a></code> | <code>string</code> | The types of PII to redact. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.postCallAnalyticsSettings">postCallAnalyticsSettings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#post_call_analytics_settings ChimeMediaInsightsPipelineConfiguration#post_call_analytics_settings}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterMethod">vocabularyFilterMethod</a></code> | <code>string</code> | The vocabulary filtering method. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterName">vocabularyFilterName</a></code> | <code>string</code> | The name of the custom vocabulary filter. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyName">vocabularyName</a></code> | <code>string</code> | The name of the custom vocabulary. |

---

##### `callAnalyticsStreamCategories`<sup>Optional</sup> <a name="callAnalyticsStreamCategories" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.callAnalyticsStreamCategories"></a>

```typescript
public readonly callAnalyticsStreamCategories: string[];
```

- *Type:* string[]

The categories to send to the insights target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#call_analytics_stream_categories ChimeMediaInsightsPipelineConfiguration#call_analytics_stream_categories}

---

##### `contentIdentificationType`<sup>Optional</sup> <a name="contentIdentificationType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentIdentificationType"></a>

```typescript
public readonly contentIdentificationType: string;
```

- *Type:* string

Labels all PII identified in the transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#content_identification_type ChimeMediaInsightsPipelineConfiguration#content_identification_type}

---

##### `contentRedactionType`<sup>Optional</sup> <a name="contentRedactionType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentRedactionType"></a>

```typescript
public readonly contentRedactionType: string;
```

- *Type:* string

Redacts all PII identified in the transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#content_redaction_type ChimeMediaInsightsPipelineConfiguration#content_redaction_type}

---

##### `enablePartialResultsStabilization`<sup>Optional</sup> <a name="enablePartialResultsStabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.enablePartialResultsStabilization"></a>

```typescript
public readonly enablePartialResultsStabilization: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables partial result stabilization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#enable_partial_results_stabilization ChimeMediaInsightsPipelineConfiguration#enable_partial_results_stabilization}

---

##### `filterPartialResults`<sup>Optional</sup> <a name="filterPartialResults" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.filterPartialResults"></a>

```typescript
public readonly filterPartialResults: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, partial results are filtered out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#filter_partial_results ChimeMediaInsightsPipelineConfiguration#filter_partial_results}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

The language code in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#language_code ChimeMediaInsightsPipelineConfiguration#language_code}

---

##### `languageModelName`<sup>Optional</sup> <a name="languageModelName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageModelName"></a>

```typescript
public readonly languageModelName: string;
```

- *Type:* string

The name of the custom language model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#language_model_name ChimeMediaInsightsPipelineConfiguration#language_model_name}

---

##### `partialResultsStability`<sup>Optional</sup> <a name="partialResultsStability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.partialResultsStability"></a>

```typescript
public readonly partialResultsStability: string;
```

- *Type:* string

The level of stability for partial results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#partial_results_stability ChimeMediaInsightsPipelineConfiguration#partial_results_stability}

---

##### `piiEntityTypes`<sup>Optional</sup> <a name="piiEntityTypes" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.piiEntityTypes"></a>

```typescript
public readonly piiEntityTypes: string;
```

- *Type:* string

The types of PII to redact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#pii_entity_types ChimeMediaInsightsPipelineConfiguration#pii_entity_types}

---

##### `postCallAnalyticsSettings`<sup>Optional</sup> <a name="postCallAnalyticsSettings" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.postCallAnalyticsSettings"></a>

```typescript
public readonly postCallAnalyticsSettings: ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#post_call_analytics_settings ChimeMediaInsightsPipelineConfiguration#post_call_analytics_settings}.

---

##### `vocabularyFilterMethod`<sup>Optional</sup> <a name="vocabularyFilterMethod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterMethod"></a>

```typescript
public readonly vocabularyFilterMethod: string;
```

- *Type:* string

The vocabulary filtering method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_method ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_method}

---

##### `vocabularyFilterName`<sup>Optional</sup> <a name="vocabularyFilterName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterName"></a>

```typescript
public readonly vocabularyFilterName: string;
```

- *Type:* string

The name of the custom vocabulary filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_name ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_name}

---

##### `vocabularyName`<sup>Optional</sup> <a name="vocabularyName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyName"></a>

```typescript
public readonly vocabularyName: string;
```

- *Type:* string

The name of the custom vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_name ChimeMediaInsightsPipelineConfiguration#vocabulary_name}

---

### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const chimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings: chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.contentRedactionOutput">contentRedactionOutput</a></code> | <code>string</code> | The content redaction output settings. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>string</code> | The ARN of the role used by Transcribe to upload post-call analysis. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.outputEncryptionKmsKeyId">outputEncryptionKmsKeyId</a></code> | <code>string</code> | The ID of the KMS key used to encrypt the output. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.outputLocation">outputLocation</a></code> | <code>string</code> | The URL of the Amazon S3 bucket for post-call data. |

---

##### `contentRedactionOutput`<sup>Optional</sup> <a name="contentRedactionOutput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.contentRedactionOutput"></a>

```typescript
public readonly contentRedactionOutput: string;
```

- *Type:* string

The content redaction output settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#content_redaction_output ChimeMediaInsightsPipelineConfiguration#content_redaction_output}

---

##### `dataAccessRoleArn`<sup>Optional</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.dataAccessRoleArn"></a>

```typescript
public readonly dataAccessRoleArn: string;
```

- *Type:* string

The ARN of the role used by Transcribe to upload post-call analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#data_access_role_arn ChimeMediaInsightsPipelineConfiguration#data_access_role_arn}

---

##### `outputEncryptionKmsKeyId`<sup>Optional</sup> <a name="outputEncryptionKmsKeyId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.outputEncryptionKmsKeyId"></a>

```typescript
public readonly outputEncryptionKmsKeyId: string;
```

- *Type:* string

The ID of the KMS key used to encrypt the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#output_encryption_kms_key_id ChimeMediaInsightsPipelineConfiguration#output_encryption_kms_key_id}

---

##### `outputLocation`<sup>Optional</sup> <a name="outputLocation" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.outputLocation"></a>

```typescript
public readonly outputLocation: string;
```

- *Type:* string

The URL of the Amazon S3 bucket for post-call data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#output_location ChimeMediaInsightsPipelineConfiguration#output_location}

---

### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const chimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration: chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.contentIdentificationType">contentIdentificationType</a></code> | <code>string</code> | Labels all PII identified in the transcript. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.contentRedactionType">contentRedactionType</a></code> | <code>string</code> | Redacts all PII identified in the transcript. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.enablePartialResultsStabilization">enablePartialResultsStabilization</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables partial result stabilization. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.filterPartialResults">filterPartialResults</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, partial results are filtered out. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.identifyLanguage">identifyLanguage</a></code> | <code>boolean \| cdktn.IResolvable</code> | Turns language identification on or off. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.identifyMultipleLanguages">identifyMultipleLanguages</a></code> | <code>boolean \| cdktn.IResolvable</code> | Turns multiple language identification on or off. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageCode">languageCode</a></code> | <code>string</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageModelName">languageModelName</a></code> | <code>string</code> | The name of the custom language model. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageOptions">languageOptions</a></code> | <code>string</code> | The language options for transcription. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.partialResultsStability">partialResultsStability</a></code> | <code>string</code> | The level of stability for partial results. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.piiEntityTypes">piiEntityTypes</a></code> | <code>string</code> | The types of PII to redact. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | The preferred language for transcription. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.showSpeakerLabel">showSpeakerLabel</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables speaker partitioning. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterMethod">vocabularyFilterMethod</a></code> | <code>string</code> | The vocabulary filtering method. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterName">vocabularyFilterName</a></code> | <code>string</code> | The name of the custom vocabulary filter. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterNames">vocabularyFilterNames</a></code> | <code>string</code> | The names of the custom vocabulary filters. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyName">vocabularyName</a></code> | <code>string</code> | The name of the custom vocabulary. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyNames">vocabularyNames</a></code> | <code>string</code> | The names of the custom vocabularies. |

---

##### `contentIdentificationType`<sup>Optional</sup> <a name="contentIdentificationType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.contentIdentificationType"></a>

```typescript
public readonly contentIdentificationType: string;
```

- *Type:* string

Labels all PII identified in the transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#content_identification_type ChimeMediaInsightsPipelineConfiguration#content_identification_type}

---

##### `contentRedactionType`<sup>Optional</sup> <a name="contentRedactionType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.contentRedactionType"></a>

```typescript
public readonly contentRedactionType: string;
```

- *Type:* string

Redacts all PII identified in the transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#content_redaction_type ChimeMediaInsightsPipelineConfiguration#content_redaction_type}

---

##### `enablePartialResultsStabilization`<sup>Optional</sup> <a name="enablePartialResultsStabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.enablePartialResultsStabilization"></a>

```typescript
public readonly enablePartialResultsStabilization: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables partial result stabilization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#enable_partial_results_stabilization ChimeMediaInsightsPipelineConfiguration#enable_partial_results_stabilization}

---

##### `filterPartialResults`<sup>Optional</sup> <a name="filterPartialResults" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.filterPartialResults"></a>

```typescript
public readonly filterPartialResults: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, partial results are filtered out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#filter_partial_results ChimeMediaInsightsPipelineConfiguration#filter_partial_results}

---

##### `identifyLanguage`<sup>Optional</sup> <a name="identifyLanguage" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.identifyLanguage"></a>

```typescript
public readonly identifyLanguage: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Turns language identification on or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#identify_language ChimeMediaInsightsPipelineConfiguration#identify_language}

---

##### `identifyMultipleLanguages`<sup>Optional</sup> <a name="identifyMultipleLanguages" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.identifyMultipleLanguages"></a>

```typescript
public readonly identifyMultipleLanguages: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Turns multiple language identification on or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#identify_multiple_languages ChimeMediaInsightsPipelineConfiguration#identify_multiple_languages}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#language_code ChimeMediaInsightsPipelineConfiguration#language_code}

---

##### `languageModelName`<sup>Optional</sup> <a name="languageModelName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageModelName"></a>

```typescript
public readonly languageModelName: string;
```

- *Type:* string

The name of the custom language model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#language_model_name ChimeMediaInsightsPipelineConfiguration#language_model_name}

---

##### `languageOptions`<sup>Optional</sup> <a name="languageOptions" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageOptions"></a>

```typescript
public readonly languageOptions: string;
```

- *Type:* string

The language options for transcription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#language_options ChimeMediaInsightsPipelineConfiguration#language_options}

---

##### `partialResultsStability`<sup>Optional</sup> <a name="partialResultsStability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.partialResultsStability"></a>

```typescript
public readonly partialResultsStability: string;
```

- *Type:* string

The level of stability for partial results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#partial_results_stability ChimeMediaInsightsPipelineConfiguration#partial_results_stability}

---

##### `piiEntityTypes`<sup>Optional</sup> <a name="piiEntityTypes" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.piiEntityTypes"></a>

```typescript
public readonly piiEntityTypes: string;
```

- *Type:* string

The types of PII to redact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#pii_entity_types ChimeMediaInsightsPipelineConfiguration#pii_entity_types}

---

##### `preferredLanguage`<sup>Optional</sup> <a name="preferredLanguage" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

The preferred language for transcription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#preferred_language ChimeMediaInsightsPipelineConfiguration#preferred_language}

---

##### `showSpeakerLabel`<sup>Optional</sup> <a name="showSpeakerLabel" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.showSpeakerLabel"></a>

```typescript
public readonly showSpeakerLabel: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables speaker partitioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#show_speaker_label ChimeMediaInsightsPipelineConfiguration#show_speaker_label}

---

##### `vocabularyFilterMethod`<sup>Optional</sup> <a name="vocabularyFilterMethod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterMethod"></a>

```typescript
public readonly vocabularyFilterMethod: string;
```

- *Type:* string

The vocabulary filtering method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_method ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_method}

---

##### `vocabularyFilterName`<sup>Optional</sup> <a name="vocabularyFilterName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterName"></a>

```typescript
public readonly vocabularyFilterName: string;
```

- *Type:* string

The name of the custom vocabulary filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_name ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_name}

---

##### `vocabularyFilterNames`<sup>Optional</sup> <a name="vocabularyFilterNames" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterNames"></a>

```typescript
public readonly vocabularyFilterNames: string;
```

- *Type:* string

The names of the custom vocabulary filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_names ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_names}

---

##### `vocabularyName`<sup>Optional</sup> <a name="vocabularyName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyName"></a>

```typescript
public readonly vocabularyName: string;
```

- *Type:* string

The name of the custom vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_name ChimeMediaInsightsPipelineConfiguration#vocabulary_name}

---

##### `vocabularyNames`<sup>Optional</sup> <a name="vocabularyNames" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyNames"></a>

```typescript
public readonly vocabularyNames: string;
```

- *Type:* string

The names of the custom vocabularies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_names ChimeMediaInsightsPipelineConfiguration#vocabulary_names}

---

### ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration <a name="ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const chimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration: chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration.property.insightsTarget">insightsTarget</a></code> | <code>string</code> | The ARN of the Kinesis Data Stream sink. |

---

##### `insightsTarget`<sup>Optional</sup> <a name="insightsTarget" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration.property.insightsTarget"></a>

```typescript
public readonly insightsTarget: string;
```

- *Type:* string

The ARN of the Kinesis Data Stream sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#insights_target ChimeMediaInsightsPipelineConfiguration#insights_target}

---

### ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration <a name="ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const chimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration: chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.property.destination">destination</a></code> | <code>string</code> | The default URI of the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.property.recordingFileFormat">recordingFileFormat</a></code> | <code>string</code> | The recording file format. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

The default URI of the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#destination ChimeMediaInsightsPipelineConfiguration#destination}

---

##### `recordingFileFormat`<sup>Optional</sup> <a name="recordingFileFormat" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.property.recordingFileFormat"></a>

```typescript
public readonly recordingFileFormat: string;
```

- *Type:* string

The recording file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#recording_file_format ChimeMediaInsightsPipelineConfiguration#recording_file_format}

---

### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const chimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration: chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Turns off real-time alerts. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>[]</code> | The rules in the alert. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Turns off real-time alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#disabled ChimeMediaInsightsPipelineConfiguration#disabled}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.property.rules"></a>

```typescript
public readonly rules: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>[]

The rules in the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#rules ChimeMediaInsightsPipelineConfiguration#rules}

---

### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const chimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules: chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.issueDetectionConfiguration">issueDetectionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#issue_detection_configuration ChimeMediaInsightsPipelineConfiguration#issue_detection_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.keywordMatchConfiguration">keywordMatchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#keyword_match_configuration ChimeMediaInsightsPipelineConfiguration#keyword_match_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.sentimentConfiguration">sentimentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#sentiment_configuration ChimeMediaInsightsPipelineConfiguration#sentiment_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.type">type</a></code> | <code>string</code> | The type of alert rule. |

---

##### `issueDetectionConfiguration`<sup>Optional</sup> <a name="issueDetectionConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.issueDetectionConfiguration"></a>

```typescript
public readonly issueDetectionConfiguration: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#issue_detection_configuration ChimeMediaInsightsPipelineConfiguration#issue_detection_configuration}.

---

##### `keywordMatchConfiguration`<sup>Optional</sup> <a name="keywordMatchConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.keywordMatchConfiguration"></a>

```typescript
public readonly keywordMatchConfiguration: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#keyword_match_configuration ChimeMediaInsightsPipelineConfiguration#keyword_match_configuration}.

---

##### `sentimentConfiguration`<sup>Optional</sup> <a name="sentimentConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.sentimentConfiguration"></a>

```typescript
public readonly sentimentConfiguration: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#sentiment_configuration ChimeMediaInsightsPipelineConfiguration#sentiment_configuration}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#type ChimeMediaInsightsPipelineConfiguration#type}

---

### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const chimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration: chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration.property.ruleName">ruleName</a></code> | <code>string</code> | The name of the issue detection rule. |

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name of the issue detection rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#rule_name ChimeMediaInsightsPipelineConfiguration#rule_name}

---

### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const chimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration: chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.keywords">keywords</a></code> | <code>string[]</code> | The keywords or phrases to match. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.negate">negate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Matches keywords on their presence or absence. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.ruleName">ruleName</a></code> | <code>string</code> | The name of the keyword match rule. |

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

The keywords or phrases to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#keywords ChimeMediaInsightsPipelineConfiguration#keywords}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Matches keywords on their presence or absence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#negate ChimeMediaInsightsPipelineConfiguration#negate}

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name of the keyword match rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#rule_name ChimeMediaInsightsPipelineConfiguration#rule_name}

---

### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const chimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration: chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.ruleName">ruleName</a></code> | <code>string</code> | The name of the sentiment rule. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.sentimentType">sentimentType</a></code> | <code>string</code> | The type of sentiment. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.timePeriod">timePeriod</a></code> | <code>number</code> | The analysis interval in seconds. |

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name of the sentiment rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#rule_name ChimeMediaInsightsPipelineConfiguration#rule_name}

---

##### `sentimentType`<sup>Optional</sup> <a name="sentimentType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.sentimentType"></a>

```typescript
public readonly sentimentType: string;
```

- *Type:* string

The type of sentiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#sentiment_type ChimeMediaInsightsPipelineConfiguration#sentiment_type}

---

##### `timePeriod`<sup>Optional</sup> <a name="timePeriod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.timePeriod"></a>

```typescript
public readonly timePeriod: number;
```

- *Type:* number

The analysis interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#time_period ChimeMediaInsightsPipelineConfiguration#time_period}

---

### ChimeMediaInsightsPipelineConfigurationTags <a name="ChimeMediaInsightsPipelineConfigurationTags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const chimeMediaInsightsPipelineConfigurationTags: chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#key ChimeMediaInsightsPipelineConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#value ChimeMediaInsightsPipelineConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#key ChimeMediaInsightsPipelineConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#value ChimeMediaInsightsPipelineConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.putPostCallAnalyticsSettings">putPostCallAnalyticsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetCallAnalyticsStreamCategories">resetCallAnalyticsStreamCategories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetContentIdentificationType">resetContentIdentificationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetContentRedactionType">resetContentRedactionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetEnablePartialResultsStabilization">resetEnablePartialResultsStabilization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetFilterPartialResults">resetFilterPartialResults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetLanguageModelName">resetLanguageModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPartialResultsStability">resetPartialResultsStability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPiiEntityTypes">resetPiiEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPostCallAnalyticsSettings">resetPostCallAnalyticsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyFilterMethod">resetVocabularyFilterMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyFilterName">resetVocabularyFilterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyName">resetVocabularyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPostCallAnalyticsSettings` <a name="putPostCallAnalyticsSettings" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.putPostCallAnalyticsSettings"></a>

```typescript
public putPostCallAnalyticsSettings(value: ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.putPostCallAnalyticsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a>

---

##### `resetCallAnalyticsStreamCategories` <a name="resetCallAnalyticsStreamCategories" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetCallAnalyticsStreamCategories"></a>

```typescript
public resetCallAnalyticsStreamCategories(): void
```

##### `resetContentIdentificationType` <a name="resetContentIdentificationType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetContentIdentificationType"></a>

```typescript
public resetContentIdentificationType(): void
```

##### `resetContentRedactionType` <a name="resetContentRedactionType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetContentRedactionType"></a>

```typescript
public resetContentRedactionType(): void
```

##### `resetEnablePartialResultsStabilization` <a name="resetEnablePartialResultsStabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetEnablePartialResultsStabilization"></a>

```typescript
public resetEnablePartialResultsStabilization(): void
```

##### `resetFilterPartialResults` <a name="resetFilterPartialResults" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetFilterPartialResults"></a>

```typescript
public resetFilterPartialResults(): void
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetLanguageCode"></a>

```typescript
public resetLanguageCode(): void
```

##### `resetLanguageModelName` <a name="resetLanguageModelName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetLanguageModelName"></a>

```typescript
public resetLanguageModelName(): void
```

##### `resetPartialResultsStability` <a name="resetPartialResultsStability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPartialResultsStability"></a>

```typescript
public resetPartialResultsStability(): void
```

##### `resetPiiEntityTypes` <a name="resetPiiEntityTypes" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPiiEntityTypes"></a>

```typescript
public resetPiiEntityTypes(): void
```

##### `resetPostCallAnalyticsSettings` <a name="resetPostCallAnalyticsSettings" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPostCallAnalyticsSettings"></a>

```typescript
public resetPostCallAnalyticsSettings(): void
```

##### `resetVocabularyFilterMethod` <a name="resetVocabularyFilterMethod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyFilterMethod"></a>

```typescript
public resetVocabularyFilterMethod(): void
```

##### `resetVocabularyFilterName` <a name="resetVocabularyFilterName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyFilterName"></a>

```typescript
public resetVocabularyFilterName(): void
```

##### `resetVocabularyName` <a name="resetVocabularyName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyName"></a>

```typescript
public resetVocabularyName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.postCallAnalyticsSettings">postCallAnalyticsSettings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.callAnalyticsStreamCategoriesInput">callAnalyticsStreamCategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentIdentificationTypeInput">contentIdentificationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentRedactionTypeInput">contentRedactionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.enablePartialResultsStabilizationInput">enablePartialResultsStabilizationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.filterPartialResultsInput">filterPartialResultsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageModelNameInput">languageModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.partialResultsStabilityInput">partialResultsStabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.piiEntityTypesInput">piiEntityTypesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.postCallAnalyticsSettingsInput">postCallAnalyticsSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterMethodInput">vocabularyFilterMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterNameInput">vocabularyFilterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyNameInput">vocabularyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.callAnalyticsStreamCategories">callAnalyticsStreamCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentIdentificationType">contentIdentificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentRedactionType">contentRedactionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.enablePartialResultsStabilization">enablePartialResultsStabilization</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.filterPartialResults">filterPartialResults</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageModelName">languageModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.partialResultsStability">partialResultsStability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.piiEntityTypes">piiEntityTypes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterMethod">vocabularyFilterMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterName">vocabularyFilterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyName">vocabularyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `postCallAnalyticsSettings`<sup>Required</sup> <a name="postCallAnalyticsSettings" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.postCallAnalyticsSettings"></a>

```typescript
public readonly postCallAnalyticsSettings: ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference</a>

---

##### `callAnalyticsStreamCategoriesInput`<sup>Optional</sup> <a name="callAnalyticsStreamCategoriesInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.callAnalyticsStreamCategoriesInput"></a>

```typescript
public readonly callAnalyticsStreamCategoriesInput: string[];
```

- *Type:* string[]

---

##### `contentIdentificationTypeInput`<sup>Optional</sup> <a name="contentIdentificationTypeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentIdentificationTypeInput"></a>

```typescript
public readonly contentIdentificationTypeInput: string;
```

- *Type:* string

---

##### `contentRedactionTypeInput`<sup>Optional</sup> <a name="contentRedactionTypeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentRedactionTypeInput"></a>

```typescript
public readonly contentRedactionTypeInput: string;
```

- *Type:* string

---

##### `enablePartialResultsStabilizationInput`<sup>Optional</sup> <a name="enablePartialResultsStabilizationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.enablePartialResultsStabilizationInput"></a>

```typescript
public readonly enablePartialResultsStabilizationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `filterPartialResultsInput`<sup>Optional</sup> <a name="filterPartialResultsInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.filterPartialResultsInput"></a>

```typescript
public readonly filterPartialResultsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `languageModelNameInput`<sup>Optional</sup> <a name="languageModelNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageModelNameInput"></a>

```typescript
public readonly languageModelNameInput: string;
```

- *Type:* string

---

##### `partialResultsStabilityInput`<sup>Optional</sup> <a name="partialResultsStabilityInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.partialResultsStabilityInput"></a>

```typescript
public readonly partialResultsStabilityInput: string;
```

- *Type:* string

---

##### `piiEntityTypesInput`<sup>Optional</sup> <a name="piiEntityTypesInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.piiEntityTypesInput"></a>

```typescript
public readonly piiEntityTypesInput: string;
```

- *Type:* string

---

##### `postCallAnalyticsSettingsInput`<sup>Optional</sup> <a name="postCallAnalyticsSettingsInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.postCallAnalyticsSettingsInput"></a>

```typescript
public readonly postCallAnalyticsSettingsInput: IResolvable | ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a>

---

##### `vocabularyFilterMethodInput`<sup>Optional</sup> <a name="vocabularyFilterMethodInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterMethodInput"></a>

```typescript
public readonly vocabularyFilterMethodInput: string;
```

- *Type:* string

---

##### `vocabularyFilterNameInput`<sup>Optional</sup> <a name="vocabularyFilterNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterNameInput"></a>

```typescript
public readonly vocabularyFilterNameInput: string;
```

- *Type:* string

---

##### `vocabularyNameInput`<sup>Optional</sup> <a name="vocabularyNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyNameInput"></a>

```typescript
public readonly vocabularyNameInput: string;
```

- *Type:* string

---

##### `callAnalyticsStreamCategories`<sup>Required</sup> <a name="callAnalyticsStreamCategories" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.callAnalyticsStreamCategories"></a>

```typescript
public readonly callAnalyticsStreamCategories: string[];
```

- *Type:* string[]

---

##### `contentIdentificationType`<sup>Required</sup> <a name="contentIdentificationType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentIdentificationType"></a>

```typescript
public readonly contentIdentificationType: string;
```

- *Type:* string

---

##### `contentRedactionType`<sup>Required</sup> <a name="contentRedactionType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentRedactionType"></a>

```typescript
public readonly contentRedactionType: string;
```

- *Type:* string

---

##### `enablePartialResultsStabilization`<sup>Required</sup> <a name="enablePartialResultsStabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.enablePartialResultsStabilization"></a>

```typescript
public readonly enablePartialResultsStabilization: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `filterPartialResults`<sup>Required</sup> <a name="filterPartialResults" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.filterPartialResults"></a>

```typescript
public readonly filterPartialResults: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `languageModelName`<sup>Required</sup> <a name="languageModelName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageModelName"></a>

```typescript
public readonly languageModelName: string;
```

- *Type:* string

---

##### `partialResultsStability`<sup>Required</sup> <a name="partialResultsStability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.partialResultsStability"></a>

```typescript
public readonly partialResultsStability: string;
```

- *Type:* string

---

##### `piiEntityTypes`<sup>Required</sup> <a name="piiEntityTypes" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.piiEntityTypes"></a>

```typescript
public readonly piiEntityTypes: string;
```

- *Type:* string

---

##### `vocabularyFilterMethod`<sup>Required</sup> <a name="vocabularyFilterMethod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterMethod"></a>

```typescript
public readonly vocabularyFilterMethod: string;
```

- *Type:* string

---

##### `vocabularyFilterName`<sup>Required</sup> <a name="vocabularyFilterName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterName"></a>

```typescript
public readonly vocabularyFilterName: string;
```

- *Type:* string

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyName"></a>

```typescript
public readonly vocabularyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetContentRedactionOutput">resetContentRedactionOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetDataAccessRoleArn">resetDataAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetOutputEncryptionKmsKeyId">resetOutputEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetOutputLocation">resetOutputLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentRedactionOutput` <a name="resetContentRedactionOutput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetContentRedactionOutput"></a>

```typescript
public resetContentRedactionOutput(): void
```

##### `resetDataAccessRoleArn` <a name="resetDataAccessRoleArn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetDataAccessRoleArn"></a>

```typescript
public resetDataAccessRoleArn(): void
```

##### `resetOutputEncryptionKmsKeyId` <a name="resetOutputEncryptionKmsKeyId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetOutputEncryptionKmsKeyId"></a>

```typescript
public resetOutputEncryptionKmsKeyId(): void
```

##### `resetOutputLocation` <a name="resetOutputLocation" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetOutputLocation"></a>

```typescript
public resetOutputLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.contentRedactionOutputInput">contentRedactionOutputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.dataAccessRoleArnInput">dataAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputEncryptionKmsKeyIdInput">outputEncryptionKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputLocationInput">outputLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.contentRedactionOutput">contentRedactionOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputEncryptionKmsKeyId">outputEncryptionKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputLocation">outputLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentRedactionOutputInput`<sup>Optional</sup> <a name="contentRedactionOutputInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.contentRedactionOutputInput"></a>

```typescript
public readonly contentRedactionOutputInput: string;
```

- *Type:* string

---

##### `dataAccessRoleArnInput`<sup>Optional</sup> <a name="dataAccessRoleArnInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.dataAccessRoleArnInput"></a>

```typescript
public readonly dataAccessRoleArnInput: string;
```

- *Type:* string

---

##### `outputEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="outputEncryptionKmsKeyIdInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputEncryptionKmsKeyIdInput"></a>

```typescript
public readonly outputEncryptionKmsKeyIdInput: string;
```

- *Type:* string

---

##### `outputLocationInput`<sup>Optional</sup> <a name="outputLocationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputLocationInput"></a>

```typescript
public readonly outputLocationInput: string;
```

- *Type:* string

---

##### `contentRedactionOutput`<sup>Required</sup> <a name="contentRedactionOutput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.contentRedactionOutput"></a>

```typescript
public readonly contentRedactionOutput: string;
```

- *Type:* string

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.dataAccessRoleArn"></a>

```typescript
public readonly dataAccessRoleArn: string;
```

- *Type:* string

---

##### `outputEncryptionKmsKeyId`<sup>Required</sup> <a name="outputEncryptionKmsKeyId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputEncryptionKmsKeyId"></a>

```typescript
public readonly outputEncryptionKmsKeyId: string;
```

- *Type:* string

---

##### `outputLocation`<sup>Required</sup> <a name="outputLocation" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputLocation"></a>

```typescript
public readonly outputLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a>

---


### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetContentIdentificationType">resetContentIdentificationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetContentRedactionType">resetContentRedactionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetEnablePartialResultsStabilization">resetEnablePartialResultsStabilization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetFilterPartialResults">resetFilterPartialResults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetIdentifyLanguage">resetIdentifyLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetIdentifyMultipleLanguages">resetIdentifyMultipleLanguages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageModelName">resetLanguageModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageOptions">resetLanguageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPartialResultsStability">resetPartialResultsStability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPiiEntityTypes">resetPiiEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPreferredLanguage">resetPreferredLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetShowSpeakerLabel">resetShowSpeakerLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterMethod">resetVocabularyFilterMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterName">resetVocabularyFilterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterNames">resetVocabularyFilterNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyName">resetVocabularyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyNames">resetVocabularyNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentIdentificationType` <a name="resetContentIdentificationType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetContentIdentificationType"></a>

```typescript
public resetContentIdentificationType(): void
```

##### `resetContentRedactionType` <a name="resetContentRedactionType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetContentRedactionType"></a>

```typescript
public resetContentRedactionType(): void
```

##### `resetEnablePartialResultsStabilization` <a name="resetEnablePartialResultsStabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetEnablePartialResultsStabilization"></a>

```typescript
public resetEnablePartialResultsStabilization(): void
```

##### `resetFilterPartialResults` <a name="resetFilterPartialResults" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetFilterPartialResults"></a>

```typescript
public resetFilterPartialResults(): void
```

##### `resetIdentifyLanguage` <a name="resetIdentifyLanguage" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetIdentifyLanguage"></a>

```typescript
public resetIdentifyLanguage(): void
```

##### `resetIdentifyMultipleLanguages` <a name="resetIdentifyMultipleLanguages" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetIdentifyMultipleLanguages"></a>

```typescript
public resetIdentifyMultipleLanguages(): void
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageCode"></a>

```typescript
public resetLanguageCode(): void
```

##### `resetLanguageModelName` <a name="resetLanguageModelName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageModelName"></a>

```typescript
public resetLanguageModelName(): void
```

##### `resetLanguageOptions` <a name="resetLanguageOptions" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageOptions"></a>

```typescript
public resetLanguageOptions(): void
```

##### `resetPartialResultsStability` <a name="resetPartialResultsStability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPartialResultsStability"></a>

```typescript
public resetPartialResultsStability(): void
```

##### `resetPiiEntityTypes` <a name="resetPiiEntityTypes" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPiiEntityTypes"></a>

```typescript
public resetPiiEntityTypes(): void
```

##### `resetPreferredLanguage` <a name="resetPreferredLanguage" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPreferredLanguage"></a>

```typescript
public resetPreferredLanguage(): void
```

##### `resetShowSpeakerLabel` <a name="resetShowSpeakerLabel" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetShowSpeakerLabel"></a>

```typescript
public resetShowSpeakerLabel(): void
```

##### `resetVocabularyFilterMethod` <a name="resetVocabularyFilterMethod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterMethod"></a>

```typescript
public resetVocabularyFilterMethod(): void
```

##### `resetVocabularyFilterName` <a name="resetVocabularyFilterName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterName"></a>

```typescript
public resetVocabularyFilterName(): void
```

##### `resetVocabularyFilterNames` <a name="resetVocabularyFilterNames" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterNames"></a>

```typescript
public resetVocabularyFilterNames(): void
```

##### `resetVocabularyName` <a name="resetVocabularyName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyName"></a>

```typescript
public resetVocabularyName(): void
```

##### `resetVocabularyNames` <a name="resetVocabularyNames" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyNames"></a>

```typescript
public resetVocabularyNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentIdentificationTypeInput">contentIdentificationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentRedactionTypeInput">contentRedactionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.enablePartialResultsStabilizationInput">enablePartialResultsStabilizationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.filterPartialResultsInput">filterPartialResultsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyLanguageInput">identifyLanguageInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyMultipleLanguagesInput">identifyMultipleLanguagesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageModelNameInput">languageModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageOptionsInput">languageOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.partialResultsStabilityInput">partialResultsStabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.piiEntityTypesInput">piiEntityTypesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.preferredLanguageInput">preferredLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.showSpeakerLabelInput">showSpeakerLabelInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterMethodInput">vocabularyFilterMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNameInput">vocabularyFilterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNamesInput">vocabularyFilterNamesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNameInput">vocabularyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNamesInput">vocabularyNamesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentIdentificationType">contentIdentificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentRedactionType">contentRedactionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.enablePartialResultsStabilization">enablePartialResultsStabilization</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.filterPartialResults">filterPartialResults</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyLanguage">identifyLanguage</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyMultipleLanguages">identifyMultipleLanguages</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageModelName">languageModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageOptions">languageOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.partialResultsStability">partialResultsStability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.piiEntityTypes">piiEntityTypes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.showSpeakerLabel">showSpeakerLabel</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterMethod">vocabularyFilterMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterName">vocabularyFilterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNames">vocabularyFilterNames</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyName">vocabularyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNames">vocabularyNames</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentIdentificationTypeInput`<sup>Optional</sup> <a name="contentIdentificationTypeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentIdentificationTypeInput"></a>

```typescript
public readonly contentIdentificationTypeInput: string;
```

- *Type:* string

---

##### `contentRedactionTypeInput`<sup>Optional</sup> <a name="contentRedactionTypeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentRedactionTypeInput"></a>

```typescript
public readonly contentRedactionTypeInput: string;
```

- *Type:* string

---

##### `enablePartialResultsStabilizationInput`<sup>Optional</sup> <a name="enablePartialResultsStabilizationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.enablePartialResultsStabilizationInput"></a>

```typescript
public readonly enablePartialResultsStabilizationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `filterPartialResultsInput`<sup>Optional</sup> <a name="filterPartialResultsInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.filterPartialResultsInput"></a>

```typescript
public readonly filterPartialResultsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `identifyLanguageInput`<sup>Optional</sup> <a name="identifyLanguageInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyLanguageInput"></a>

```typescript
public readonly identifyLanguageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `identifyMultipleLanguagesInput`<sup>Optional</sup> <a name="identifyMultipleLanguagesInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyMultipleLanguagesInput"></a>

```typescript
public readonly identifyMultipleLanguagesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `languageModelNameInput`<sup>Optional</sup> <a name="languageModelNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageModelNameInput"></a>

```typescript
public readonly languageModelNameInput: string;
```

- *Type:* string

---

##### `languageOptionsInput`<sup>Optional</sup> <a name="languageOptionsInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageOptionsInput"></a>

```typescript
public readonly languageOptionsInput: string;
```

- *Type:* string

---

##### `partialResultsStabilityInput`<sup>Optional</sup> <a name="partialResultsStabilityInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.partialResultsStabilityInput"></a>

```typescript
public readonly partialResultsStabilityInput: string;
```

- *Type:* string

---

##### `piiEntityTypesInput`<sup>Optional</sup> <a name="piiEntityTypesInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.piiEntityTypesInput"></a>

```typescript
public readonly piiEntityTypesInput: string;
```

- *Type:* string

---

##### `preferredLanguageInput`<sup>Optional</sup> <a name="preferredLanguageInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.preferredLanguageInput"></a>

```typescript
public readonly preferredLanguageInput: string;
```

- *Type:* string

---

##### `showSpeakerLabelInput`<sup>Optional</sup> <a name="showSpeakerLabelInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.showSpeakerLabelInput"></a>

```typescript
public readonly showSpeakerLabelInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vocabularyFilterMethodInput`<sup>Optional</sup> <a name="vocabularyFilterMethodInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterMethodInput"></a>

```typescript
public readonly vocabularyFilterMethodInput: string;
```

- *Type:* string

---

##### `vocabularyFilterNameInput`<sup>Optional</sup> <a name="vocabularyFilterNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNameInput"></a>

```typescript
public readonly vocabularyFilterNameInput: string;
```

- *Type:* string

---

##### `vocabularyFilterNamesInput`<sup>Optional</sup> <a name="vocabularyFilterNamesInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNamesInput"></a>

```typescript
public readonly vocabularyFilterNamesInput: string;
```

- *Type:* string

---

##### `vocabularyNameInput`<sup>Optional</sup> <a name="vocabularyNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNameInput"></a>

```typescript
public readonly vocabularyNameInput: string;
```

- *Type:* string

---

##### `vocabularyNamesInput`<sup>Optional</sup> <a name="vocabularyNamesInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNamesInput"></a>

```typescript
public readonly vocabularyNamesInput: string;
```

- *Type:* string

---

##### `contentIdentificationType`<sup>Required</sup> <a name="contentIdentificationType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentIdentificationType"></a>

```typescript
public readonly contentIdentificationType: string;
```

- *Type:* string

---

##### `contentRedactionType`<sup>Required</sup> <a name="contentRedactionType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentRedactionType"></a>

```typescript
public readonly contentRedactionType: string;
```

- *Type:* string

---

##### `enablePartialResultsStabilization`<sup>Required</sup> <a name="enablePartialResultsStabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.enablePartialResultsStabilization"></a>

```typescript
public readonly enablePartialResultsStabilization: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `filterPartialResults`<sup>Required</sup> <a name="filterPartialResults" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.filterPartialResults"></a>

```typescript
public readonly filterPartialResults: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `identifyLanguage`<sup>Required</sup> <a name="identifyLanguage" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyLanguage"></a>

```typescript
public readonly identifyLanguage: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `identifyMultipleLanguages`<sup>Required</sup> <a name="identifyMultipleLanguages" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyMultipleLanguages"></a>

```typescript
public readonly identifyMultipleLanguages: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `languageModelName`<sup>Required</sup> <a name="languageModelName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageModelName"></a>

```typescript
public readonly languageModelName: string;
```

- *Type:* string

---

##### `languageOptions`<sup>Required</sup> <a name="languageOptions" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageOptions"></a>

```typescript
public readonly languageOptions: string;
```

- *Type:* string

---

##### `partialResultsStability`<sup>Required</sup> <a name="partialResultsStability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.partialResultsStability"></a>

```typescript
public readonly partialResultsStability: string;
```

- *Type:* string

---

##### `piiEntityTypes`<sup>Required</sup> <a name="piiEntityTypes" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.piiEntityTypes"></a>

```typescript
public readonly piiEntityTypes: string;
```

- *Type:* string

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

---

##### `showSpeakerLabel`<sup>Required</sup> <a name="showSpeakerLabel" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.showSpeakerLabel"></a>

```typescript
public readonly showSpeakerLabel: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vocabularyFilterMethod`<sup>Required</sup> <a name="vocabularyFilterMethod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterMethod"></a>

```typescript
public readonly vocabularyFilterMethod: string;
```

- *Type:* string

---

##### `vocabularyFilterName`<sup>Required</sup> <a name="vocabularyFilterName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterName"></a>

```typescript
public readonly vocabularyFilterName: string;
```

- *Type:* string

---

##### `vocabularyFilterNames`<sup>Required</sup> <a name="vocabularyFilterNames" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNames"></a>

```typescript
public readonly vocabularyFilterNames: string;
```

- *Type:* string

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyName"></a>

```typescript
public readonly vocabularyName: string;
```

- *Type:* string

---

##### `vocabularyNames`<sup>Required</sup> <a name="vocabularyNames" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNames"></a>

```typescript
public readonly vocabularyNames: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resetInsightsTarget">resetInsightsTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInsightsTarget` <a name="resetInsightsTarget" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resetInsightsTarget"></a>

```typescript
public resetInsightsTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.insightsTargetInput">insightsTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.insightsTarget">insightsTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `insightsTargetInput`<sup>Optional</sup> <a name="insightsTargetInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.insightsTargetInput"></a>

```typescript
public readonly insightsTargetInput: string;
```

- *Type:* string

---

##### `insightsTarget`<sup>Required</sup> <a name="insightsTarget" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.insightsTarget"></a>

```typescript
public readonly insightsTarget: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationElementsList <a name="ChimeMediaInsightsPipelineConfigurationElementsList" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.get"></a>

```typescript
public get(index: number): ChimeMediaInsightsPipelineConfigurationElementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeMediaInsightsPipelineConfigurationElements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>[]

---


### ChimeMediaInsightsPipelineConfigurationElementsOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration">putAmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration">putAmazonTranscribeProcessorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putKinesisDataStreamSinkConfiguration">putKinesisDataStreamSinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putS3RecordingSinkConfiguration">putS3RecordingSinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetAmazonTranscribeCallAnalyticsProcessorConfiguration">resetAmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetAmazonTranscribeProcessorConfiguration">resetAmazonTranscribeProcessorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetKinesisDataStreamSinkConfiguration">resetKinesisDataStreamSinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetS3RecordingSinkConfiguration">resetS3RecordingSinkConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmazonTranscribeCallAnalyticsProcessorConfiguration` <a name="putAmazonTranscribeCallAnalyticsProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration"></a>

```typescript
public putAmazonTranscribeCallAnalyticsProcessorConfiguration(value: ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a>

---

##### `putAmazonTranscribeProcessorConfiguration` <a name="putAmazonTranscribeProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration"></a>

```typescript
public putAmazonTranscribeProcessorConfiguration(value: ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a>

---

##### `putKinesisDataStreamSinkConfiguration` <a name="putKinesisDataStreamSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putKinesisDataStreamSinkConfiguration"></a>

```typescript
public putKinesisDataStreamSinkConfiguration(value: ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putKinesisDataStreamSinkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a>

---

##### `putS3RecordingSinkConfiguration` <a name="putS3RecordingSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putS3RecordingSinkConfiguration"></a>

```typescript
public putS3RecordingSinkConfiguration(value: ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putS3RecordingSinkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a>

---

##### `resetAmazonTranscribeCallAnalyticsProcessorConfiguration` <a name="resetAmazonTranscribeCallAnalyticsProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetAmazonTranscribeCallAnalyticsProcessorConfiguration"></a>

```typescript
public resetAmazonTranscribeCallAnalyticsProcessorConfiguration(): void
```

##### `resetAmazonTranscribeProcessorConfiguration` <a name="resetAmazonTranscribeProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetAmazonTranscribeProcessorConfiguration"></a>

```typescript
public resetAmazonTranscribeProcessorConfiguration(): void
```

##### `resetKinesisDataStreamSinkConfiguration` <a name="resetKinesisDataStreamSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetKinesisDataStreamSinkConfiguration"></a>

```typescript
public resetKinesisDataStreamSinkConfiguration(): void
```

##### `resetS3RecordingSinkConfiguration` <a name="resetS3RecordingSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetS3RecordingSinkConfiguration"></a>

```typescript
public resetS3RecordingSinkConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeCallAnalyticsProcessorConfiguration">amazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeProcessorConfiguration">amazonTranscribeProcessorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.kinesisDataStreamSinkConfiguration">kinesisDataStreamSinkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.s3RecordingSinkConfiguration">s3RecordingSinkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeCallAnalyticsProcessorConfigurationInput">amazonTranscribeCallAnalyticsProcessorConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeProcessorConfigurationInput">amazonTranscribeProcessorConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.kinesisDataStreamSinkConfigurationInput">kinesisDataStreamSinkConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.s3RecordingSinkConfigurationInput">s3RecordingSinkConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amazonTranscribeCallAnalyticsProcessorConfiguration`<sup>Required</sup> <a name="amazonTranscribeCallAnalyticsProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeCallAnalyticsProcessorConfiguration"></a>

```typescript
public readonly amazonTranscribeCallAnalyticsProcessorConfiguration: ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference</a>

---

##### `amazonTranscribeProcessorConfiguration`<sup>Required</sup> <a name="amazonTranscribeProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeProcessorConfiguration"></a>

```typescript
public readonly amazonTranscribeProcessorConfiguration: ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference</a>

---

##### `kinesisDataStreamSinkConfiguration`<sup>Required</sup> <a name="kinesisDataStreamSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.kinesisDataStreamSinkConfiguration"></a>

```typescript
public readonly kinesisDataStreamSinkConfiguration: ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference</a>

---

##### `s3RecordingSinkConfiguration`<sup>Required</sup> <a name="s3RecordingSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.s3RecordingSinkConfiguration"></a>

```typescript
public readonly s3RecordingSinkConfiguration: ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference</a>

---

##### `amazonTranscribeCallAnalyticsProcessorConfigurationInput`<sup>Optional</sup> <a name="amazonTranscribeCallAnalyticsProcessorConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeCallAnalyticsProcessorConfigurationInput"></a>

```typescript
public readonly amazonTranscribeCallAnalyticsProcessorConfigurationInput: IResolvable | ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a>

---

##### `amazonTranscribeProcessorConfigurationInput`<sup>Optional</sup> <a name="amazonTranscribeProcessorConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeProcessorConfigurationInput"></a>

```typescript
public readonly amazonTranscribeProcessorConfigurationInput: IResolvable | ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a>

---

##### `kinesisDataStreamSinkConfigurationInput`<sup>Optional</sup> <a name="kinesisDataStreamSinkConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.kinesisDataStreamSinkConfigurationInput"></a>

```typescript
public readonly kinesisDataStreamSinkConfigurationInput: IResolvable | ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a>

---

##### `s3RecordingSinkConfigurationInput`<sup>Optional</sup> <a name="s3RecordingSinkConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.s3RecordingSinkConfigurationInput"></a>

```typescript
public readonly s3RecordingSinkConfigurationInput: IResolvable | ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeMediaInsightsPipelineConfigurationElements;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>

---


### ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resetRecordingFileFormat">resetRecordingFileFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetRecordingFileFormat` <a name="resetRecordingFileFormat" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resetRecordingFileFormat"></a>

```typescript
public resetRecordingFileFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.recordingFileFormatInput">recordingFileFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.recordingFileFormat">recordingFileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `recordingFileFormatInput`<sup>Optional</sup> <a name="recordingFileFormatInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.recordingFileFormatInput"></a>

```typescript
public readonly recordingFileFormatInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `recordingFileFormat`<sup>Required</sup> <a name="recordingFileFormat" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.recordingFileFormat"></a>

```typescript
public readonly recordingFileFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>[]

---

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resetRules"></a>

```typescript
public resetRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.rules"></a>

```typescript
public readonly rules: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>[]

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resetRuleName"></a>

```typescript
public resetRuleName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetKeywords">resetKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetNegate">resetNegate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeywords` <a name="resetKeywords" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetKeywords"></a>

```typescript
public resetKeywords(): void
```

##### `resetNegate` <a name="resetNegate" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetNegate"></a>

```typescript
public resetNegate(): void
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetRuleName"></a>

```typescript
public resetRuleName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.keywordsInput">keywordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.negateInput">negateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.keywords">keywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.negate">negate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keywordsInput`<sup>Optional</sup> <a name="keywordsInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.keywordsInput"></a>

```typescript
public readonly keywordsInput: string[];
```

- *Type:* string[]

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.negateInput"></a>

```typescript
public readonly negateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `keywords`<sup>Required</sup> <a name="keywords" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.get"></a>

```typescript
public get(index: number): ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>[]

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putIssueDetectionConfiguration">putIssueDetectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putKeywordMatchConfiguration">putKeywordMatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putSentimentConfiguration">putSentimentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetIssueDetectionConfiguration">resetIssueDetectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetKeywordMatchConfiguration">resetKeywordMatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetSentimentConfiguration">resetSentimentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIssueDetectionConfiguration` <a name="putIssueDetectionConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putIssueDetectionConfiguration"></a>

```typescript
public putIssueDetectionConfiguration(value: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putIssueDetectionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a>

---

##### `putKeywordMatchConfiguration` <a name="putKeywordMatchConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putKeywordMatchConfiguration"></a>

```typescript
public putKeywordMatchConfiguration(value: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putKeywordMatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a>

---

##### `putSentimentConfiguration` <a name="putSentimentConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putSentimentConfiguration"></a>

```typescript
public putSentimentConfiguration(value: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putSentimentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a>

---

##### `resetIssueDetectionConfiguration` <a name="resetIssueDetectionConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetIssueDetectionConfiguration"></a>

```typescript
public resetIssueDetectionConfiguration(): void
```

##### `resetKeywordMatchConfiguration` <a name="resetKeywordMatchConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetKeywordMatchConfiguration"></a>

```typescript
public resetKeywordMatchConfiguration(): void
```

##### `resetSentimentConfiguration` <a name="resetSentimentConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetSentimentConfiguration"></a>

```typescript
public resetSentimentConfiguration(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.issueDetectionConfiguration">issueDetectionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.keywordMatchConfiguration">keywordMatchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.sentimentConfiguration">sentimentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.issueDetectionConfigurationInput">issueDetectionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.keywordMatchConfigurationInput">keywordMatchConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.sentimentConfigurationInput">sentimentConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `issueDetectionConfiguration`<sup>Required</sup> <a name="issueDetectionConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.issueDetectionConfiguration"></a>

```typescript
public readonly issueDetectionConfiguration: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference</a>

---

##### `keywordMatchConfiguration`<sup>Required</sup> <a name="keywordMatchConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.keywordMatchConfiguration"></a>

```typescript
public readonly keywordMatchConfiguration: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference</a>

---

##### `sentimentConfiguration`<sup>Required</sup> <a name="sentimentConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.sentimentConfiguration"></a>

```typescript
public readonly sentimentConfiguration: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference</a>

---

##### `issueDetectionConfigurationInput`<sup>Optional</sup> <a name="issueDetectionConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.issueDetectionConfigurationInput"></a>

```typescript
public readonly issueDetectionConfigurationInput: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a>

---

##### `keywordMatchConfigurationInput`<sup>Optional</sup> <a name="keywordMatchConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.keywordMatchConfigurationInput"></a>

```typescript
public readonly keywordMatchConfigurationInput: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a>

---

##### `sentimentConfigurationInput`<sup>Optional</sup> <a name="sentimentConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.sentimentConfigurationInput"></a>

```typescript
public readonly sentimentConfigurationInput: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetSentimentType">resetSentimentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetTimePeriod">resetTimePeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetRuleName"></a>

```typescript
public resetRuleName(): void
```

##### `resetSentimentType` <a name="resetSentimentType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetSentimentType"></a>

```typescript
public resetSentimentType(): void
```

##### `resetTimePeriod` <a name="resetTimePeriod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetTimePeriod"></a>

```typescript
public resetTimePeriod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.sentimentTypeInput">sentimentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.timePeriodInput">timePeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.sentimentType">sentimentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.timePeriod">timePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `sentimentTypeInput`<sup>Optional</sup> <a name="sentimentTypeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.sentimentTypeInput"></a>

```typescript
public readonly sentimentTypeInput: string;
```

- *Type:* string

---

##### `timePeriodInput`<sup>Optional</sup> <a name="timePeriodInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.timePeriodInput"></a>

```typescript
public readonly timePeriodInput: number;
```

- *Type:* number

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `sentimentType`<sup>Required</sup> <a name="sentimentType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.sentimentType"></a>

```typescript
public readonly sentimentType: string;
```

- *Type:* string

---

##### `timePeriod`<sup>Required</sup> <a name="timePeriod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.timePeriod"></a>

```typescript
public readonly timePeriod: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationTagsList <a name="ChimeMediaInsightsPipelineConfigurationTagsList" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.get"></a>

```typescript
public get(index: number): ChimeMediaInsightsPipelineConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeMediaInsightsPipelineConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>[]

---


### ChimeMediaInsightsPipelineConfigurationTagsOutputReference <a name="ChimeMediaInsightsPipelineConfigurationTagsOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { chimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeMediaInsightsPipelineConfigurationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>

---



