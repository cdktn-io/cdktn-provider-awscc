# `cloudfrontMonitoringSubscription` Submodule <a name="`cloudfrontMonitoringSubscription` Submodule" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontMonitoringSubscription <a name="CloudfrontMonitoringSubscription" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_monitoring_subscription awscc_cloudfront_monitoring_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.Initializer"></a>

```typescript
import { cloudfrontMonitoringSubscription } from '@cdktn/provider-awscc'

new cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription(scope: Construct, id: string, config: CloudfrontMonitoringSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig">CloudfrontMonitoringSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig">CloudfrontMonitoringSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.putMonitoringSubscription">putMonitoringSubscription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMonitoringSubscription` <a name="putMonitoringSubscription" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.putMonitoringSubscription"></a>

```typescript
public putMonitoringSubscription(value: CloudfrontMonitoringSubscriptionMonitoringSubscription): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.putMonitoringSubscription.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscription">CloudfrontMonitoringSubscriptionMonitoringSubscription</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontMonitoringSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.isConstruct"></a>

```typescript
import { cloudfrontMonitoringSubscription } from '@cdktn/provider-awscc'

cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.isTerraformElement"></a>

```typescript
import { cloudfrontMonitoringSubscription } from '@cdktn/provider-awscc'

cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.isTerraformResource"></a>

```typescript
import { cloudfrontMonitoringSubscription } from '@cdktn/provider-awscc'

cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.generateConfigForImport"></a>

```typescript
import { cloudfrontMonitoringSubscription } from '@cdktn/provider-awscc'

cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudfrontMonitoringSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudfrontMonitoringSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudfrontMonitoringSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_monitoring_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontMonitoringSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.monitoringSubscription">monitoringSubscription</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference">CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.distributionIdInput">distributionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.monitoringSubscriptionInput">monitoringSubscriptionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscription">CloudfrontMonitoringSubscriptionMonitoringSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.distributionId">distributionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `monitoringSubscription`<sup>Required</sup> <a name="monitoringSubscription" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.monitoringSubscription"></a>

```typescript
public readonly monitoringSubscription: CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference">CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference</a>

---

##### `distributionIdInput`<sup>Optional</sup> <a name="distributionIdInput" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.distributionIdInput"></a>

```typescript
public readonly distributionIdInput: string;
```

- *Type:* string

---

##### `monitoringSubscriptionInput`<sup>Optional</sup> <a name="monitoringSubscriptionInput" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.monitoringSubscriptionInput"></a>

```typescript
public readonly monitoringSubscriptionInput: IResolvable | CloudfrontMonitoringSubscriptionMonitoringSubscription;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscription">CloudfrontMonitoringSubscriptionMonitoringSubscription</a>

---

##### `distributionId`<sup>Required</sup> <a name="distributionId" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.distributionId"></a>

```typescript
public readonly distributionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontMonitoringSubscriptionConfig <a name="CloudfrontMonitoringSubscriptionConfig" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.Initializer"></a>

```typescript
import { cloudfrontMonitoringSubscription } from '@cdktn/provider-awscc'

const cloudfrontMonitoringSubscriptionConfig: cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.distributionId">distributionId</a></code> | <code>string</code> | The ID of the distribution that you are enabling metrics for. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.monitoringSubscription">monitoringSubscription</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscription">CloudfrontMonitoringSubscriptionMonitoringSubscription</a></code> | A subscription configuration for additional CloudWatch metrics. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `distributionId`<sup>Required</sup> <a name="distributionId" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.distributionId"></a>

```typescript
public readonly distributionId: string;
```

- *Type:* string

The ID of the distribution that you are enabling metrics for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_monitoring_subscription#distribution_id CloudfrontMonitoringSubscription#distribution_id}

---

##### `monitoringSubscription`<sup>Required</sup> <a name="monitoringSubscription" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.monitoringSubscription"></a>

```typescript
public readonly monitoringSubscription: CloudfrontMonitoringSubscriptionMonitoringSubscription;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscription">CloudfrontMonitoringSubscriptionMonitoringSubscription</a>

A subscription configuration for additional CloudWatch metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_monitoring_subscription#monitoring_subscription CloudfrontMonitoringSubscription#monitoring_subscription}

---

### CloudfrontMonitoringSubscriptionMonitoringSubscription <a name="CloudfrontMonitoringSubscriptionMonitoringSubscription" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscription.Initializer"></a>

