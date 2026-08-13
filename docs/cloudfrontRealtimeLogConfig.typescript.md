# `cloudfrontRealtimeLogConfig` Submodule <a name="`cloudfrontRealtimeLogConfig` Submodule" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontRealtimeLogConfig <a name="CloudfrontRealtimeLogConfig" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_realtime_log_config awscc_cloudfront_realtime_log_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer"></a>

```typescript
import { cloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

new cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig(scope: Construct, id: string, config: CloudfrontRealtimeLogConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig">CloudfrontRealtimeLogConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig">CloudfrontRealtimeLogConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.putEndPoints">putEndPoints</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndPoints` <a name="putEndPoints" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.putEndPoints"></a>

```typescript
public putEndPoints(value: IResolvable | CloudfrontRealtimeLogConfigEndPoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.putEndPoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints">CloudfrontRealtimeLogConfigEndPoints</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontRealtimeLogConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isConstruct"></a>

```typescript
import { cloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformElement"></a>

```typescript
import { cloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformResource"></a>

```typescript
import { cloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.generateConfigForImport"></a>

```typescript
import { cloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudfrontRealtimeLogConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudfrontRealtimeLogConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudfrontRealtimeLogConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_realtime_log_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontRealtimeLogConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.endPoints">endPoints</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList">CloudfrontRealtimeLogConfigEndPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.endPointsInput">endPointsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints">CloudfrontRealtimeLogConfigEndPoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fieldsInput">fieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.samplingRateInput">samplingRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fields">fields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.samplingRate">samplingRate</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `endPoints`<sup>Required</sup> <a name="endPoints" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.endPoints"></a>

```typescript
public readonly endPoints: CloudfrontRealtimeLogConfigEndPointsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList">CloudfrontRealtimeLogConfigEndPointsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `endPointsInput`<sup>Optional</sup> <a name="endPointsInput" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.endPointsInput"></a>

```typescript
public readonly endPointsInput: IResolvable | CloudfrontRealtimeLogConfigEndPoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints">CloudfrontRealtimeLogConfigEndPoints</a>[]

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `samplingRateInput`<sup>Optional</sup> <a name="samplingRateInput" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.samplingRateInput"></a>

```typescript
public readonly samplingRateInput: number;
```

- *Type:* number

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `samplingRate`<sup>Required</sup> <a name="samplingRate" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.samplingRate"></a>

```typescript
public readonly samplingRate: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontRealtimeLogConfigConfig <a name="CloudfrontRealtimeLogConfigConfig" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.Initializer"></a>

```typescript
import { cloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

const cloudfrontRealtimeLogConfigConfig: cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.endPoints">endPoints</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints">CloudfrontRealtimeLogConfigEndPoints</a>[]</code> | Contains information about the Amazon Kinesis data stream where you are sending real-time log data for this real-time log configuration. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.fields">fields</a></code> | <code>string[]</code> | A list of fields that are included in each real-time log record. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.name">name</a></code> | <code>string</code> | The unique name of this real-time log configuration. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.samplingRate">samplingRate</a></code> | <code>number</code> | The sampling rate for this real-time log configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `endPoints`<sup>Required</sup> <a name="endPoints" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.endPoints"></a>

```typescript
public readonly endPoints: IResolvable | CloudfrontRealtimeLogConfigEndPoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints">CloudfrontRealtimeLogConfigEndPoints</a>[]

Contains information about the Amazon Kinesis data stream where you are sending real-time log data for this real-time log configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_realtime_log_config#end_points CloudfrontRealtimeLogConfig#end_points}

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

A list of fields that are included in each real-time log record.

In an API response, the fields are provided in the same order in which they are sent to the Amazon Kinesis data stream.
 For more information about fields, see [Real-time log configuration fields](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields) in the *Amazon CloudFront Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_realtime_log_config#fields CloudfrontRealtimeLogConfig#fields}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The unique name of this real-time log configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_realtime_log_config#name CloudfrontRealtimeLogConfig#name}

---

##### `samplingRate`<sup>Required</sup> <a name="samplingRate" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.samplingRate"></a>

```typescript
public readonly samplingRate: number;
```

- *Type:* number

The sampling rate for this real-time log configuration.

The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. The sampling rate is an integer between 1 and 100, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_realtime_log_config#sampling_rate CloudfrontRealtimeLogConfig#sampling_rate}

---

### CloudfrontRealtimeLogConfigEndPoints <a name="CloudfrontRealtimeLogConfigEndPoints" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints.Initializer"></a>

```typescript
import { cloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

const cloudfrontRealtimeLogConfigEndPoints: cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints.property.kinesisStreamConfig">kinesisStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig">CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig</a></code> | Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints.property.streamType">streamType</a></code> | <code>string</code> | The type of data stream where you are sending real-time log data. The only valid value is ``Kinesis``. |

---

##### `kinesisStreamConfig`<sup>Required</sup> <a name="kinesisStreamConfig" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints.property.kinesisStreamConfig"></a>

```typescript
public readonly kinesisStreamConfig: CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig">CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig</a>

Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_realtime_log_config#kinesis_stream_config CloudfrontRealtimeLogConfig#kinesis_stream_config}

---

##### `streamType`<sup>Required</sup> <a name="streamType" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints.property.streamType"></a>

```typescript
public readonly streamType: string;
```

- *Type:* string

The type of data stream where you are sending real-time log data. The only valid value is ``Kinesis``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_realtime_log_config#stream_type CloudfrontRealtimeLogConfig#stream_type}

---

### CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig <a name="CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig.Initializer"></a>

```typescript
import { cloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

const cloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig: cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAMlong (IAM) role that CloudFront can use to send real-time log data to your Kinesis data stream. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig.property.streamArn">streamArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Kinesis data stream where you are sending real-time log data. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAMlong (IAM) role that CloudFront can use to send real-time log data to your Kinesis data stream.

For more information the IAM role, see [Real-time log configuration IAM role](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-iam-role) in the *Amazon CloudFront Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_realtime_log_config#role_arn CloudfrontRealtimeLogConfig#role_arn}

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Kinesis data stream where you are sending real-time log data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_realtime_log_config#stream_arn CloudfrontRealtimeLogConfig#stream_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference <a name="CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

new cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.streamArn">streamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig">CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.streamArnInput"></a>

```typescript
public readonly streamArnInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig">CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig</a>

---


### CloudfrontRealtimeLogConfigEndPointsList <a name="CloudfrontRealtimeLogConfigEndPointsList" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.Initializer"></a>

```typescript
import { cloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

new cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.get"></a>

```typescript
public get(index: number): CloudfrontRealtimeLogConfigEndPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints">CloudfrontRealtimeLogConfigEndPoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontRealtimeLogConfigEndPoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints">CloudfrontRealtimeLogConfigEndPoints</a>[]

---


### CloudfrontRealtimeLogConfigEndPointsOutputReference <a name="CloudfrontRealtimeLogConfigEndPointsOutputReference" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer"></a>

```typescript
import { cloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

new cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.putKinesisStreamConfig">putKinesisStreamConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKinesisStreamConfig` <a name="putKinesisStreamConfig" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.putKinesisStreamConfig"></a>

```typescript
public putKinesisStreamConfig(value: CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.putKinesisStreamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig">CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.kinesisStreamConfig">kinesisStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference">CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.kinesisStreamConfigInput">kinesisStreamConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig">CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.streamTypeInput">streamTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.streamType">streamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints">CloudfrontRealtimeLogConfigEndPoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kinesisStreamConfig`<sup>Required</sup> <a name="kinesisStreamConfig" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.kinesisStreamConfig"></a>

```typescript
public readonly kinesisStreamConfig: CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference">CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference</a>

---

##### `kinesisStreamConfigInput`<sup>Optional</sup> <a name="kinesisStreamConfigInput" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.kinesisStreamConfigInput"></a>

```typescript
public readonly kinesisStreamConfigInput: IResolvable | CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig">CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig</a>

---

##### `streamTypeInput`<sup>Optional</sup> <a name="streamTypeInput" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.streamTypeInput"></a>

```typescript
public readonly streamTypeInput: string;
```

- *Type:* string

---

##### `streamType`<sup>Required</sup> <a name="streamType" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.streamType"></a>

```typescript
public readonly streamType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontRealtimeLogConfigEndPoints;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints">CloudfrontRealtimeLogConfigEndPoints</a>

---



