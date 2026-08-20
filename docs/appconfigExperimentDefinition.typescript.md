# `appconfigExperimentDefinition` Submodule <a name="`appconfigExperimentDefinition` Submodule" id="@cdktn/provider-awscc.appconfigExperimentDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigExperimentDefinition <a name="AppconfigExperimentDefinition" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition awscc_appconfig_experiment_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer"></a>

```typescript
import { appconfigExperimentDefinition } from '@cdktn/provider-awscc'

new appconfigExperimentDefinition.AppconfigExperimentDefinition(scope: Construct, id: string, config: AppconfigExperimentDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig">AppconfigExperimentDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig">AppconfigExperimentDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putControl">putControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTreatments">putTreatments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetAudienceDescription">resetAudienceDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetHypothesis">resetHypothesis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetLaunchCriteria">resetLaunchCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putControl` <a name="putControl" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putControl"></a>

```typescript
public putControl(value: AppconfigExperimentDefinitionControl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putControl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTags"></a>

```typescript
public putTags(value: IResolvable | AppconfigExperimentDefinitionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>[]

---

##### `putTreatments` <a name="putTreatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTreatments"></a>

```typescript
public putTreatments(value: IResolvable | AppconfigExperimentDefinitionTreatments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTreatments.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>[]

---

##### `resetAudienceDescription` <a name="resetAudienceDescription" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetAudienceDescription"></a>

```typescript
public resetAudienceDescription(): void
```

##### `resetHypothesis` <a name="resetHypothesis" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetHypothesis"></a>

```typescript
public resetHypothesis(): void
```

##### `resetLaunchCriteria` <a name="resetLaunchCriteria" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetLaunchCriteria"></a>

```typescript
public resetLaunchCriteria(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppconfigExperimentDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isConstruct"></a>

```typescript
import { appconfigExperimentDefinition } from '@cdktn/provider-awscc'

appconfigExperimentDefinition.AppconfigExperimentDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformElement"></a>

```typescript
import { appconfigExperimentDefinition } from '@cdktn/provider-awscc'

appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformResource"></a>

```typescript
import { appconfigExperimentDefinition } from '@cdktn/provider-awscc'

appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport"></a>

```typescript
import { appconfigExperimentDefinition } from '@cdktn/provider-awscc'

appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppconfigExperimentDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppconfigExperimentDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppconfigExperimentDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigExperimentDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.control">control</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference">AppconfigExperimentDefinitionControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.experimentDefinitionId">experimentDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList">AppconfigExperimentDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.treatments">treatments</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList">AppconfigExperimentDefinitionTreatmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationIdentifierInput">applicationIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceDescriptionInput">audienceDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceRuleInput">audienceRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.configurationProfileIdentifierInput">configurationProfileIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.controlInput">controlInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.environmentIdentifierInput">environmentIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.flagKeyInput">flagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.hypothesisInput">hypothesisInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.launchCriteriaInput">launchCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.treatmentsInput">treatmentsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationIdentifier">applicationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceDescription">audienceDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceRule">audienceRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.configurationProfileIdentifier">configurationProfileIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.environmentIdentifier">environmentIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.flagKey">flagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.hypothesis">hypothesis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.launchCriteria">launchCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `control`<sup>Required</sup> <a name="control" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.control"></a>

```typescript
public readonly control: AppconfigExperimentDefinitionControlOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference">AppconfigExperimentDefinitionControlOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `experimentDefinitionId`<sup>Required</sup> <a name="experimentDefinitionId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.experimentDefinitionId"></a>

```typescript
public readonly experimentDefinitionId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tags"></a>

```typescript
public readonly tags: AppconfigExperimentDefinitionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList">AppconfigExperimentDefinitionTagsList</a>

---

##### `treatments`<sup>Required</sup> <a name="treatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.treatments"></a>

```typescript
public readonly treatments: AppconfigExperimentDefinitionTreatmentsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList">AppconfigExperimentDefinitionTreatmentsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `applicationIdentifierInput`<sup>Optional</sup> <a name="applicationIdentifierInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationIdentifierInput"></a>

```typescript
public readonly applicationIdentifierInput: string;
```

- *Type:* string

---

##### `audienceDescriptionInput`<sup>Optional</sup> <a name="audienceDescriptionInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceDescriptionInput"></a>

```typescript
public readonly audienceDescriptionInput: string;
```

- *Type:* string

---

##### `audienceRuleInput`<sup>Optional</sup> <a name="audienceRuleInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceRuleInput"></a>

```typescript
public readonly audienceRuleInput: string;
```

- *Type:* string

---

##### `configurationProfileIdentifierInput`<sup>Optional</sup> <a name="configurationProfileIdentifierInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.configurationProfileIdentifierInput"></a>

```typescript
public readonly configurationProfileIdentifierInput: string;
```

- *Type:* string

---

##### `controlInput`<sup>Optional</sup> <a name="controlInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.controlInput"></a>

```typescript
public readonly controlInput: IResolvable | AppconfigExperimentDefinitionControl;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a>

---

##### `environmentIdentifierInput`<sup>Optional</sup> <a name="environmentIdentifierInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.environmentIdentifierInput"></a>

```typescript
public readonly environmentIdentifierInput: string;
```

- *Type:* string

---

##### `flagKeyInput`<sup>Optional</sup> <a name="flagKeyInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.flagKeyInput"></a>

```typescript
public readonly flagKeyInput: string;
```

- *Type:* string

---

##### `hypothesisInput`<sup>Optional</sup> <a name="hypothesisInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.hypothesisInput"></a>

```typescript
public readonly hypothesisInput: string;
```

- *Type:* string

---

##### `launchCriteriaInput`<sup>Optional</sup> <a name="launchCriteriaInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.launchCriteriaInput"></a>

```typescript
public readonly launchCriteriaInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AppconfigExperimentDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>[]

---

##### `treatmentsInput`<sup>Optional</sup> <a name="treatmentsInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.treatmentsInput"></a>

```typescript
public readonly treatmentsInput: IResolvable | AppconfigExperimentDefinitionTreatments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>[]

---

##### `applicationIdentifier`<sup>Required</sup> <a name="applicationIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationIdentifier"></a>

```typescript
public readonly applicationIdentifier: string;
```

- *Type:* string

---

##### `audienceDescription`<sup>Required</sup> <a name="audienceDescription" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceDescription"></a>

```typescript
public readonly audienceDescription: string;
```

- *Type:* string

---

##### `audienceRule`<sup>Required</sup> <a name="audienceRule" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceRule"></a>

```typescript
public readonly audienceRule: string;
```

- *Type:* string

---

##### `configurationProfileIdentifier`<sup>Required</sup> <a name="configurationProfileIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.configurationProfileIdentifier"></a>

```typescript
public readonly configurationProfileIdentifier: string;
```

- *Type:* string

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.environmentIdentifier"></a>

```typescript
public readonly environmentIdentifier: string;
```

- *Type:* string

---

##### `flagKey`<sup>Required</sup> <a name="flagKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.flagKey"></a>

```typescript
public readonly flagKey: string;
```

- *Type:* string

---

##### `hypothesis`<sup>Required</sup> <a name="hypothesis" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.hypothesis"></a>

```typescript
public readonly hypothesis: string;
```

- *Type:* string

---

##### `launchCriteria`<sup>Required</sup> <a name="launchCriteria" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.launchCriteria"></a>

```typescript
public readonly launchCriteria: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigExperimentDefinitionConfig <a name="AppconfigExperimentDefinitionConfig" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.Initializer"></a>

```typescript
import { appconfigExperimentDefinition } from '@cdktn/provider-awscc'

const appconfigExperimentDefinitionConfig: appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.applicationIdentifier">applicationIdentifier</a></code> | <code>string</code> | The application ID, name, or ARN. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.audienceRule">audienceRule</a></code> | <code>string</code> | Rule expression defining the experiment audience. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.configurationProfileIdentifier">configurationProfileIdentifier</a></code> | <code>string</code> | The configuration profile ID, name, or ARN. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.control">control</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a></code> | The control (baseline) variant. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.environmentIdentifier">environmentIdentifier</a></code> | <code>string</code> | The environment ID, name, or ARN. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.flagKey">flagKey</a></code> | <code>string</code> | The key of the existing flag in the configuration profile to experiment on. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.name">name</a></code> | <code>string</code> | A name for the experiment definition. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.treatments">treatments</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>[]</code> | Treatment variants (1-5). |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.audienceDescription">audienceDescription</a></code> | <code>string</code> | Human-readable description of the audience. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.hypothesis">hypothesis</a></code> | <code>string</code> | The hypothesis of the experiment. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.launchCriteria">launchCriteria</a></code> | <code>string</code> | Criteria for launching the experiment. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>[]</code> | Tags to associate with the experiment definition. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationIdentifier`<sup>Required</sup> <a name="applicationIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.applicationIdentifier"></a>

```typescript
public readonly applicationIdentifier: string;
```

- *Type:* string

The application ID, name, or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#application_identifier AppconfigExperimentDefinition#application_identifier}

---

##### `audienceRule`<sup>Required</sup> <a name="audienceRule" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.audienceRule"></a>

```typescript
public readonly audienceRule: string;
```

- *Type:* string

Rule expression defining the experiment audience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#audience_rule AppconfigExperimentDefinition#audience_rule}

---

##### `configurationProfileIdentifier`<sup>Required</sup> <a name="configurationProfileIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.configurationProfileIdentifier"></a>

```typescript
public readonly configurationProfileIdentifier: string;
```

- *Type:* string

The configuration profile ID, name, or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#configuration_profile_identifier AppconfigExperimentDefinition#configuration_profile_identifier}

---

##### `control`<sup>Required</sup> <a name="control" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.control"></a>

```typescript
public readonly control: AppconfigExperimentDefinitionControl;
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a>

The control (baseline) variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#control AppconfigExperimentDefinition#control}

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.environmentIdentifier"></a>

```typescript
public readonly environmentIdentifier: string;
```

- *Type:* string

The environment ID, name, or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#environment_identifier AppconfigExperimentDefinition#environment_identifier}

---

##### `flagKey`<sup>Required</sup> <a name="flagKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.flagKey"></a>

```typescript
public readonly flagKey: string;
```

- *Type:* string

The key of the existing flag in the configuration profile to experiment on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#flag_key AppconfigExperimentDefinition#flag_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for the experiment definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#name AppconfigExperimentDefinition#name}

---

##### `treatments`<sup>Required</sup> <a name="treatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.treatments"></a>

```typescript
public readonly treatments: IResolvable | AppconfigExperimentDefinitionTreatments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>[]

Treatment variants (1-5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#treatments AppconfigExperimentDefinition#treatments}

---

##### `audienceDescription`<sup>Optional</sup> <a name="audienceDescription" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.audienceDescription"></a>

```typescript
public readonly audienceDescription: string;
```

- *Type:* string

Human-readable description of the audience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#audience_description AppconfigExperimentDefinition#audience_description}

---

##### `hypothesis`<sup>Optional</sup> <a name="hypothesis" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.hypothesis"></a>

```typescript
public readonly hypothesis: string;
```

- *Type:* string

The hypothesis of the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#hypothesis AppconfigExperimentDefinition#hypothesis}

---

##### `launchCriteria`<sup>Optional</sup> <a name="launchCriteria" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.launchCriteria"></a>

```typescript
public readonly launchCriteria: string;
```

- *Type:* string

Criteria for launching the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#launch_criteria AppconfigExperimentDefinition#launch_criteria}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AppconfigExperimentDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>[]

Tags to associate with the experiment definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#tags AppconfigExperimentDefinition#tags}

---

### AppconfigExperimentDefinitionControl <a name="AppconfigExperimentDefinitionControl" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.Initializer"></a>

```typescript
import { appconfigExperimentDefinition } from '@cdktn/provider-awscc'

const appconfigExperimentDefinitionControl: appconfigExperimentDefinition.AppconfigExperimentDefinitionControl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the flag is enabled for this variant. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.weight">weight</a></code> | <code>number</code> | Traffic weight percentage. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.attributeValues">attributeValues</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>}</code> | Map of attribute name to attribute value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the flag is enabled for this variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#enabled AppconfigExperimentDefinition#enabled}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Traffic weight percentage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#weight AppconfigExperimentDefinition#weight}

---

##### `attributeValues`<sup>Optional</sup> <a name="attributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.attributeValues"></a>

```typescript
public readonly attributeValues: IResolvable | {[ key: string ]: AppconfigExperimentDefinitionControlAttributeValues};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>}

Map of attribute name to attribute value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#attribute_values AppconfigExperimentDefinition#attribute_values}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}.

---

### AppconfigExperimentDefinitionControlAttributeValues <a name="AppconfigExperimentDefinitionControlAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.Initializer"></a>

```typescript
import { appconfigExperimentDefinition } from '@cdktn/provider-awscc'

const appconfigExperimentDefinitionControlAttributeValues: appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.booleanValue">booleanValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | A boolean value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.numberArray">numberArray</a></code> | <code>number[]</code> | An array of numeric values. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.numberValue">numberValue</a></code> | <code>number</code> | A numeric value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.stringArray">stringArray</a></code> | <code>string[]</code> | An array of string values. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.stringValue">stringValue</a></code> | <code>string</code> | A string value. |

---

##### `booleanValue`<sup>Optional</sup> <a name="booleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.booleanValue"></a>

```typescript
public readonly booleanValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#boolean_value AppconfigExperimentDefinition#boolean_value}

---

##### `numberArray`<sup>Optional</sup> <a name="numberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.numberArray"></a>

```typescript
public readonly numberArray: number[];
```

- *Type:* number[]

An array of numeric values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#number_array AppconfigExperimentDefinition#number_array}

---

##### `numberValue`<sup>Optional</sup> <a name="numberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.numberValue"></a>

```typescript
public readonly numberValue: number;
```

- *Type:* number

A numeric value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#number_value AppconfigExperimentDefinition#number_value}

---

##### `stringArray`<sup>Optional</sup> <a name="stringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.stringArray"></a>

```typescript
public readonly stringArray: string[];
```

- *Type:* string[]

An array of string values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#string_array AppconfigExperimentDefinition#string_array}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

A string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#string_value AppconfigExperimentDefinition#string_value}

---

### AppconfigExperimentDefinitionTags <a name="AppconfigExperimentDefinitionTags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.Initializer"></a>

```typescript
import { appconfigExperimentDefinition } from '@cdktn/provider-awscc'

const appconfigExperimentDefinitionTags: appconfigExperimentDefinition.AppconfigExperimentDefinitionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#key AppconfigExperimentDefinition#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#value AppconfigExperimentDefinition#value}

---

### AppconfigExperimentDefinitionTreatments <a name="AppconfigExperimentDefinitionTreatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.Initializer"></a>

```typescript
import { appconfigExperimentDefinition } from '@cdktn/provider-awscc'

const appconfigExperimentDefinitionTreatments: appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the flag is enabled for this variant. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.weight">weight</a></code> | <code>number</code> | Traffic weight percentage. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.attributeValues">attributeValues</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>}</code> | Map of attribute name to attribute value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.key">key</a></code> | <code>string</code> | The treatment key (read-only, auto-generated by service). |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the flag is enabled for this variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#enabled AppconfigExperimentDefinition#enabled}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Traffic weight percentage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#weight AppconfigExperimentDefinition#weight}

---

##### `attributeValues`<sup>Optional</sup> <a name="attributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.attributeValues"></a>

```typescript
public readonly attributeValues: IResolvable | {[ key: string ]: AppconfigExperimentDefinitionTreatmentsAttributeValues};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>}

Map of attribute name to attribute value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#attribute_values AppconfigExperimentDefinition#attribute_values}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The treatment key (read-only, auto-generated by service).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#key AppconfigExperimentDefinition#key}

---

### AppconfigExperimentDefinitionTreatmentsAttributeValues <a name="AppconfigExperimentDefinitionTreatmentsAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.Initializer"></a>

```typescript
import { appconfigExperimentDefinition } from '@cdktn/provider-awscc'

const appconfigExperimentDefinitionTreatmentsAttributeValues: appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.booleanValue">booleanValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | A boolean value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.numberArray">numberArray</a></code> | <code>number[]</code> | An array of numeric values. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.numberValue">numberValue</a></code> | <code>number</code> | A numeric value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.stringArray">stringArray</a></code> | <code>string[]</code> | An array of string values. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.stringValue">stringValue</a></code> | <code>string</code> | A string value. |

---

##### `booleanValue`<sup>Optional</sup> <a name="booleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.booleanValue"></a>

```typescript
public readonly booleanValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#boolean_value AppconfigExperimentDefinition#boolean_value}

---

##### `numberArray`<sup>Optional</sup> <a name="numberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.numberArray"></a>

```typescript
public readonly numberArray: number[];
```

- *Type:* number[]

An array of numeric values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#number_array AppconfigExperimentDefinition#number_array}

---

##### `numberValue`<sup>Optional</sup> <a name="numberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.numberValue"></a>

```typescript
public readonly numberValue: number;
```

- *Type:* number

A numeric value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#number_value AppconfigExperimentDefinition#number_value}

---

##### `stringArray`<sup>Optional</sup> <a name="stringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.stringArray"></a>

```typescript
public readonly stringArray: string[];
```

- *Type:* string[]

An array of string values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#string_array AppconfigExperimentDefinition#string_array}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

A string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_experiment_definition#string_value AppconfigExperimentDefinition#string_value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigExperimentDefinitionControlAttributeValuesMap <a name="AppconfigExperimentDefinitionControlAttributeValuesMap" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer"></a>

```typescript
import { appconfigExperimentDefinition } from '@cdktn/provider-awscc'

new appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.get"></a>

```typescript
public get(key: string): AppconfigExperimentDefinitionControlAttributeValuesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: AppconfigExperimentDefinitionControlAttributeValues};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>}

---


### AppconfigExperimentDefinitionControlAttributeValuesOutputReference <a name="AppconfigExperimentDefinitionControlAttributeValuesOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer"></a>

```typescript
import { appconfigExperimentDefinition } from '@cdktn/provider-awscc'

new appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetBooleanValue">resetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetNumberArray">resetNumberArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetNumberValue">resetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetStringArray">resetStringArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBooleanValue` <a name="resetBooleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetBooleanValue"></a>

```typescript
public resetBooleanValue(): void
```

##### `resetNumberArray` <a name="resetNumberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetNumberArray"></a>

```typescript
public resetNumberArray(): void
```

##### `resetNumberValue` <a name="resetNumberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetNumberValue"></a>

```typescript
public resetNumberValue(): void
```

##### `resetStringArray` <a name="resetStringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetStringArray"></a>

```typescript
public resetStringArray(): void
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValueInput">booleanValueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArrayInput">numberArrayInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValueInput">numberValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArrayInput">stringArrayInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValue">booleanValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArray">numberArray</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValue">numberValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArray">stringArray</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `booleanValueInput`<sup>Optional</sup> <a name="booleanValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValueInput"></a>

```typescript
public readonly booleanValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numberArrayInput`<sup>Optional</sup> <a name="numberArrayInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArrayInput"></a>

```typescript
public readonly numberArrayInput: number[];
```

- *Type:* number[]

---

##### `numberValueInput`<sup>Optional</sup> <a name="numberValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValueInput"></a>

```typescript
public readonly numberValueInput: number;
```

- *Type:* number

---

##### `stringArrayInput`<sup>Optional</sup> <a name="stringArrayInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArrayInput"></a>

```typescript
public readonly stringArrayInput: string[];
```

- *Type:* string[]

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `booleanValue`<sup>Required</sup> <a name="booleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValue"></a>

```typescript
public readonly booleanValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numberArray`<sup>Required</sup> <a name="numberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArray"></a>

```typescript
public readonly numberArray: number[];
```

- *Type:* number[]

---

##### `numberValue`<sup>Required</sup> <a name="numberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValue"></a>

```typescript
public readonly numberValue: number;
```

- *Type:* number

---

##### `stringArray`<sup>Required</sup> <a name="stringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArray"></a>

```typescript
public readonly stringArray: string[];
```

- *Type:* string[]

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppconfigExperimentDefinitionControlAttributeValues;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>

---


### AppconfigExperimentDefinitionControlOutputReference <a name="AppconfigExperimentDefinitionControlOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer"></a>

```typescript
import { appconfigExperimentDefinition } from '@cdktn/provider-awscc'

new appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.putAttributeValues">putAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resetAttributeValues">resetAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributeValues` <a name="putAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.putAttributeValues"></a>

```typescript
public putAttributeValues(value: IResolvable | {[ key: string ]: AppconfigExperimentDefinitionControlAttributeValues}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.putAttributeValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>}

---

##### `resetAttributeValues` <a name="resetAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resetAttributeValues"></a>

```typescript
public resetAttributeValues(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.attributeValues">attributeValues</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap">AppconfigExperimentDefinitionControlAttributeValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.attributeValuesInput">attributeValuesInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeValues`<sup>Required</sup> <a name="attributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.attributeValues"></a>

```typescript
public readonly attributeValues: AppconfigExperimentDefinitionControlAttributeValuesMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap">AppconfigExperimentDefinitionControlAttributeValuesMap</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `attributeValuesInput`<sup>Optional</sup> <a name="attributeValuesInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.attributeValuesInput"></a>

```typescript
public readonly attributeValuesInput: IResolvable | {[ key: string ]: AppconfigExperimentDefinitionControlAttributeValues};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppconfigExperimentDefinitionControl;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a>

---


### AppconfigExperimentDefinitionTagsList <a name="AppconfigExperimentDefinitionTagsList" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer"></a>

```typescript
import { appconfigExperimentDefinition } from '@cdktn/provider-awscc'

new appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.get"></a>

```typescript
public get(index: number): AppconfigExperimentDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppconfigExperimentDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>[]

---


### AppconfigExperimentDefinitionTagsOutputReference <a name="AppconfigExperimentDefinitionTagsOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer"></a>

```typescript
import { appconfigExperimentDefinition } from '@cdktn/provider-awscc'

new appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppconfigExperimentDefinitionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>

---


### AppconfigExperimentDefinitionTreatmentsAttributeValuesMap <a name="AppconfigExperimentDefinitionTreatmentsAttributeValuesMap" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer"></a>

```typescript
import { appconfigExperimentDefinition } from '@cdktn/provider-awscc'

new appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get"></a>

```typescript
public get(key: string): AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: AppconfigExperimentDefinitionTreatmentsAttributeValues};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>}

---


### AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference <a name="AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer"></a>

```typescript
import { appconfigExperimentDefinition } from '@cdktn/provider-awscc'

new appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetBooleanValue">resetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetNumberArray">resetNumberArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetNumberValue">resetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetStringArray">resetStringArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBooleanValue` <a name="resetBooleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetBooleanValue"></a>

```typescript
public resetBooleanValue(): void
```

##### `resetNumberArray` <a name="resetNumberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetNumberArray"></a>

```typescript
public resetNumberArray(): void
```

##### `resetNumberValue` <a name="resetNumberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetNumberValue"></a>

```typescript
public resetNumberValue(): void
```

##### `resetStringArray` <a name="resetStringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetStringArray"></a>

```typescript
public resetStringArray(): void
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValueInput">booleanValueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArrayInput">numberArrayInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValueInput">numberValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArrayInput">stringArrayInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValue">booleanValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArray">numberArray</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValue">numberValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArray">stringArray</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `booleanValueInput`<sup>Optional</sup> <a name="booleanValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValueInput"></a>

```typescript
public readonly booleanValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numberArrayInput`<sup>Optional</sup> <a name="numberArrayInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArrayInput"></a>

```typescript
public readonly numberArrayInput: number[];
```

- *Type:* number[]

---

##### `numberValueInput`<sup>Optional</sup> <a name="numberValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValueInput"></a>

```typescript
public readonly numberValueInput: number;
```

- *Type:* number

---

##### `stringArrayInput`<sup>Optional</sup> <a name="stringArrayInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArrayInput"></a>

```typescript
public readonly stringArrayInput: string[];
```

- *Type:* string[]

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `booleanValue`<sup>Required</sup> <a name="booleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValue"></a>

```typescript
public readonly booleanValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numberArray`<sup>Required</sup> <a name="numberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArray"></a>

```typescript
public readonly numberArray: number[];
```

- *Type:* number[]

---

##### `numberValue`<sup>Required</sup> <a name="numberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValue"></a>

```typescript
public readonly numberValue: number;
```

- *Type:* number

---

##### `stringArray`<sup>Required</sup> <a name="stringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArray"></a>

```typescript
public readonly stringArray: string[];
```

- *Type:* string[]

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppconfigExperimentDefinitionTreatmentsAttributeValues;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>

---


### AppconfigExperimentDefinitionTreatmentsList <a name="AppconfigExperimentDefinitionTreatmentsList" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer"></a>

```typescript
import { appconfigExperimentDefinition } from '@cdktn/provider-awscc'

new appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.get"></a>

```typescript
public get(index: number): AppconfigExperimentDefinitionTreatmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppconfigExperimentDefinitionTreatments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>[]

---


### AppconfigExperimentDefinitionTreatmentsOutputReference <a name="AppconfigExperimentDefinitionTreatmentsOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer"></a>

```typescript
import { appconfigExperimentDefinition } from '@cdktn/provider-awscc'

new appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.putAttributeValues">putAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetAttributeValues">resetAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributeValues` <a name="putAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.putAttributeValues"></a>

```typescript
public putAttributeValues(value: IResolvable | {[ key: string ]: AppconfigExperimentDefinitionTreatmentsAttributeValues}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.putAttributeValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>}

---

##### `resetAttributeValues` <a name="resetAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetAttributeValues"></a>

```typescript
public resetAttributeValues(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValues">attributeValues</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap">AppconfigExperimentDefinitionTreatmentsAttributeValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValuesInput">attributeValuesInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeValues`<sup>Required</sup> <a name="attributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValues"></a>

```typescript
public readonly attributeValues: AppconfigExperimentDefinitionTreatmentsAttributeValuesMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap">AppconfigExperimentDefinitionTreatmentsAttributeValuesMap</a>

---

##### `attributeValuesInput`<sup>Optional</sup> <a name="attributeValuesInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValuesInput"></a>

```typescript
public readonly attributeValuesInput: IResolvable | {[ key: string ]: AppconfigExperimentDefinitionTreatmentsAttributeValues};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppconfigExperimentDefinitionTreatments;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>

---



