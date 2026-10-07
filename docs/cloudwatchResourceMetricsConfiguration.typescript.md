# `cloudwatchResourceMetricsConfiguration` Submodule <a name="`cloudwatchResourceMetricsConfiguration` Submodule" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchResourceMetricsConfiguration <a name="CloudwatchResourceMetricsConfiguration" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_resource_metrics_configuration awscc_cloudwatch_resource_metrics_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer"></a>

```typescript
import { cloudwatchResourceMetricsConfiguration } from '@cdktn/provider-awscc'

new cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration(scope: Construct, id: string, config: CloudwatchResourceMetricsConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig">CloudwatchResourceMetricsConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig">CloudwatchResourceMetricsConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.putMetricSelections">putMetricSelections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.resetMetricSelections">resetMetricSelections</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetricSelections` <a name="putMetricSelections" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.putMetricSelections"></a>

```typescript
public putMetricSelections(value: IResolvable | CloudwatchResourceMetricsConfigurationMetricSelections[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.putMetricSelections.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections">CloudwatchResourceMetricsConfigurationMetricSelections</a>[]

---

##### `resetMetricSelections` <a name="resetMetricSelections" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.resetMetricSelections"></a>

```typescript
public resetMetricSelections(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchResourceMetricsConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isConstruct"></a>

```typescript
import { cloudwatchResourceMetricsConfiguration } from '@cdktn/provider-awscc'

cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformElement"></a>

```typescript
import { cloudwatchResourceMetricsConfiguration } from '@cdktn/provider-awscc'

cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformResource"></a>

```typescript
import { cloudwatchResourceMetricsConfiguration } from '@cdktn/provider-awscc'

cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport"></a>

```typescript
import { cloudwatchResourceMetricsConfiguration } from '@cdktn/provider-awscc'

cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudwatchResourceMetricsConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchResourceMetricsConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchResourceMetricsConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_resource_metrics_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchResourceMetricsConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.metricSelections">metricSelections</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList">CloudwatchResourceMetricsConfigurationMetricSelectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.metricSelectionsInput">metricSelectionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections">CloudwatchResourceMetricsConfigurationMetricSelections</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricSelections`<sup>Required</sup> <a name="metricSelections" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.metricSelections"></a>

```typescript
public readonly metricSelections: CloudwatchResourceMetricsConfigurationMetricSelectionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList">CloudwatchResourceMetricsConfigurationMetricSelectionsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `metricSelectionsInput`<sup>Optional</sup> <a name="metricSelectionsInput" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.metricSelectionsInput"></a>

```typescript
public readonly metricSelectionsInput: IResolvable | CloudwatchResourceMetricsConfigurationMetricSelections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections">CloudwatchResourceMetricsConfigurationMetricSelections</a>[]

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchResourceMetricsConfigurationConfig <a name="CloudwatchResourceMetricsConfigurationConfig" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.Initializer"></a>

```typescript
import { cloudwatchResourceMetricsConfiguration } from '@cdktn/provider-awscc'

const cloudwatchResourceMetricsConfigurationConfig: cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.resourceArn">resourceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the resource for which the detailed monitoring metrics configuration is managed. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.metricSelections">metricSelections</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections">CloudwatchResourceMetricsConfigurationMetricSelections</a>[]</code> | The metric selections that define which metrics are enabled for detailed monitoring on the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the resource for which the detailed monitoring metrics configuration is managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_resource_metrics_configuration#resource_arn CloudwatchResourceMetricsConfiguration#resource_arn}

---

##### `metricSelections`<sup>Optional</sup> <a name="metricSelections" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.metricSelections"></a>

```typescript
public readonly metricSelections: IResolvable | CloudwatchResourceMetricsConfigurationMetricSelections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections">CloudwatchResourceMetricsConfigurationMetricSelections</a>[]

The metric selections that define which metrics are enabled for detailed monitoring on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_resource_metrics_configuration#metric_selections CloudwatchResourceMetricsConfiguration#metric_selections}

---

### CloudwatchResourceMetricsConfigurationMetricSelections <a name="CloudwatchResourceMetricsConfigurationMetricSelections" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections.Initializer"></a>

```typescript
import { cloudwatchResourceMetricsConfiguration } from '@cdktn/provider-awscc'

const cloudwatchResourceMetricsConfigurationMetricSelections: cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections.property.includeMetrics">includeMetrics</a></code> | <code>string[]</code> | The list of metric names to include in detailed monitoring for the resource. |

---

##### `includeMetrics`<sup>Optional</sup> <a name="includeMetrics" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections.property.includeMetrics"></a>

```typescript
public readonly includeMetrics: string[];
```

- *Type:* string[]

The list of metric names to include in detailed monitoring for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_resource_metrics_configuration#include_metrics CloudwatchResourceMetricsConfiguration#include_metrics}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchResourceMetricsConfigurationMetricSelectionsList <a name="CloudwatchResourceMetricsConfigurationMetricSelectionsList" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.Initializer"></a>

```typescript
import { cloudwatchResourceMetricsConfiguration } from '@cdktn/provider-awscc'

new cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.get"></a>

```typescript
public get(index: number): CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections">CloudwatchResourceMetricsConfigurationMetricSelections</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchResourceMetricsConfigurationMetricSelections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections">CloudwatchResourceMetricsConfigurationMetricSelections</a>[]

---


### CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference <a name="CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer"></a>

```typescript
import { cloudwatchResourceMetricsConfiguration } from '@cdktn/provider-awscc'

new cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.resetIncludeMetrics">resetIncludeMetrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeMetrics` <a name="resetIncludeMetrics" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.resetIncludeMetrics"></a>

```typescript
public resetIncludeMetrics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.includeMetricsInput">includeMetricsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.includeMetrics">includeMetrics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections">CloudwatchResourceMetricsConfigurationMetricSelections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeMetricsInput`<sup>Optional</sup> <a name="includeMetricsInput" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.includeMetricsInput"></a>

```typescript
public readonly includeMetricsInput: string[];
```

- *Type:* string[]

---

##### `includeMetrics`<sup>Required</sup> <a name="includeMetrics" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.includeMetrics"></a>

```typescript
public readonly includeMetrics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchResourceMetricsConfigurationMetricSelections;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections">CloudwatchResourceMetricsConfigurationMetricSelections</a>

---



