# `ec2NetworkPerformanceMetricSubscription` Submodule <a name="`ec2NetworkPerformanceMetricSubscription` Submodule" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2NetworkPerformanceMetricSubscription <a name="Ec2NetworkPerformanceMetricSubscription" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_performance_metric_subscription awscc_ec2_network_performance_metric_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.Initializer"></a>

```typescript
import { ec2NetworkPerformanceMetricSubscription } from '@cdktn/provider-awscc'

new ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription(scope: Construct, id: string, config: Ec2NetworkPerformanceMetricSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig">Ec2NetworkPerformanceMetricSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig">Ec2NetworkPerformanceMetricSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2NetworkPerformanceMetricSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.isConstruct"></a>

```typescript
import { ec2NetworkPerformanceMetricSubscription } from '@cdktn/provider-awscc'

ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.isTerraformElement"></a>

```typescript
import { ec2NetworkPerformanceMetricSubscription } from '@cdktn/provider-awscc'

ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.isTerraformResource"></a>

```typescript
import { ec2NetworkPerformanceMetricSubscription } from '@cdktn/provider-awscc'

ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.generateConfigForImport"></a>

```typescript
import { ec2NetworkPerformanceMetricSubscription } from '@cdktn/provider-awscc'

ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2NetworkPerformanceMetricSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2NetworkPerformanceMetricSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2NetworkPerformanceMetricSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_performance_metric_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2NetworkPerformanceMetricSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.metricInput">metricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.metricInput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2NetworkPerformanceMetricSubscriptionConfig <a name="Ec2NetworkPerformanceMetricSubscriptionConfig" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.Initializer"></a>

```typescript
import { ec2NetworkPerformanceMetricSubscription } from '@cdktn/provider-awscc'

const ec2NetworkPerformanceMetricSubscriptionConfig: ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.destination">destination</a></code> | <code>string</code> | The target Region or Availability Zone for the metric to subscribe to. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.metric">metric</a></code> | <code>string</code> | The metric type to subscribe to. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.source">source</a></code> | <code>string</code> | The starting Region or Availability Zone for metric to subscribe to. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.statistic">statistic</a></code> | <code>string</code> | The statistic to subscribe to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

The target Region or Availability Zone for the metric to subscribe to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_performance_metric_subscription#destination Ec2NetworkPerformanceMetricSubscription#destination}

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

The metric type to subscribe to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_performance_metric_subscription#metric Ec2NetworkPerformanceMetricSubscription#metric}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The starting Region or Availability Zone for metric to subscribe to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_performance_metric_subscription#source Ec2NetworkPerformanceMetricSubscription#source}

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.ec2NetworkPerformanceMetricSubscription.Ec2NetworkPerformanceMetricSubscriptionConfig.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

The statistic to subscribe to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_performance_metric_subscription#statistic Ec2NetworkPerformanceMetricSubscription#statistic}

---