```typescript
import { cloudfrontMonitoringSubscription } from '@cdktn/provider-awscc'

const cloudfrontMonitoringSubscriptionMonitoringSubscription: cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscription = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscription.property.realtimeMetricsSubscriptionConfig">realtimeMetricsSubscriptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig">CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig</a></code> | A subscription configuration for additional CloudWatch metrics. |

---

##### `realtimeMetricsSubscriptionConfig`<sup>Optional</sup> <a name="realtimeMetricsSubscriptionConfig" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscription.property.realtimeMetricsSubscriptionConfig"></a>

```typescript
public readonly realtimeMetricsSubscriptionConfig: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig">CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig</a>

A subscription configuration for additional CloudWatch metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_monitoring_subscription#realtime_metrics_subscription_config CloudfrontMonitoringSubscription#realtime_metrics_subscription_config}

---

### CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig <a name="CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig.Initializer"></a>

```typescript
import { cloudfrontMonitoringSubscription } from '@cdktn/provider-awscc'

const cloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig: cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig.property.realtimeMetricsSubscriptionStatus">realtimeMetricsSubscriptionStatus</a></code> | <code>string</code> | A flag that indicates whether additional CloudWatch metrics are enabled for a given CloudFront distribution. |

---

##### `realtimeMetricsSubscriptionStatus`<sup>Optional</sup> <a name="realtimeMetricsSubscriptionStatus" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig.property.realtimeMetricsSubscriptionStatus"></a>

```typescript
public readonly realtimeMetricsSubscriptionStatus: string;
```

- *Type:* string

A flag that indicates whether additional CloudWatch metrics are enabled for a given CloudFront distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_monitoring_subscription#realtime_metrics_subscription_status CloudfrontMonitoringSubscription#realtime_metrics_subscription_status}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference <a name="CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.Initializer"></a>

```typescript
import { cloudfrontMonitoringSubscription } from '@cdktn/provider-awscc'

new cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.putRealtimeMetricsSubscriptionConfig">putRealtimeMetricsSubscriptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.resetRealtimeMetricsSubscriptionConfig">resetRealtimeMetricsSubscriptionConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRealtimeMetricsSubscriptionConfig` <a name="putRealtimeMetricsSubscriptionConfig" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.putRealtimeMetricsSubscriptionConfig"></a>

```typescript
public putRealtimeMetricsSubscriptionConfig(value: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.putRealtimeMetricsSubscriptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig">CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig</a>

---

##### `resetRealtimeMetricsSubscriptionConfig` <a name="resetRealtimeMetricsSubscriptionConfig" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.resetRealtimeMetricsSubscriptionConfig"></a>

```typescript
public resetRealtimeMetricsSubscriptionConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.realtimeMetricsSubscriptionConfig">realtimeMetricsSubscriptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference">CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.realtimeMetricsSubscriptionConfigInput">realtimeMetricsSubscriptionConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig">CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscription">CloudfrontMonitoringSubscriptionMonitoringSubscription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `realtimeMetricsSubscriptionConfig`<sup>Required</sup> <a name="realtimeMetricsSubscriptionConfig" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.realtimeMetricsSubscriptionConfig"></a>

```typescript
public readonly realtimeMetricsSubscriptionConfig: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference">CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference</a>

---

##### `realtimeMetricsSubscriptionConfigInput`<sup>Optional</sup> <a name="realtimeMetricsSubscriptionConfigInput" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.realtimeMetricsSubscriptionConfigInput"></a>

```typescript
public readonly realtimeMetricsSubscriptionConfigInput: IResolvable | CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig">CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontMonitoringSubscriptionMonitoringSubscription;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscription">CloudfrontMonitoringSubscriptionMonitoringSubscription</a>

---


### CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference <a name="CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontMonitoringSubscription } from '@cdktn/provider-awscc'

new cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.resetRealtimeMetricsSubscriptionStatus">resetRealtimeMetricsSubscriptionStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRealtimeMetricsSubscriptionStatus` <a name="resetRealtimeMetricsSubscriptionStatus" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.resetRealtimeMetricsSubscriptionStatus"></a>

```typescript
public resetRealtimeMetricsSubscriptionStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.realtimeMetricsSubscriptionStatusInput">realtimeMetricsSubscriptionStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.realtimeMetricsSubscriptionStatus">realtimeMetricsSubscriptionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig">CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `realtimeMetricsSubscriptionStatusInput`<sup>Optional</sup> <a name="realtimeMetricsSubscriptionStatusInput" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.realtimeMetricsSubscriptionStatusInput"></a>

```typescript
public readonly realtimeMetricsSubscriptionStatusInput: string;
```

- *Type:* string

---

##### `realtimeMetricsSubscriptionStatus`<sup>Required</sup> <a name="realtimeMetricsSubscriptionStatus" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.realtimeMetricsSubscriptionStatus"></a>

```typescript
public readonly realtimeMetricsSubscriptionStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig">CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig</a>

---



