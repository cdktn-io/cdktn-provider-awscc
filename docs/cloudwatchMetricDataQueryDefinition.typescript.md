# `cloudwatchMetricDataQueryDefinition` Submodule <a name="`cloudwatchMetricDataQueryDefinition` Submodule" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchMetricDataQueryDefinition <a name="CloudwatchMetricDataQueryDefinition" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition awscc_cloudwatch_metric_data_query_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer"></a>

```typescript
import { cloudwatchMetricDataQueryDefinition } from '@cdktn/provider-awscc'

new cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition(scope: Construct, id: string, config: CloudwatchMetricDataQueryDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig">CloudwatchMetricDataQueryDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig">CloudwatchMetricDataQueryDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.putTags"></a>

```typescript
public putTags(value: IResolvable | CloudwatchMetricDataQueryDefinitionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchMetricDataQueryDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isConstruct"></a>

```typescript
import { cloudwatchMetricDataQueryDefinition } from '@cdktn/provider-awscc'

cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isTerraformElement"></a>

```typescript
import { cloudwatchMetricDataQueryDefinition } from '@cdktn/provider-awscc'

cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isTerraformResource"></a>

```typescript
import { cloudwatchMetricDataQueryDefinition } from '@cdktn/provider-awscc'

cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.generateConfigForImport"></a>

```typescript
import { cloudwatchMetricDataQueryDefinition } from '@cdktn/provider-awscc'

cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudwatchMetricDataQueryDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchMetricDataQueryDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchMetricDataQueryDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchMetricDataQueryDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.metricDataQueryDefinitionId">metricDataQueryDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList">CloudwatchMetricDataQueryDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricDataQueryDefinitionId`<sup>Required</sup> <a name="metricDataQueryDefinitionId" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.metricDataQueryDefinitionId"></a>

```typescript
public readonly metricDataQueryDefinitionId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.tags"></a>

```typescript
public readonly tags: CloudwatchMetricDataQueryDefinitionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList">CloudwatchMetricDataQueryDefinitionTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CloudwatchMetricDataQueryDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchMetricDataQueryDefinitionConfig <a name="CloudwatchMetricDataQueryDefinitionConfig" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.Initializer"></a>

```typescript
import { cloudwatchMetricDataQueryDefinition } from '@cdktn/provider-awscc'

const cloudwatchMetricDataQueryDefinitionConfig: cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.expression">expression</a></code> | <code>string</code> | The metric query. It is stored as-is and is not validated. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.path">path</a></code> | <code>string</code> | The name of the metric data query definition. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.type">type</a></code> | <code>string</code> | The query language of Expression. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>[]</code> | An array of key-value pairs to apply to the metric data query definition. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

The metric query. It is stored as-is and is not validated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#expression CloudwatchMetricDataQueryDefinition#expression}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The name of the metric data query definition.

Use '/' to organize definitions into folders. Must be unique in the account and Region. Changing it renames the definition in place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#path CloudwatchMetricDataQueryDefinition#path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The query language of Expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#type CloudwatchMetricDataQueryDefinition#type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CloudwatchMetricDataQueryDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>[]

An array of key-value pairs to apply to the metric data query definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#tags CloudwatchMetricDataQueryDefinition#tags}

---

### CloudwatchMetricDataQueryDefinitionTags <a name="CloudwatchMetricDataQueryDefinitionTags" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags.Initializer"></a>

```typescript
import { cloudwatchMetricDataQueryDefinition } from '@cdktn/provider-awscc'

const cloudwatchMetricDataQueryDefinitionTags: cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#key CloudwatchMetricDataQueryDefinition#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#value CloudwatchMetricDataQueryDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchMetricDataQueryDefinitionTagsList <a name="CloudwatchMetricDataQueryDefinitionTagsList" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.Initializer"></a>

```typescript
import { cloudwatchMetricDataQueryDefinition } from '@cdktn/provider-awscc'

new cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.get"></a>

```typescript
public get(index: number): CloudwatchMetricDataQueryDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricDataQueryDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>[]

---


### CloudwatchMetricDataQueryDefinitionTagsOutputReference <a name="CloudwatchMetricDataQueryDefinitionTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer"></a>

```typescript
import { cloudwatchMetricDataQueryDefinition } from '@cdktn/provider-awscc'

new cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricDataQueryDefinitionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>

---



