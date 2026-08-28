# `personalizeMetricAttribution` Submodule <a name="`personalizeMetricAttribution` Submodule" id="@cdktn/provider-awscc.personalizeMetricAttribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersonalizeMetricAttribution <a name="PersonalizeMetricAttribution" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution awscc_personalize_metric_attribution}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer"></a>

```typescript
import { personalizeMetricAttribution } from '@cdktn/provider-awscc'

new personalizeMetricAttribution.PersonalizeMetricAttribution(scope: Construct, id: string, config: PersonalizeMetricAttributionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig">PersonalizeMetricAttributionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig">PersonalizeMetricAttributionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetrics">putMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetricsOutputConfig">putMetricsOutputConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetrics` <a name="putMetrics" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetrics"></a>

```typescript
public putMetrics(value: IResolvable | PersonalizeMetricAttributionMetrics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetrics.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>[]

---

##### `putMetricsOutputConfig` <a name="putMetricsOutputConfig" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetricsOutputConfig"></a>

```typescript
public putMetricsOutputConfig(value: PersonalizeMetricAttributionMetricsOutputConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetricsOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PersonalizeMetricAttribution resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isConstruct"></a>

```typescript
import { personalizeMetricAttribution } from '@cdktn/provider-awscc'

personalizeMetricAttribution.PersonalizeMetricAttribution.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformElement"></a>

```typescript
import { personalizeMetricAttribution } from '@cdktn/provider-awscc'

personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformResource"></a>

```typescript
import { personalizeMetricAttribution } from '@cdktn/provider-awscc'

personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport"></a>

```typescript
import { personalizeMetricAttribution } from '@cdktn/provider-awscc'

personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PersonalizeMetricAttribution resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PersonalizeMetricAttribution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PersonalizeMetricAttribution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PersonalizeMetricAttribution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricAttributionArn">metricAttributionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList">PersonalizeMetricAttributionMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsOutputConfig">metricsOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference">PersonalizeMetricAttributionMetricsOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.datasetGroupArnInput">datasetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsInput">metricsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsOutputConfigInput">metricsOutputConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.datasetGroupArn">datasetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricAttributionArn`<sup>Required</sup> <a name="metricAttributionArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricAttributionArn"></a>

```typescript
public readonly metricAttributionArn: string;
```

- *Type:* string

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metrics"></a>

```typescript
public readonly metrics: PersonalizeMetricAttributionMetricsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList">PersonalizeMetricAttributionMetricsList</a>

---

##### `metricsOutputConfig`<sup>Required</sup> <a name="metricsOutputConfig" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsOutputConfig"></a>

```typescript
public readonly metricsOutputConfig: PersonalizeMetricAttributionMetricsOutputConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference">PersonalizeMetricAttributionMetricsOutputConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `datasetGroupArnInput`<sup>Optional</sup> <a name="datasetGroupArnInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.datasetGroupArnInput"></a>

```typescript
public readonly datasetGroupArnInput: string;
```

- *Type:* string

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsInput"></a>

```typescript
public readonly metricsInput: IResolvable | PersonalizeMetricAttributionMetrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>[]

---

##### `metricsOutputConfigInput`<sup>Optional</sup> <a name="metricsOutputConfigInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsOutputConfigInput"></a>

```typescript
public readonly metricsOutputConfigInput: IResolvable | PersonalizeMetricAttributionMetricsOutputConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `datasetGroupArn`<sup>Required</sup> <a name="datasetGroupArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.datasetGroupArn"></a>

```typescript
public readonly datasetGroupArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PersonalizeMetricAttributionConfig <a name="PersonalizeMetricAttributionConfig" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.Initializer"></a>

```typescript
import { personalizeMetricAttribution } from '@cdktn/provider-awscc'

const personalizeMetricAttributionConfig: personalizeMetricAttribution.PersonalizeMetricAttributionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.datasetGroupArn">datasetGroupArn</a></code> | <code>string</code> | The ARN of the destination dataset group. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.metrics">metrics</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>[]</code> | A list of metric attributes for the metric attribution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.metricsOutputConfig">metricsOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a></code> | The output configuration details for the metric attribution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.name">name</a></code> | <code>string</code> | The name of the metric attribution. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `datasetGroupArn`<sup>Required</sup> <a name="datasetGroupArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.datasetGroupArn"></a>

```typescript
public readonly datasetGroupArn: string;
```

- *Type:* string

The ARN of the destination dataset group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#dataset_group_arn PersonalizeMetricAttribution#dataset_group_arn}

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.metrics"></a>

```typescript
public readonly metrics: IResolvable | PersonalizeMetricAttributionMetrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>[]

A list of metric attributes for the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#metrics PersonalizeMetricAttribution#metrics}

---

##### `metricsOutputConfig`<sup>Required</sup> <a name="metricsOutputConfig" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.metricsOutputConfig"></a>

```typescript
public readonly metricsOutputConfig: PersonalizeMetricAttributionMetricsOutputConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a>

The output configuration details for the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#metrics_output_config PersonalizeMetricAttribution#metrics_output_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#name PersonalizeMetricAttribution#name}

---

### PersonalizeMetricAttributionMetrics <a name="PersonalizeMetricAttributionMetrics" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.Initializer"></a>

```typescript
import { personalizeMetricAttribution } from '@cdktn/provider-awscc'

const personalizeMetricAttributionMetrics: personalizeMetricAttribution.PersonalizeMetricAttributionMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.eventType">eventType</a></code> | <code>string</code> | The metric's event type. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.expression">expression</a></code> | <code>string</code> | The attribute's expression. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.metricName">metricName</a></code> | <code>string</code> | The metric's name. |

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

The metric's event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#event_type PersonalizeMetricAttribution#event_type}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

The attribute's expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#expression PersonalizeMetricAttribution#expression}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

The metric's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#metric_name PersonalizeMetricAttribution#metric_name}

---

### PersonalizeMetricAttributionMetricsOutputConfig <a name="PersonalizeMetricAttributionMetricsOutputConfig" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig.Initializer"></a>

```typescript
import { personalizeMetricAttribution } from '@cdktn/provider-awscc'

const personalizeMetricAttributionMetricsOutputConfig: personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the IAM role for the metric attribution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig.property.s3DataDestination">s3DataDestination</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a></code> | The configuration details of an Amazon S3 output bucket. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the IAM role for the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#role_arn PersonalizeMetricAttribution#role_arn}

---

##### `s3DataDestination`<sup>Optional</sup> <a name="s3DataDestination" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig.property.s3DataDestination"></a>

```typescript
public readonly s3DataDestination: PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a>

The configuration details of an Amazon S3 output bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#s3_data_destination PersonalizeMetricAttribution#s3_data_destination}

---

### PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination <a name="PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.Initializer"></a>

```typescript
import { personalizeMetricAttribution } from '@cdktn/provider-awscc'

const personalizeMetricAttributionMetricsOutputConfigS3DataDestination: personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | The ARN of the KMS key. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.property.path">path</a></code> | <code>string</code> | The file path of the Amazon S3 bucket. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

The ARN of the KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#kms_key_arn PersonalizeMetricAttribution#kms_key_arn}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path of the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#path PersonalizeMetricAttribution#path}

---

## Classes <a name="Classes" id="Classes"></a>

### PersonalizeMetricAttributionMetricsList <a name="PersonalizeMetricAttributionMetricsList" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer"></a>

```typescript
import { personalizeMetricAttribution } from '@cdktn/provider-awscc'

new personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.get"></a>

```typescript
public get(index: number): PersonalizeMetricAttributionMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersonalizeMetricAttributionMetrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>[]

---


### PersonalizeMetricAttributionMetricsOutputConfigOutputReference <a name="PersonalizeMetricAttributionMetricsOutputConfigOutputReference" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer"></a>

```typescript
import { personalizeMetricAttribution } from '@cdktn/provider-awscc'

new personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.putS3DataDestination">putS3DataDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.resetS3DataDestination">resetS3DataDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3DataDestination` <a name="putS3DataDestination" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.putS3DataDestination"></a>

```typescript
public putS3DataDestination(value: PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.putS3DataDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a>

---

##### `resetS3DataDestination` <a name="resetS3DataDestination" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.resetS3DataDestination"></a>

```typescript
public resetS3DataDestination(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.s3DataDestination">s3DataDestination</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.s3DataDestinationInput">s3DataDestinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3DataDestination`<sup>Required</sup> <a name="s3DataDestination" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.s3DataDestination"></a>

```typescript
public readonly s3DataDestination: PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `s3DataDestinationInput`<sup>Optional</sup> <a name="s3DataDestinationInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.s3DataDestinationInput"></a>

```typescript
public readonly s3DataDestinationInput: IResolvable | PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersonalizeMetricAttributionMetricsOutputConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a>

---


### PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference <a name="PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer"></a>

```typescript
import { personalizeMetricAttribution } from '@cdktn/provider-awscc'

new personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a>

---


### PersonalizeMetricAttributionMetricsOutputReference <a name="PersonalizeMetricAttributionMetricsOutputReference" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer"></a>

```typescript
import { personalizeMetricAttribution } from '@cdktn/provider-awscc'

new personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.eventTypeInput"></a>

```typescript
public readonly eventTypeInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersonalizeMetricAttributionMetrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>

---



